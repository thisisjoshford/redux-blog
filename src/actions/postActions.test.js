import { addPost, deletePost } from './postActions';
 
describe('posts actions', () => {

  it('posts a blog post', () => {
    const blogPost = addPost('Title of Blog Post Uno', 'The body of this sweet blog...');

    expect(blogPost).toEqual({
      type: 'POST',
      payload: {
        title: 'Title of Blog Post Uno',
        body: 'The body of this sweet blog...'
      }
    });
  });

  it('deletes a blog post', () => {
    const deletedPost = deletePost('Title of Blog Post Uno');

    expect(deletedPost).toEqual({
      type: 'DELETE_POST',
      payload: {
        title: 'Title of Blog Post Uno',
      }
    });
  });


});
