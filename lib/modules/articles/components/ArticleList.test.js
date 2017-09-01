import React from 'react';
import { shallow, enzymeHelper } from '../../../util/testHelpers';
import ArticleList from './ArticleList';

const testProps = {
  articles: {
    article1: { id: '1' },
    article2: { id: '2' }
  }
};

describe('ArticleList', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ArticleList {...testProps} />);

    enzymeHelper.assertFindCount(2, wrapper, 'Article(WithStore)');

    expect(wrapper).toMatchSnapshot();
  });
});
