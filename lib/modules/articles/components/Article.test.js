import React from 'react';
import { snapshotHelper } from '../../../util/testHelpers';
import Article from './Article';

const testAuthor = {
  website: 'testWebsite',
  firstName: 'testFirstName',
  lastName: 'testLastName'
};

const mockLookupAuthor = jest.fn(()=> testAuthor);

const testProps = {
  article: {
    title: 'testTitle',
    date: 'Mon Jul 11 2016 00:00:00 GMT+0000 (UTC)',
    body: 'testBody'
  },
  store: {
    lookUpAuthor: mockLookupAuthor
  }
};

describe('Article', () => {

  it('renders correctly', () => {
    snapshotHelper.assertMatch(<Article {...testProps} />);

    expect(mockLookupAuthor).toHaveBeenCalledTimes(1);
  });

});