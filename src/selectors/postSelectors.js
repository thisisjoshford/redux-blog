export const getAllPosts = state => state;

export const getPostByIndex = (state, index) => {
  return getAllPosts(state)
    .filter((_, i) => i === index)[0];
};
  
