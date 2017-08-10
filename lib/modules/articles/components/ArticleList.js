import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const ArticleList = ({articles, articleActions}) => {
  return(
    <div>
      {Object.values(articles).map(article => 
        <Article
          key={article.id}
          article={article}
          actions={articleActions}
        />)}
    </div>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.object.isRequired,
  articleActions: PropTypes.object.isRequired
};

export default ArticleList;