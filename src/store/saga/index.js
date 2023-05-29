import { all } from "redux-saga/effects";
import Bus from "./bus";
import FlightSearch from "./flightsearch";
import HotelSearch from "./hotelsearch";
import HotelInfo from "./hotelinfo";
import HotelRoom from "./hotelroom";
import BlockRoom from "./blockroom";
import HotelBook from "./hotelbook";
import Car from "./car";
import CarBook from "./carbook";
import BusLayout from "./buslayout";
import BusBook from "./busbook";
import FlightOneway from "./flightoneway";
import FlightOnewayInfo from "./flightonewayinfo";
import BusCityList from "./buscitylist";
import FlightOnewayBook from "./flightonewaybook";
import FLightReturnBook from "./flightreturnbook"
import HotelCityList from "./hotelcitylist";
import CarCityList from "./carcitylist";
import AirportCityList from "./airportcitylist";
import AirLine from "./airline";
import FlightReturnInfo from "./flightreturninfo";
import signup from "./signup"
import busBoardingpoint from "./busboardingpoint"
import BusBlock from "./busblock"
import flightOneWayBookGDS from "./flightonewaybookGDS"
import flightOnwWayBookHoldGDS from "./flightonewaybookGDSHold"
import flightReturnBookGDS from "./flightreturnbookGDS"
import flightReturnBookHoldGDS from "./flightreturnbookHoldGDS"

export default function* rootSaga() {
  yield all([
    Bus(),
    BusLayout(),
    BusBook(),
    BusBlock(),
    BusCityList(),
    Car(),
    CarBook(),
    CarCityList(),
    FlightSearch(),
    FlightOneway(),
    FlightOnewayInfo(),
    FlightReturnInfo(),
    FlightOnewayBook(),
    FLightReturnBook(),
    HotelSearch(),
    HotelCityList(),
    HotelInfo(),
    HotelRoom(),
    BlockRoom(),
    HotelBook(),
    AirportCityList(),
    AirLine(),
    signup(),
    busBoardingpoint(),
    flightOneWayBookGDS(),
    flightOnwWayBookHoldGDS(),
    flightReturnBookGDS(),
    flightReturnBookHoldGDS()
  ]);
}
