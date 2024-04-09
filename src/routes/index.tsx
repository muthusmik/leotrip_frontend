import React from "react";
import { RouteObject } from "react-router-dom";
import HomePage from "../pages/Home"; // Your home page component
import NotFoundPage from "../pages/NotFound"; // Your not found page component

// Import your module components here
import BusModule from "../modules/bus";
import FlightModule from "../modules/flight";
import HotelModule from "../modules/hotel";
import CarModule from "../modules/car";
import CommonLayout from "modules/profiles/CommonLayout";
import FlightOneWay from "../modules/flight/flightList/oneWay/index";
import FlightReview from "../modules/flight/flightList/oneWay/flightreview";
import HotelList from "modules/hotel/hotelList";
import BusListing from "modules/bus/buslist";
import ViewRoom from "modules/hotel/viewroom";
import HotelReview from "modules/hotel/hotelreview";
import BusDetail from "modules/bus/busdetail/BusDetail";
import BusInfo from "modules/bus/busdetail";
import BusPaymentDetails from "modules/bus/Payment";
import TicketDetails from "modules/hotel/payment/TicketDetails";
import BookingDetails from "modules/hotel/payment/BookingDetails";
import Traveller from "modules/flight/flightList/oneWay/traveller";
import FlightListRoundTrip from "modules/flight/flightList/roundTrip/FlightListRoundTrip";
import RoundTrip from "modules/flight/flightList/roundTrip";
import FlightReviewDetails from "modules/flight/flightList/roundTrip/FlightReviewDetails";
import FlightPaymentDetails from "modules/flight/flightList/oneWay/payment";
import RoundTripPayement from "modules/flight/flightList/roundTrip/payment";
import FlightTicketDetails from "modules/flight/flightList/oneWay/payment/FlightTicketDetails";
const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />, // Your bus module component
  },
  {
    path: "/bus",
    element: <BusModule />, // Your bus module component
  },
  {
    path: "/flights",
    element: <FlightModule />, // Your flight module component
  },
  {
    path: "/hotel",
    element: <HotelModule />, // Your hotel module component
  },
  {
    path: "/car",
    element: <CarModule />, // Your train module component
  },
  {
    path: "/profile",
    element: <CommonLayout />, // Your train module component
  },

  { path: "*", element: <NotFoundPage /> }, // Not found page for unmatched URLs
  {
    path: "flight/flight-oneway",
    element: <FlightOneWay />,
  },
  {
    path: "/flight/review",
    element: <FlightReview />,
  },
  {
    path: "/flight/traveller",
    element: <Traveller />,
  },
  {
    path: "/flight/payment",
    element: <FlightPaymentDetails/>,
  },
  {
    path: "hotel/hotelList",
    element: <HotelList />,
  },
  {
    path: "bus/busList",
    element: <BusListing />,
  },
  {
    path: "bus/busdetail",
    element: <BusInfo />,
  },
  {
    path: "hotel/viewRoom",
    element: <ViewRoom />,
  },
  {
    path: "hotel/hotelreview",
    element: <HotelReview />,
  },
  {
    path: "hotel/payment",
    // element: <TicketDetails />,
    element: <BookingDetails />,
  },
  {
    path: "bus/payment",
    element: <BusPaymentDetails />,
  },
  {
    path: "flights/roundtripSearch",
    element: <RoundTrip />,
  },
  {
    path: "flights/reviewDetails",
    element: <FlightReviewDetails />,
  },
  {
    path: "/flights/payments",
    element: <RoundTripPayement />,
  },
   {
    path: "flights/ticketdetails",
    element: <FlightTicketDetails />,
  },
];

export default routes;
