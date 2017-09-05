import React from 'react';
import { snapshotHelper } from '../../util/testHelpers';
import { SearchBar } from './SearchBar';

const testProps = {
  store: {}
};

describe('SearchBar', () => {
  it('renders correctly', () => {
    snapshotHelper.assertMatch(<SearchBar {...testProps} />);
  });
});
