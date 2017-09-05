import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import pickBy from 'lodash.pickby';
import { ArticleList } from '../../modules/articles';
import SearchBar from './SearchBar'; // eslint-disable-line import/no-named-as-default
import Timestamp from './Timestamp'; // eslint-disable-line import/no-named-as-default

const Main = glamorous.main({
  fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  maxWidth: '1200px',
  margin: '0 auto'
});

export default class App extends React.Component {
  static childContextTypes = {
    store: PropTypes.object
  };

  static propTypes = {
    store: PropTypes.object.isRequired
  };

  state = this.props.store.getState();

  getChildContext() {
    return { store: this.props.store };
  }

  componentDidMount() {
    const { store } = this.props;
    this.subscriptionId = store.subscribe(this.onStoreChange);
    store.startClock();
  }

  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }

  onStoreChange = () => {
    this.setState(this.props.store.getState());
  };

  render() {
    const { searchTerm } = this.state;
    let { articles } = this.state;

    if (searchTerm) {
      const caseInsensitiveRegExp = new RegExp(searchTerm, 'i');

      articles = pickBy(
        articles,
        a =>
          a.title.match(caseInsensitiveRegExp) ||
          a.body.match(caseInsensitiveRegExp)
      );
    }

    return (
      <Main>
        <Timestamp />
        <SearchBar />
        <ArticleList articles={articles} />
      </Main>
    );
  }
}
