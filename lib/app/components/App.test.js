import React from 'react';
import { snapshotHelper } from '../../util/testHelpers';
import App from './App';

const testProps = {
  store: {
    getState: () => ({
      articles: {},
      authors: {},
      searchTerm: '',
      timestamp: new Date('Mon Jul 11 2016 00:00:00 GMT+0000 (UTC)')
    }),
    subscribe: () => {},
    unsubscribe: () => {},
    startClock: () => {},
    setSearchTerm: () => {}
  }
};

describe('App', () => {
  it('renders correctly', () => {
    snapshotHelper.assertMatch(<App {...testProps} />);
  });
});
