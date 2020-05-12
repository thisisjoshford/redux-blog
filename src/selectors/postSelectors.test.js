import { getAllPosts } from './postSelectors';

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
});
