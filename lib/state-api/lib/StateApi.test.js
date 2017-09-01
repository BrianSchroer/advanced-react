import StateApi from './StateApi';
import { data } from './testData.json';

const stateApi = new StateApi(data);

function assertExpectedArticles(articles) {
  const articleId = data.articles[0].id;
  const articleTitle = data.articles[0].title;

  expect(articles).toHaveProperty(articleId);
  expect(articles[articleId].title).toBe(articleTitle);
}

function assertExpectedAuthors(authors) {
  const authorId = data.authors[0].id;
  const firstName = data.authors[0].firstName;

  expect(authors).toHaveProperty(authorId);
  expect(authors[authorId].firstName).toBe(firstName);
}

describe('StateApi', () => {
  describe('.getState', () => {
    it('returns articles and authors', () => {
      const state = stateApi.getState();
      assertExpectedArticles(state.articles);
      assertExpectedAuthors(state.authors);
    });
  });
});
