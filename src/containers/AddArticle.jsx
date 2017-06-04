import React, { Component } from 'react';
import { connect } from 'react-redux';

import { saveArticle, loadArticles } from '../actions';

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

@connect(undefined, { saveArticle, loadArticles })
export default class AddArticle extends Component {
  constructor(props) {
          super(props);

            this.state = ({
              title: '',
              text: ''
            });
      }

      handleCreate() {
        const article = {
            title: this.state.title,
            text: this.state.text
        };

        this.props.saveArticle(article);
      }

      handleTitleChange(e) {
        e.preventDefault();
        this.setState({
          title: e.target.value
        });
      }

      handleTextChange(e) {
        e.preventDefault();
        this.setState({
          text: e.target.value
        });
      }

      render() {

        return (
            <form onSubmit={this.handleCreate.bind(this)}>
              <label>
                Title:
                <input type="text" value={this.state.title} onChange={this.handleTitleChange.bind(this)} />
              </label>
              <label>
                Text:
                <textarea value={this.state.text} onChange={this.handleTextChange.bind(this)} />
              </label>
              <input type="submit" value="Submit" />
            </form>
        );
    }
}
