import React from 'react';
import glamorous from 'glamorous';
import DataApi from '../DataApi';
import {data} from '../testData.json';
import {ArticleList} from '../../modules/articles';

const api = new DataApi(data);

const Main = glamorous.main({
  fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  maxWidth: '1200px',
  margin: '0 auto'
});

export default class App extends React.Component {

  state = {
    articles: api.getArticles(),
    authors: api.getAuthors()
  };

  articleActions = {
    lookUpAuthor: (authorId) => this.state.authors[authorId]
  }

  render() {
    return (
      <Main>
        <ArticleList
          articles={this.state.articles}
          articleActions={this.articleActions}
        />
      </Main>
    );
  }
}