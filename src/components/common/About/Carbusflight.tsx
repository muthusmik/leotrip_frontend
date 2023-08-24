import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import carBusFlight from '../../../assets/images/carBusFlight.svg';

interface CarbusflightProps {}

const Carbusflight: React.FC<CarbusflightProps> = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [countEnd, setCountEnd] = useState(100000);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('carbusflightComponent');
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementPosition - windowHeight <= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="carbusflightComponent" className="mt-11">
      <img src={carBusFlight} alt="" className="" />
      <div className="w-[100%] font-extrabold text-xl mt-6 text-center">
        {isVisible && (
          <CountUp start={0} end={countEnd} delay={1} duration={15} />
        )}
        {isVisible && ' +'}
      </div>
      <h3 className="w-[100%] text-center text-lg">ROUTES</h3>
    </div>
  );
}

export default Carbusflight;
