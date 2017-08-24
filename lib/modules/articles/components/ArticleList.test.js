import React from 'react';
import { snapshotHelper } from '../../../util/testHelpers';
import ArticleList from './ArticleList';

const mockLookupAuthor = jest.fn(()=> ({}));

const testProps = {
  articles: {
    article1: { id: '1' },
    article2: { id: '2' }
  },
  store: {
    lookUpAuthor: mockLookupAuthor
  }
};

describe('ArticleList', () => {

  it('renders correctly', () => {
    const snapshot = snapshotHelper.assertMatch(<ArticleList {...testProps} />);
   
    expect(snapshot.children.length).toBe(2);

    expect(mockLookupAuthor).toHaveBeenCalledTimes(2);
  });

});