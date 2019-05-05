import React from 'react';
import HotelsPage from '../hotels-page/hotels-page.jsx';

const App = (props) => {
  const hotels = props.hotels;

  return <HotelsPage 
    hotels={hotels}
  />;
};

export default App;
