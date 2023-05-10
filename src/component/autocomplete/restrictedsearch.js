import React from "react";
import PlacesAutocomplete, {geocodeByAddress,getLatLng} from "react-places-autocomplete";


export default function RestrictedSearch  ({searchType,googlePlaceHolder,countrysearch}) {


    const [address, setAddress] = React.useState("");

    const [coordinates, setCoordinates] = React.useState({
        lat: null,
        lng: null
      });
    
      const handleSelect = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setAddress(value);
        setCoordinates(latLng);
      };


    
    
      const options = {
        fields: ["formatted_address", "geometry", "name"],
        componentRestrictions: { country: [countrysearch] },
        strictBounds: false,
        types: [searchType],
      };

      React.useEffect (() => {
        console.log(address,"hello")
      },[address])

    
    return (
        <div>
            <PlacesAutocomplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
                searchOptions={options}
            >
               
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    
                    <div>
                        {console.log(getInputProps,"hi")}
                        <input {...getInputProps({ placeholder: googlePlaceHolder })}/>
                        <div>
                            {loading ? <div>...loading</div> : null}

                            {suggestions.map(suggestion => {
                                const style = {
                                    backgroundColor: suggestion.active ? "#c1d9e3" : "#fff",
                                    padding:"8px 10px",
                                    fontSize:"12px",
                                    borderBottom:"0.5px solid #e1e5e6",
                                    zIndex:"9",
                                    position: "relative"
                                
                                };

                                return (
                                    <div {...getSuggestionItemProps(suggestion,{ style })}>
                                        {suggestion.description}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        </div>
    );
}
