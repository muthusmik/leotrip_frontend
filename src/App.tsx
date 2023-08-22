import React, { useEffect } from 'react';
import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import ScrollToTop from './components/utils/ScrollToTop';

function App() {
  let element = useRoutes(routes);
  useEffect(() => {
    console.log('LEO WEB PROD VERSION 1.0');
  }, []);

  return (

    <div className="w-full min-h-screen bg-int-background">
      {element}
    </div>

  );
}

export default App;
