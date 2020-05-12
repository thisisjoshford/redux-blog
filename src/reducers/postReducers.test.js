import { addPost, deletePost, updatePost, addPostArr } from '../actions/postActions';

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

  it('deletes a post', () => {
    const state = [
      {
        title: 'Blog Post Uno',
        body: 'blog post body texty text...'
      },
      {
        title: 'Blog Post Dos',
        body: 'second super cool text...'
      }
    ];

    const deleteFirstPost = deletePost('Blog Post Uno');

    const newState = reducer(state, deleteFirstPost);

    expect(newState).toEqual([
      {
        title: 'Blog Post Dos',
        body: 'second super cool text...'
      }
    ]);
  });

  it('stores an array of posts', () => {
    const state = [];
    const newPosts = [
      {
        title: 'Blog Post Uno',
        body: 'blog post body texty text...'
      },
      {
        title: 'Blog Post Dos',
        body: 'second super cool text...'
      }];

    const postsToAdd = addPostArr(newPosts);
    const newState = reducer(state, postsToAdd);

    expect(newState).toEqual(newPosts);
  });
});
