import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux'

import {
    GET_ALL_ARTICLES,
    DELETE_ARTICLE,
    CREATE_ARTICLE,
    SET_CURRENT_ARTICLE
} from '../actions';

const articles = ( state = { articles: [], article: [] }, action) => {
  switch (action.type) {
    case DELETE_ARTICLE:
    case GET_ALL_ARTICLES:
      return {
        ...state,
        articles: action.articles
      };
    case SET_CURRENT_ARTICLE:
      return {
        ...state,
        article: action.article
      };
    default:
      return state
  }
};

export default combineReducers({ articles, routing });
