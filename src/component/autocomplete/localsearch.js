import React from "react";
import PlacesAutocomplete from "react-places-autocomplete";


export default function LocalSearch({ onChange, onSelect, searchOptions, value, searchdata, searchplaceholder,required}) {


    return (
        <div>
            <PlacesAutocomplete
                value={value}
                onChange={(e) => { onChange(e) }}
                onSelect={(e) => { onSelect(e) }}
                searchOptions={searchOptions}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (

                    <div>
                        <input {...getInputProps()}
                            placeholder={searchplaceholder}
                            required={required}
                        />
                        <div style={{ position: 'absolute', zIndex: '1' }}>
                            {loading ? <div>...loading</div> : null}

                            {suggestions.map(suggestion => {
                                const style = {
                                    backgroundColor: suggestion.active ? "#c1d9e3" : "#fff",
                                    padding: "8px 10px",
                                    fontSize: "12px",
                                    borderBottom: "0.5px solid #e1e5e6",
                                    zIndex: "9",
                                    position: "relative"
                                };
                                return (
                                    <div {...getSuggestionItemProps(suggestion, { style })}>
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
