import { getAllPosts, getPostByIndex } from './postSelectors';

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

describe('post selectors', () => {
  it('gets all blog posts', () => {
    const posts = getAllPosts(state);
    expect(posts).toEqual(state);
  });

  it('gets a post by index', () => {
    const post = getPostByIndex(0);
    expect(post).toEqual(state[0]);
  });
});
