import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article'; // eslint-disable-line import/no-named-as-default

const ArticleList = ({ articles }) => {
  return (
    <div>
      {Object.values(articles).map(article => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.object.isRequired
};

export default ArticleList;
