import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import pickBy from 'lodash.pickby';
import {ArticleList} from '../../modules/articles';
import SearchBar from './SearchBar';

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

  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
  }

  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }
 
  onStoreChange = () => {
    this.setState(this.props.store.getState());
  }
 
  render() {
    const {searchTerm} = this.state;
    let {articles} = this.state;

    if (searchTerm) {
      articles = pickBy(articles, (a) => a.title.match(searchTerm) || a.body.match(searchTerm));
    }

    const {store} = this.props;

    return (
      <Main>
        <SearchBar doSearch={store.setSearchTerm} />
        <ArticleList
          articles={articles}
          store={store} 
        />
      </Main>
    );
  }
}