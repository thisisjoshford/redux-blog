const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'POST':
      return [...state, action.payload];
    case 'DELETE_POST':
      return state.filter((_, i) => i !== action.payload);
    default:
      return state;
  }
}
