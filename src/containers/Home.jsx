import React, { useEffect, useState } from 'react';
import Grid from './Grid';
import Placeholder from '../components/Placeholder/Placeholder';
import { Redirect } from 'react-router';

const HomeContext = React.createContext();

const Home = () => {
  const [item, setItem] = useState(null);
  const [url, setUrl] = useState(null);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!url) {
      return;
    }
    const timer = setTimeout(() => setRedirect(true), 450);
    return () => clearTimeout(timer);
  }, [url]);

  const openPage = (el, url) => {
    setItem(el);
    setUrl(url);
  };

  if (redirect) {
    return (
      <Redirect push to={url} />
    )
  }

  return (
    <HomeContext.Provider value={{ openPage }}>
      <div className="App">
        <Grid />
        <Placeholder item={item} />
      </div>
    </HomeContext.Provider>
  ) ;
};

export default Home;

export { HomeContext };
