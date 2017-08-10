import React from 'react';
import DataApi from '../DataApi';
import {data} from '../testData.json';
import ArticleList from './ArticleList';

const api = new DataApi(data);

export default class App extends React.Component {

  state = {
    articles: api.getArticles(),
    authors: api.getAuthors()
  };

  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        authors={this.state.authors}
      />
    );
  }
}