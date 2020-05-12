const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'POST':
      return [...state, action.payload];
    case 'DELETE_POST':
      return state
        .filter(post => 
          post.title !== action.payload.title
        );
    default:
      return state;
  }
}
