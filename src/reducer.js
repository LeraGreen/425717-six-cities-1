const initialState = {
  activeCard: -1,
  activeCity: `Paris`
};

const reducer = (state = initialState, action) => {
  switch(action.type) {

    case `CHANGE_ACTIVE_CARD`:
    return Object.assign({}, state, {
      activeCard: action.payload
    });

    case `CHANGE_ACTIVE_CITY`:
    return Object.assign({}, state, {
      activeCity: action.payload
    });

    default: return state;
  }
}

const changeCity = (name) =>
  ({
    type: `CHANGE_ACTIVE_CITY`,
    payload: name
  })

const changeCard = (index) => 
  ({
    type: `CHANGE_ACTIVE_CARD`,
    payload: index
  })

export {reducer, changeCity, changeCard};