import React from 'react';
import { RouteObject } from 'react-router-dom';
import HomePage from '../pages/Home'; // Your home page component
import NotFoundPage from '../pages/NotFound'; // Your not found page component

// Import your module components here
import BusModule from '../modules/bus';
import FlightModule from '../modules/flight';
import HotelModule from '../modules/hotel';
import CarModule from '../modules/car';
import CommonLayout from 'modules/profiles/CommonLayout';
import FlightShowList from 'modules/flight/FlightShowList';
import CarShowList from 'modules/car/CarShowList';
import BusShowList from 'modules/bus/BusShowList';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/bus',
    element: <BusModule />, // Your bus module component
  },
  {
    path: '/busShow',
    element: <BusShowList />,
  },
  {
    path: '/flights',
    element: <FlightModule />, // Your flight module component
  },
  {
    path: '/flightShow',
    element: <FlightShowList />,
  },
  {
    path: '/hotel',
    element: <HotelModule />, // Your hotel module component
  },
  {
    path: '/car',
    element: <CarModule />,
  },
  {
    path: '/carShow',
    element: <CarShowList />,
  },
  {
    path: '/profile',
    element: <CommonLayout />,
  },

  { path: '*', element: <NotFoundPage /> }, // Not found page for unmatched URLs
];

export default routes;
