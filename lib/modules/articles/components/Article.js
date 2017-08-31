import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
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

const Article = (props, context) => {
 
  const {article} = props;
  const author = context.store.lookUpAuthor(article.authorId);

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
  })
};

Article.contextTypes = {
  store: PropTypes.object.isRequired
};

export default Article;