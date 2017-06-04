import React, { Component } from 'react';
import { connect } from 'react-redux';

import { currentArticle } from '../actions';

import ArticleInfo from '../components/ArticleInfo.jsx';

@connect(mapStateToProps, { currentArticle })
export default class SingleArticle extends Component {

  componentWillMount() {
      const { articleId } = this.props;

      this.props.currentArticle(articleId);
  }

  componentWillReceiveProps(nextProps) {
      if (nextProps.articleId !== this.props.articleId) {
          this.props.currentArticle(nextProps.articleId);
      }
  }

  render() {
      const { article, children } = this.props;

      return (
          <div>
              <ArticleInfo {...article} />
          </div>
      );
  }
}

function mapStateToProps(state, ownProps) {
    return {
        article: state.articles.article,
        articleId: ownProps.params.id
    };
}
