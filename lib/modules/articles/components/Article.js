import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import storeProvider from '../../../app/storeProvider';
import format from '../../../util/format';

const StyledArticle = glamorous.div({
  paddingBottom: 10,
  borderBottomStyle: 'solid',
  borderBottomColor: '#aaa',
  borderBottomWidth: 1,
  marginBottom: 10
});

const ArticleTitle = glamorous.div({
  fontWeight: 'bold'
});

const ArticleDate = glamorous.div({
  fontSize: '0.85em',
  color: '#888'
});

const Author = glamorous.div({
  paddingTop: 10,
  paddingBottom: 10
});

const ArticleBody = glamorous.div({
  paddingLeft: 20
});

export const Article = ({ article, author }) => {
  return (
    <StyledArticle>
      <ArticleTitle>{article.title}</ArticleTitle>
      <ArticleDate>{format.date(article.date)}</ArticleDate>
      <Author>
        <a href={author.website} target="_blank">
          {author.firstName} {author.lastName}
        </a>
      </Author>
      <ArticleBody>{article.body}</ArticleBody>
    </StyledArticle>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }),
  author: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    website: PropTypes.string
  })
};

function extraProps(store, originalProps) {
  return {
    author: store.lookUpAuthor(originalProps.article.authorId)
  };
}

export default storeProvider(extraProps)(Article);
