import React from 'react';
import { shallow, enzymeHelper } from '../../../util/testHelpers';
import ArticleList from './ArticleList';
import Article from './Article';

const testProps = {
  articles: {
    article1: { id: '1' },
    article2: { id: '2' }
  }
};

Article.propTypes = {};

describe('ArticleList', () => {

  it('renders correctly', () => {
    const wrapper = shallow(<ArticleList {...testProps}/>);

    expect(wrapper).toMatchSnapshot();

    enzymeHelper.assertFindCount(2, wrapper, 'Article');
  });

});