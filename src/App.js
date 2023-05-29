import './App.css';
import React, { Suspense } from 'react';
import Loading from './loading';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import configureStore from "./store";
import CommonLayout from './component/commonlayout/commonlayout';
// import  Hotel from './pages/hotels/index.js';
// import Bus  from './pages/bus';
// import Car from './pages/car';
// import FlightlistOneway from "./pages/flight/flightlist/onewaylist/index-oneway";
// import FlightlistRoundTrip from "./pages/flight/flightlist/roundtriplist/index-roundtrip";
// import FlightlistMulticity from './pages/flight/flightlist/multicitylist/index-multicity';
// import FlightConfirmation from "./pages/flight/flightconfirmation/index";
// import FlightreturnConfirm from "./pages/flight/flightreturnconfirmation/index";
// import FlightPayment from './pages/flight/flightpayment/index';
// import Hotellist from './pages/hotels/listing/index';
// import Buslist from './pages/bus/buslist/index';
// import CarListOneway from'./pages/car/carlist/oneway/oneway-index';
// import CarListRoundTrip from'./pages/car/carlist/roundtrip/roundtrip-index';
// import CarListLocal from'./pages/car/carlist/local/local-index';
// import BusConfirmation from'./pages/bus/busconfirmationdetails/index';
// import CarConfirmation from'./pages/car/carconfirmationdetails/index';
// import HotelDetails from'./pages/hotels/details/index';
// import HotelPayment from'./pages/hotels/hotelpayment/index';
// import HotelConfirmation from'./pages/hotels/confirmation/index';
// import BusPayment from'./pages/bus/buspayment/index';
// import CarPayment from'./pages/car/carpayment/index';
// import { useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
// const Home = React.lazy(() => import('./pages/home/index.js'));
// const ProfilePage = React.lazy(() => import('./pages/authentication/profilepage'));
// const TripHistory = React.lazy(() => import('./pages/triphistory/index'));
// const Offers = React.lazy(() => import('./pages/offers/index'));
// const Logout = React.lazy(() => import('./pages/authentication/logout'));
// const PrivacyPolicy = React.lazy(() => import('./pages/support/privacypolicy'));
// const ContactUs = React.lazy(() => import('./pages/support/contactus'));
// const TermsAndCondition = React.lazy(() => import('./pages/support/termsandcondition'));
// const AboutUs = React.lazy(() => import('./pages/support/aboutus'));
const Home = React.lazy(() => import('./pages/home/index.js'));
const Hotel = React.lazy(() => import('./pages/hotels/index.js'));
const Car = React.lazy(() => import('./pages/car'));
const Bus = React.lazy(() => import('./pages/bus'));
const FlightlistOneway = React.lazy(() => import('./pages/flight/flightlist/onewaylist/index-oneway'));
const FlightlistRoundTrip = React.lazy(() => import('./pages/flight/flightlist/roundtriplist/index-roundtrip'));
const FlightlistMulticity = React.lazy(() => import('./pages/flight/flightlist/multicitylist/index-multicity'));
const Hotellist = React.lazy(() => import('./pages/hotels/listing/index'));
const Buslist = React.lazy(() => import('./pages/bus/buslist/index'));
const CarListOneway = React.lazy(() => import('./pages/car/carlist/oneway/oneway-index'));
const CarListRoundTrip = React.lazy(() => import('./pages/car/carlist/roundtrip/roundtrip-index'));
const CarListLocal = React.lazy(() => import('./pages/car/carlist/local/local-index'));
const BusConfirmation = React.lazy(() => import('./pages/bus/busconfirmationdetails/index'));
const CarConfirmation = React.lazy(() => import('./pages/car/carconfirmationdetails/index'));
const HotelDetails = React.lazy(() => import('./pages/hotels/details/index'));
const HotelPayment = React.lazy(() => import('./pages/hotels/hotelpayment/index'));
const FlightPayment = React.lazy(() => import('./pages/flight/flightpayment/index'));
const FlightConfirmation = React.lazy(() => import('./pages/flight/flightconfirmation/index'));
const FlightreturnConfirm = React.lazy(() => import('./pages/flight/flightreturnconfirmation/index'));
const HotelConfirmation = React.lazy(() => import('./pages/hotels/confirmation/index'));
const BusPayment = React.lazy(() => import('./pages/bus/buspayment/index'));
const ProfilePage = React.lazy(() => import('./pages/authentication/profilepage'));
const CarPayment = React.lazy(() => import('./pages/car/carpayment/index'));
const TripHistory = React.lazy(() => import('./pages/triphistory/index'));
const Offers = React.lazy(() => import('./pages/offers/index'));
const Logout = React.lazy(() => import('./pages/authentication/logout'));
const PrivacyPolicy = React.lazy(() => import('./pages/support/privacypolicy'));
const ContactUs = React.lazy(() => import('./pages/support/contactus'));
const TermsAndCondition = React.lazy(() => import('./pages/support/termsandcondition'));
const AboutUs = React.lazy(() => import('./pages/support/aboutus'));



const { store, persistor } = configureStore();

function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<Loading />}>
          <Router>
            <Switch>
              <Route path="/">
                <CommonLayout>
                  {/* <Redirect exact from='/' to='/flight' /> */}
                  <Route exact path="/" component={Home} />
                  <Route exact path="/home" component={Home} />
                  <Route exact path="/flight" component={Home} />
                  <Route exact path="/hotel" component={Hotel} />
                  <Route exact path="/car" component={Car} />
                  <Route exact path="/bus" component={Bus} />
                  <Route exact path="/flight/flightlist-oneway" component={FlightlistOneway} />
                  <Route exact path="/flight/flightlist-roundtrip" component={FlightlistRoundTrip} />
                  <Route exact path="/flight/flightlist-multicity" component={FlightlistMulticity} />
                  <Route exact path="/car/carlistoneway" component={CarListOneway} />
                  <Route exact path="/car/carlist-roundtrip" component={CarListRoundTrip} />
                  <Route exact path="/car/carlist-local" component={CarListLocal} />
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
                  <Route exact path='/home/triphistory' component={TripHistory} />
                  <Route exact path='/home/offers' component={Offers} />
                  <Route exact path='/home/logout' component={Logout} />
                  <Route exact path='/home/privacypolicy' component={PrivacyPolicy} />
                  <Route exact path="/home/contactus" component={ContactUs} />
                  <Route exact path='/home/termsandconditions' component={TermsAndCondition} />
                  <Route exact path='/home/aboutus' component={AboutUs} />
                  <Route exact path='/flight/flightreturnconform' component={FlightreturnConfirm} />
                </CommonLayout>
              </Route>
            </Switch>
          </Router>
        </Suspense>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </PersistGate>
    </Provider>

  );
}

export default App;
