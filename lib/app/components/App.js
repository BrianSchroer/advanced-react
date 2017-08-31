import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import {ArticleList} from '../../modules/articles';

const Main = glamorous.main({
  fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  maxWidth: '1200px',
  margin: '0 auto'
});

export default class App extends React.Component {

  static childContextTypes = {
    store: PropTypes.object
  }

  static propTypes = {
    store: PropTypes.object.isRequired
  }

  state = this.props.store.getState();

  getChildContext() {
    return { store: this.props.store };
  }  
  
  render() {
    return (
      <Main>
        <ArticleList
          articles={this.state.articles}
          store={this.props.store} 
        />
      </Main>
    );
  }
}