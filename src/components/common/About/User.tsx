import React, { useEffect, useState } from 'react';
import user from '../../../assets/images/user.svg';
import CountUp from 'react-countup';

interface UserProps {}

const User: React.FC<UserProps> = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [countEnd, setCountEnd] = useState(2000);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('userComponent');
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
    <div id="userComponent" className="mt-5">
      <img src={user} alt="" className="" />
      <div className="w-[100%] font-extrabold text-xl mt-[-10px] text-center">
        {isVisible && (
          <CountUp start={0} end={countEnd} delay={1} duration={10} />
        )}
        {isVisible && '+'}
      </div>
      <h3 className="text-lg w-[100%] text-center">PARTNER</h3>
    </div>
  );
};

export default User;
