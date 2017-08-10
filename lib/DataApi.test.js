import DataApi from './DataApi';
import {data} from './testData.json';

const dataApi = new DataApi(data);

describe('DataApi', () => {

  it('exposes articles as an object', () => {
    const articles = dataApi.getArticles();
    const articleId = data.articles[0].id;
    const articleTitle = data.articles[0].title;

    expect(articles).toHaveProperty(articleId);
    expect(articles[articleId].title).toBe(articleTitle);
  });

  it('exposes authors as an object', () => {
    const authors = dataApi.getAuthors();
    const authorId = data.authors[0].id;
    const authorTitle = data.authors[0].title;

    expect(authors).toHaveProperty(authorId);
    expect(authors[authorId].title).toBe(authorTitle);
  });
});