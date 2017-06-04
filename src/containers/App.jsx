import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';

const styles = {
      box: {
        flex:1,
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }
};


export default class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
              <div style={styles.box}>
                {this.props.children}
              </div>
            </MuiThemeProvider>  
        );
    }
}
