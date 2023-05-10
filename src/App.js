import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from './pages/home/index.js';
import Hotel from './pages/hotels/index.js';
import Car from './pages/car';
import Bus from './pages/bus';
import FlightlistOneway from './pages/flight/flightlist/onewaylist/index-oneway';
import FlightlistRoundTrip from './pages/flight/flightlist/roundtriplist/index-roundtrip';
import FlightlistMulticity from './pages/flight/flightlist/multicitylist/index-multicity';
import Hotellist from './pages/hotels/listing/index';
import Buslist from './pages/bus/buslist/index';
import CarListOneway from './pages/car/carlist/oneway/oneway-index';
import CarListRoundTrip from './pages/car/carlist/roundtrip/roundtrip-index';
import CarListAirportTransfer from './pages/car/carlist/airporttransfer/airporttransfer-index';
import BusConfirmation from './pages/bus/busconfirmationdetails/index';
import CarConfirmation from './pages/car/carconfirmationdetails/index';
import HotelDetails from './pages/hotels/details/index';
import HotelPayment from './pages/hotels/hotelpayment/index';
import FlightPayment from './pages/flight/flightpayment/index';
import FlightConfirmation from './pages/flight/flightconfirmation/index';
import FlightreturnConfirm from './pages/flight/flightreturnconfirmation/index';
import HotelConfirmation from './pages/hotels/confirmation/index';
import BusPayment from './pages/bus/buspayment/index';
import ProfilePage from './pages/authentication/profilepage';
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import configureStore from "./store";
import CarPayment from './pages/car/carpayment/index';
import TripHistory from './pages/triphistory/index';
import Offers from './pages/offers/index';
import Logout from './pages/authentication/logout';
import PrivacyPolicy from './pages/support/privacypolicy';
import ContactUs from './pages/support/contactus';
import TermsAndCondition from './pages/support/termsandcondition';
import AboutUs from './pages/support/aboutus';



const { store, persistor } = configureStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Redirect exact from='/' to='/flight' />
          <Route exact path="/flight" component={Home} />
          <Route exact path="/hotel" component={Hotel} />
          <Route exact path="/car" component={Car} />
          <Route exact path="/bus" component={Bus} />
          <Route exact path="/flight/flightlist-oneway" component={FlightlistOneway} />
          <Route exact path="/flight/flightlist-roundtrip" component={FlightlistRoundTrip} />
          <Route exact path="/flight/flightlist-multicity" component={FlightlistMulticity} />
          <Route exact path="/car/carlistoneway" component={CarListOneway} />
          <Route exact path="/car/carlist-roundtrip" component={CarListRoundTrip} />
          <Route exact path="/car/carlist-airporttransfer" component={CarListAirportTransfer} />
          <Route exact path="/hotel/hotellist" component={Hotellist} />
          <Route exact path="/hotel/hoteldetails" component={HotelDetails} />
          <Route exact path="/bus/buslist" component={Buslist} />
          <Route exact path="/car/carconfirmation" component={CarConfirmation} />
          <Route exact path="/bus/busconfirmation" component={BusConfirmation} />
          <Route exact path="/bus/buspayment" component={BusPayment} />
          <Route exact path="/hotel/hotelpayment" component={HotelPayment} />
          <Route exact path="/flight/flightpayment" component={FlightPayment} />
          <Route exact path='/flight/flightconfirmation' component={FlightConfirmation} />
          <Route exact path='/hotel/hotelconfirmation' component={HotelConfirmation} />
          <Route exact path='/home/profilepage' component={ProfilePage} />
          <Route exact path='/car/CarPayment' component={CarPayment} />
          <Route exact path='/home/triphistory' component={TripHistory}/>
          <Route exact path='/home/offers' component={Offers} />
          <Route exact path='/home/logout' component={Logout} />
          <Route exact path='/home/privacypolicy' component={PrivacyPolicy}/>
          <Route exact path="/home/contactus" component={ContactUs} />
          <Route exact path='/home/termsandconditions' component={TermsAndCondition}/>
          <Route exact path='/home/aboutus' component={AboutUs} />
          <Route exact path='/flight/flightreturnconform' component={FlightreturnConfirm}/>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
