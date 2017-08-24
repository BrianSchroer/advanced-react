import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const ArticleList = ({articles, store}) => {
  return(
    <div>
      {Object.values(articles).map(article => 
        <Article
          key={article.id}
          article={article}
          store={store}
        />)}
    </div>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

export default ArticleList;