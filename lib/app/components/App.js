import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import axios from 'axios';
import {StateApi} from '../../state-api';
import {ArticleList} from '../../modules/articles';

const Main = glamorous.main({
  fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  maxWidth: '1200px',
  margin: '0 auto'
});

export default class App extends React.Component {

  static propTypes = {
    initialData: PropTypes.object
  }

  static defaultProps = {
    initialData: {
      articles: {},
    }
  }

  state = {
    articles: this.props.initialData.articles,
    authors: this.props.initialData.authors
  }

  async componentWillMount() {
    const response = await axios.get('/data');
    const api = new StateApi(response.data);

    this.setState(() => ({ 
      articles: api.getArticles(),
      authors: api.getAuthors()
    }));
  }

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