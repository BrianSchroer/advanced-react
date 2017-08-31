import React from 'react';
import { shallow, renderer, snapshotHelper } from '../../../util/testHelpers';
import Article from './Article';

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
};

const context = {
  store: {
    lookUpAuthor: jest.fn(()=> testAuthor)
  }
};

describe('Article', () => {

  it('renders correctly', () => {
    const wrapper = shallow(<Article {...testProps} />, { context });

    expect(wrapper).toMatchSnapshot();

    expect(context.store.lookUpAuthor).toHaveBeenCalledTimes(1);
  });

});