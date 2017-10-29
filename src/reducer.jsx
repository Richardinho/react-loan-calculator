export let initialState = {
  amount: 1314,
  term: 24,
};

let reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'CHANGE_AMOUNT':
    return Object.assign({}, state, { amount: action.value });
  case 'SET_TERM':
    return Object.assign({}, state, { term: action.value });
  }
  return state;
};
export default reducer;
