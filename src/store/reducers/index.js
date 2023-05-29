import { combineReducers } from "redux";
import FlightSearchReducer from "./flightsearch"
import BusReducer from "./bus";
import HotelReducer from "./hotelsearch";
import HotelInfoReducer from "./hotelinfo";
import HotelRoomReducer from './hotelroom';
import BlockRoomReducer from './blockroom';
import HotelBookReducer from './hotelbook';
import CarReducer from './car';
import BusLayoutReducer from './buslayout';
import BusBookReducer from "./busbook";
import CarBookReducer from "./carbook";
import FlightOneWayReducer from "./flightoneway";
import FlightOneWayInfoReducer from "./flightonewayinfo";
import FlightOneWayBookReducer from "./flightonewaybook";
import HotelGuestInfoReducer from "./hotelguestinfo";
import BusCityListReducer from "./buscitylist";
import HotelCityListReducer from "./hotelcitylist";
import HoteldestinationReducer from "./hoteldestination";
import CarCityListReducer from "./carcitylist"
import AirportCityListReducer from "./airportcitylist";
import AirLineReducer from "./airline";
import FlightReturnInfoReducer from "./flightreturninfo";
import SignupReducer from "./signup";
import busboardingpointReducer from "./busboardingpoint"
import busblockReducer from "./busblock";
import FlightReturnBookReducer from './flightreturnbook';
import flightOneWayBookGDS from './flightonewaybookGDS';
import flightOneWayBookGDSHOLD from './flightonewaybookGDSHold';
import flightReturnBookGDS from './flightreturnbookGDS';
import flightReturnBookGDSHOLD from './flightreturnbookGDSHold';

const rootReducer = combineReducers({
  CarBook: CarBookReducer,
  Car: CarReducer,
  carcitylist: CarCityListReducer,
  BusBook: BusBookReducer,
  Bus: BusReducer,
  BusLayout: BusLayoutReducer,
  FlightSearch: FlightSearchReducer,
  FlightOneway: FlightOneWayReducer,
  FlightOnewayInfo: FlightOneWayInfoReducer,
  FlightReturnInfo: FlightReturnInfoReducer,
  FlightOneWayBook: FlightOneWayBookReducer,
  FlightReturnBook: FlightReturnBookReducer,
  HotelSearch: HotelReducer,
  HotelInfo: HotelInfoReducer,
  HotelRoom: HotelRoomReducer,
  BlockRoom: BlockRoomReducer,
  HotelBook: HotelBookReducer,
  HotelGuestInfo: HotelGuestInfoReducer,
  BusCityList: BusCityListReducer,
  HotelCityList: HotelCityListReducer,
  Hoteldestination: HoteldestinationReducer,
  AirportCityList: AirportCityListReducer,
  AirLine: AirLineReducer,
  Signup: SignupReducer,
  busboardingpoint: busboardingpointReducer,
  busblock: busblockReducer,
  flightOneWayBookGds: flightOneWayBookGDS,
  flightOneWayBookGdsHold: flightOneWayBookGDSHOLD,
  flightReturnBookGds: flightReturnBookGDS,
  flightReturnBookGdsHold: flightReturnBookGDSHOLD
});

export default rootReducer;
