import { addPost, deletePost, updatePost } from '../actions/postActions';

import reducer from './postReducers';

describe('blog post reducer', () => {
  it('handles the add post action', () => {
    const state = [];
    const addedPost = addPost('Blog Post Uno', 'blog post body texty text...');

    const newState = reducer(state, addedPost);

    expect(newState).toEqual([
      {
        title: 'Blog Post Uno',
        body: 'blog post body texty text...'
      }
    ]);
  });

  it('handles the delete ', () => {
    const state = [
      {
        title: 'Blog Post Uno',
        body: 'blog post body texty text...'
      }
    ];

    const deletedPost = deletePost('Blog Post Uno');

    const newState = reducer(state, deletedPost);

    expect(newState).toEqual([]);

  });
});
