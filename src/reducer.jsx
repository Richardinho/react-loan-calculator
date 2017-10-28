export let initialState = {
  foo: 'this is foo',
  bar: 'Hello this is bar'
};

let reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'FOO':
    return Object.assign({}, state, { foo: action.value });
  case 'BAR':
    return Object.assign({}, state, { bar: action.value});
  }
  return state;
};
export default reducer;
