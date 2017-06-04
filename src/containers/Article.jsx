import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadArticles, createArticle } from '../actions';

import ArticleGrid from '../components/ArticleGrid.jsx';
import AddArticle from './AddArticle.jsx';

const styles = {
        container: {
        height: '100%',
        maxWidth: 800,
        width: '100%',
        paddingLeft: 16,
        paddingRight: 16,
        margin: '0 auto'
    }
};

@connect(mapStateToProps, { loadArticles, createArticle })
export default class Article extends Component {
    constructor(props) {
        super(props);
        document.title = 'Article';

        this.state = {
            articles: []
        };
    }

    componentWillMount() {
        this.props.loadArticles();
    }

    render() {
        return (
            <div style={styles.container}>
                <ArticleGrid articles={this.props.articles} />
                <AddArticle />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        articles: state.articles.articles
    };
}
