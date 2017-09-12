import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import Perf from 'react-addons-perf';
import pickBy from 'lodash.pickby';
import { ArticleList } from '../../modules/articles';
import SearchBar from './SearchBar'; // eslint-disable-line import/no-named-as-default
import Timestamp from './Timestamp'; // eslint-disable-line import/no-named-as-default

if (typeof window !== 'undefined') {
  window.Perf = Perf;
}

const Main = glamorous.main({
  fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  maxWidth: '1200px',
  margin: '0 auto'
});

export default class App extends React.PureComponent {
  static childContextTypes = {
    store: PropTypes.object
  };

  static propTypes = {
    store: PropTypes.object.isRequired
  };

  //eslint-disable-next-line react/sort-comp
  appState = () => {
    const { articles, searchTerm } = this.props.store.getState();
    return { articles, searchTerm };
  };

  state = this.appState();

  getChildContext() {
    return { store: this.props.store };
  }

  diagnosePerformance() {
    setTimeout(() => {
      Perf.start();
    }, 0);

    setTimeout(() => {
      Perf.stop();
      Perf.printWasted();
    }, 5000);
  }

  componentDidMount() {
    const { store } = this.props;
    this.subscriptionId = store.subscribe(this.onStoreChange);
    store.startClock();

    // this.diagnosePerformance();
  }

  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }

  onStoreChange = () => {
    this.setState(this.appState());
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
