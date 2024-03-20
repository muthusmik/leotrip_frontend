import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import callSupport from '../../../assets/images/callSupport.svg';

interface CallsupportProps {}

const Callsupport: React.FC<CallsupportProps> = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [countEnd, setCountEnd] = useState(5);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('callsupportComponent');
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
    <div id="callsupportComponent">
      <img src={callSupport} alt="" className="" />
      <div className="w-[100%] font-extrabold text-xl text-center">
        {isVisible && (
          <CountUp start={0} end={countEnd} delay={1} duration={10} />
        )}
        {isVisible && ' CRORE'}
      </div>
      <h3 className="text-lg text-center w-[100%]">HAPPY&nbsp;CUSTOMERS</h3>
    </div>
  );
}

export default Callsupport;
