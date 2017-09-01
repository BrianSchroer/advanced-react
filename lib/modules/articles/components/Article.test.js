import React from 'react';
import { snapshotHelper } from '../../../util/testHelpers';
import { Article } from './Article';

const testAuthor = {
  website: 'testWebsite',
  firstName: 'testFirstName',
  lastName: 'testLastName'
};

const testProps = {
  article: {
    title: 'testTitle',
    date: 'Mon Jul 11 2016 00:00:00 GMT+0000 (UTC)',
    body: 'testBody'
  },
  author: testAuthor
};

describe('Article', () => {
  it('renders correctly', () => {
    snapshotHelper.assertMatch(<Article {...testProps} />);
  });
});
