export const addPost = (title, body) => ({
  type: 'POST',
  payload: {
    title,
    body
  }
});

