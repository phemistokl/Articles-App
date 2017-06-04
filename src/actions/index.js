import api from '../api';

export const GET_ALL_ARTICLES = 'GET_ALL_ARTICLES';
export const SET_CURRENT_ARTICLE = 'SET_CURRENT_ARTICLE';
export const CREATE_ARTICLE = 'CREATE_ARTICLE';
export const DELETE_ARTICLE = 'DELETE_ARTICLE';
export const SAVE_NEW_ARTICLE = 'SAVE_NEW_ARTICLE';

export const fetchGetAllArticles = ({ data }) => ({
    type: GET_ALL_ARTICLES,
    articles: data
});

export const fetchSetCurrentArticle = ({ data }) => ({
    type: SET_CURRENT_ARTICLE,
    article: data
});

export const  fetchCreateArticle = () => ({
    type: CREATE_ARTICLE
});

export const fetchSaveNewArticle = () => ({
    type: SAVE_NEW_ARTICLE
});


export const createArticle = () => dispatch => {
    dispatch(fetchCreateArticle());
}

export const currentArticle = (articleId) => dispatch => {
    return api.currentArticle(articleId)
    .then(data => dispatch(fetchSetCurrentArticle(data)));
}

export const loadArticles = () => dispatch => {
    return api.getArticles()
    .then(data => dispatch(fetchGetAllArticles(data)));
}

export const saveArticle = (article) => dispatch => {
    dispatch(fetchSaveNewArticle());
    return api.saveNewArticle(article)
    .then(() => loadArticles())
    .catch(err => console.error(err));
}

export const deleteArticle = (articleId) => ({
    type: DELETE_ARTICLE,
    articleId: articleId
});
