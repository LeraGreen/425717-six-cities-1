// import React from "react";
// import renderer from "react-test-renderer";

// import Map from "./map.jsx";

// const mock = {
//   hotels: [
//     {
//       description: `Beautiful & luxurious apartment at great location`,
//       price: 120,
//       type: `Apartment`,
//       rating: 93,
//       photo: `img/apartment-01.jpg`,
//       coordinates: [52.3909553943508, 4.85309666406198]
//     },
//     {
//       description: `Wood and stone place`,
//       price: 200,
//       type: `Private Room`,
//       rating: 80,
//       photo: `img/apartment-02.jpg`,
//       coordinates: [52.369553943508, 4.85309666406198]
//     }
//   ]
// }

// it(`Map renders correctly`, () => {
//   const {hotels} = mock;

//   const tree = renderer
//     .create(<Map hotels={hotels} />)
//     .toJSON();

//   expect(tree).toMatchSnapshot();
// });