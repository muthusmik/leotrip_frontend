
import React,{useState,useEffect,useRef}from 'react';
import CustomNavbar from '../navbar/Navbar';

const CommonLayout = ({ children }) => {
  
  return (
    <>
      <CustomNavbar />
      {children}
    </>
  );

};
export default CommonLayout;  