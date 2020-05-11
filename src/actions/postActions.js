export const postBlog = (title, body) => ({
  type: 'ADD_BLOG_POST',
  payload: {
    title,
    body
  }
});
