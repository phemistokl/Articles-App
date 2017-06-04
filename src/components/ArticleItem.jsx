import React, { Component } from 'react';
// import { connect } from 'react-redux';
//
// import { currentArticle } from '../actions';

import { Link } from 'react-router';

import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';

const styles = {
        container: {
        width: '100%',
        display: 'flex',
        marginBottom: 16
    },
        img: {
        height: 278,
        width: 185,
        minWidth: 200
    },
        info: {
        marginLeft: 16,
        padding: 16,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        width: '100%'
    },
        title: {
        fontWeight: 500,
        fontSize: 18
    },
        actions: {
        display: 'flex',
        justifyContent: 'center',
        padding: 8
    },
        overview: {
        color: 'gray',
        fontSize: 14
    }
};

// @connect(undefined, { currentArticle })
export default class ArticleItem extends Component {
  // constructor(props) {
  //     super(props);
  //
  //     this.state = {};
  // }
  //
  // currentArticle() {
  //     this.props.currentArticle(this.props.id);
  // }

    render() {
        const { id, date, title, comments } = this.props;

        return (
          <Paper style={styles.container}>
            <div style={styles.info}>
              <div>{date}</div>
              <div>
                  <Link to={`/article/${id}`}><h1 style={styles.title}>{title}</h1></Link>
              </div>
            </div>
          </Paper>
        );
    }
}
