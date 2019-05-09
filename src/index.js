import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";


const init = () => {
  const hotels = [
    {
      description: `Beautiful & luxurious apartment at great location`,
      price: 120,
      type: `Apartment`,
      rating: 93,
      photo: `img/apartment-01.jpg`
    },
    {
      description: `Wood and stone place`,
      price: 200,
      type: `Private Room`,
      rating: 80,
      photo: `img/apartment-02.jpg`
    },
    {
      description: `Canal View Prinsengracht`,
      price: 80,
      type: `Private Room`,
      rating: 100,
      photo: `img/apartment-03.jpg`
    },
    {
      description: `Nice, cozy, warm big bed apartment`,
      price: 90,
      type: `Apartment`,
      rating: 80,
      photo: `img/apartment-02.jpg`
    },
    {
      description: `Normalnyi hotel`,
      price: 1000,
      type: `Hostel`,
      rating: 80,
      photo: `img/apartment-01.jpg`
    }
  ];

  ReactDOM.render(
      <App hotels={hotels}/>,
      document.getElementById(`root`)
  );
};

init();

