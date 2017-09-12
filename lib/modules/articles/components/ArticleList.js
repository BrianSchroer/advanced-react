import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article'; // eslint-disable-line import/no-named-as-default

export default class ArticleList extends React.PureComponent {
  static propTypes = {
    articles: PropTypes.object.isRequired
  };

  render() {
    return (
      <div>
        {Object.values(this.props.articles).map(article => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    );
  }
}