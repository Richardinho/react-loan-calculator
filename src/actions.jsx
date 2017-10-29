let getChangeAmountAction = (value) => {
  return {
    type: 'CHANGE_AMOUNT',
    value
  };
};

let getSetTermAction = (value) => {
  return {
    type: 'SET_TERM',
    value
  };
};

export { getChangeAmountAction, getSetTermAction };
