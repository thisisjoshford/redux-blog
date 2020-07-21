const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'POST':
      return [...state, action.payload];
    case 'POSTS_ARRAY':
      return [...state, action.payload].flat(Infinity);
    case 'UPDATE_POST':
      return state.map((post) => {
        if(post.title === action.payload.title) {
          return { 
            title: post.title,
            body: action.payload.body
          }; 
        }
        return post;
      });
    case 'DELETE_POST':
      return state
        .filter(post => 
          post.title !== action.payload.title
        );
    default:
      return state;
  }
}
