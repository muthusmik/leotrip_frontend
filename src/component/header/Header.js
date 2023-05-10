import React from 'react';
import '../header/header.scss';
import { Flight } from '../../pages/flight';


const Header = () => {
 
  return (
    <div className='header'>
      <div className='headerImage'>
      <div className="tab-contents container">
        <Flight/>
      </div>
      </div>
    </div>
  );

};
export default Header;  