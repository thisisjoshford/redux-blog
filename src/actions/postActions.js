export const addPost = (title, body) => ({
  type: 'POST',
  payload: {
    title,
    body
  }
});

export const deletePost = title => ({
  type: 'DELETE_POST',
  payload: {
    title
  }
});

