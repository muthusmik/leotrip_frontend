import React from 'react';
import { RouteObject } from 'react-router-dom';
import HomePage from '../pages/Home'; // Your home page component
import NotFoundPage from '../pages/NotFound'; // Your not found page component

// Import your module components here
import BusModule from '../modules/bus';
import FlightModule from '../modules/flight';
import HotelModule from '../modules/hotel';
import CarModule from '../modules/car';
import Profile from 'modules/profiles/profile';

const routes: RouteObject[] = [


  {
    path: '/',
    element: <HomePage />, // Your bus module component
  },
  {
    path: '/bus',
    element: <BusModule />, // Your bus module component
  },
  {
    path: '/flights',
    element: <FlightModule />, // Your flight module component
  },
  {
    path: '/hotel',
    element: <HotelModule />, // Your hotel module component
  },
  {
    path: '/car',
    element: <CarModule />, // Your train module component
  },
  {
    path: '/myprofile',
    element: <Profile />, // Your train module component
  },
  { path: '*', element: <NotFoundPage /> }, // Not found page for unmatched URLs
];

export default routes;
