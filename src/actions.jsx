
let getBarAction = (value) => {
  return {
    type: 'BAR',
    value
  };
};

let getFooAction = (value) => {
  return {
    type: 'FOO',
    value,
  };
};

export { getFooAction, getBarAction };
