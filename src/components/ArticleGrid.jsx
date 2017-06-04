import React, { Component } from 'react';

import ArticleItem from './ArticleItem.jsx';

const styles = {
        container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 16,
        marginBottom: 16,
    }
};

export default props => {
    const { articles } = props;

    console.log(props.location);

    return (
        <div style={styles.container}>
              {
                  articles.map(article => <ArticleItem
                     key={article.id}
                     id={article.id}
                     date={article.date}
                     title={article.title}
                     comments={article.comments}
                  />)
              }
        </div>
    );
}
