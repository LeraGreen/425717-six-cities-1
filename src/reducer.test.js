// import reducer from "./reducer.js";

// it(`The city should change`, () => {
//   expect(reducer({
//     city: `Helsinki`,
//     offers: [
//       {
//         description: `Beautiful & luxurious apartment at great location`,
//         price: 120,
//         type: `Apartment`,
//         rating: 93,
//         photo: `img/apartment-01.jpg`,
//         coordinates: [52.3909553943508, 4.85309666406198]
//       },
//       {
//         description: `Not bad hostel`,
//         price: 60,
//         type: `Hostel`,
//         rating: 60,
//         photo: `img/apartment-02.jpg`,
//         coordinates: [52.3909553943508, 4.85309666406198]
//       }
//     ]
//   }, {
//     type: `CHANGE_CITY`,
//     payload: `Berlin`
//   })).toEqual({
//     city: `Berlin`,
//     offers: [
//       {
//         description: `Beautiful & luxurious apartment at great location`,
//         price: 120,
//         type: `Apartment`,
//         rating: 93,
//         photo: `img/apartment-01.jpg`,
//         coordinates: [52.3909553943508, 4.85309666406198]
//       },
//       {
//         description: `Not bad hostel`,
//         price: 60,
//         type: `Hostel`,
//         rating: 60,
//         photo: `img/apartment-02.jpg`,
//         coordinates: [52.3909553943508, 4.85309666406198]
//       }
//     ]
//   })
// })

// it(`Should return initial state by default`, () => {
//   expect(reducer(undefined, {})).toEqual({
//     city: `Amsterdam`,
//     offers: [
//       {
//         description: `Beautiful & luxurious apartment at great location`,
//         price: 120,
//         type: `Apartment`,
//         rating: 93,
//         photo: `img/apartment-01.jpg`,
//         coordinates: [52.3909553943508, 4.85309666406198]
//       },
//       {
//         description: `Not bad hostel`,
//         price: 60,
//         type: `Hostel`,
//         rating: 60,
//         photo: `img/apartment-02.jpg`,
//         coordinates: [52.3909553943508, 4.85309666406198]
//       }
//     ]
//   })
// })