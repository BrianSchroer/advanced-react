import React from 'react';
import PropTypes from 'prop-types';

const Article = ({article, author}) => {
  return (
    <div>
      <div>{article.title}</div>
      <div>{article.date}</div>
      <div>
        <a href={author.website} target="_blank">
          {author.firstName} {author.lastName}
        </a>
      </div>
      <div>{article.body}</div>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired
};

export default Article;