describe('posts actions', () => {

  it('posts a blog post', () => {
    const blogPost = postBlog('Title of Blog Post Uno', 'The body of this sweet blog...');

    expect(blogPost).toEqual({
      type: 'ADD_BLOG_POST',
      payload: {
        title: 'Title of Blog Post Uno',
        body: 'The body of this sweet blog...'
      }
    });
  });
});
