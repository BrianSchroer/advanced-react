import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const ArticleList = ({articles, authors}) => {
  return(
    <div>
      {Object.values(articles).map(article => 
        <Article
          key={article.id}
          article={article}
          author={authors[article.authorId]}
        />)}
    </div>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.object.isRequired,
  authors: PropTypes.object.isRequired
};

export default ArticleList;