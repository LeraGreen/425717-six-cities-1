import {reducer, changeCity, changeCard} from "./reducer.js";

it (`Should return initial state by default`, () => {
  const state = reducer(undefined, {});
  expect(state).toEqual({
    activeCard: -1,
    activeCity: `Paris`
  });
});

it (`Should update activeCity by a given action`, () => {
  const state = reducer({
    activeCity: `Paris`
  }, 
  {
    type: `CHANGE_ACTIVE_CITY`,
    payload: `Krizopol`
  });

  expect(state).toEqual({
    activeCity: `Krizopol`
  });
});

it (`Should update activeCard by a given action`, () => {
  const state = reducer({
    activeCard: 10
  }, 
  {
    type: `CHANGE_ACTIVE_CARD`,
    payload: 12
  });

  expect(state).toEqual({
    activeCard: 12
  });
});

it (`Should return action with city in payload`, () => {
  const action = changeCity(`Urupinsk`);

  expect(action).toEqual({
    type: `CHANGE_ACTIVE_CITY`,
    payload: `Urupinsk`
  })
});

it (`Should return action with number in payload`, () => {
  const action = changeCard(10);

  expect(action).toEqual({
    type: `CHANGE_ACTIVE_CARD`,
    payload: 10
  })
});