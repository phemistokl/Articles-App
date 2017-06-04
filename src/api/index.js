import axios from 'axios';

    export function getArticles() {
        return axios.get(`/api/article`);
    }

    export function saveNewArticle(data) {
        return axios.post(`/api/article`, data);
    }

    export function currentArticle(articleId) {
        return axios.get(`/api/article/${articleId}`);
    }

export default {
    getArticles,
    saveNewArticle,
    currentArticle
};
