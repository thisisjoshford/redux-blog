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

  it('adds a second post to state', () => {
    const state = [
      {
        title: 'Blog Post Uno',
        body: 'blog post body texty text...'
      }
    ];
    const secondPost = addPost('Blog Post Dos', 'second super cool text...');

    const newState = reducer(state, secondPost);

    expect(newState).toEqual([
      {
        title: 'Blog Post Uno',
        body: 'blog post body texty text...'
      },
      {
        title: 'Blog Post Dos',
        body: 'second super cool text...'
      }
    ]);
  });
});
