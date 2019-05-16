import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";
import hotels from "./mocks/hotels.js";


const init = () => {

  ReactDOM.render(
      <App hotels={hotels} />,
      document.getElementById(`root`)
  );
};

init();

