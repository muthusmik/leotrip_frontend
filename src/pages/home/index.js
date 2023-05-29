import React from 'react';
import CustomNavbar from '../../component/navbar/Navbar';
import Header from '../../component/header/Header';
import Footer from '../../component/footer/footer';
import Homepage from './home';


function Home() {


   /*  # scroll Top of Page */

   React.useEffect(()=>{
      window.scrollTo(0,0);
    }, []);

  

   return (
      <div>
        
         <div><Header  /* selected={selectedvalue} *//></div>
         <div className='mt-5'><Homepage /></div>
         <Footer />
      </div>
   )
};
export default Home;