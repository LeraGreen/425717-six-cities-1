const initialState = {
  activeCard: -1,
  activeCity: `Paris`
};

const reducer = (state = initialState, action) => {
  if (action.type === `CHANGE_ACTIVE_CARD`) {
    return Object.assign({}, state, {
      activeCard: action.payload
    });
  } else if (action.type === `CHANGE_ACTIVE_CITY`) {
    return Object.assign({}, state, {
      activeCity: action.payload
    });
  }
  return state;
}

export {reducer};