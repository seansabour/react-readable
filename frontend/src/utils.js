import fetch from 'cross-fetch';
import * as api from './helpers/config';

// Category related API
export const getCategories = async () => {
    return fetch(`${api.base_url}/categories`, api.options)
        .then(res => res.json())
        .then(json => json)
        .catch(err => err);
};

// Posts related API
export const getPost = async id => {
    return fetch(`${api.base_url}/posts/${id}`, api.options)
        .then(res => res.json())
        .then(json => json)
        .catch(err => err);
};

export const getPosts = async () => {
    return fetch(`${api.base_url}/posts`, api.options)
        .then(res => res.json())
        .then(json => json)
        .catch(err => err);
};

export const addPost = async post => {
    return fetch(`${api.base_url}/posts/`, {
        ...api.options,
        method: 'POST',
        body: JSON.stringify(post)
    })
        .then(res => res.json())
        .then(json => json)
        .catch(err => err);
};

export const votePost = async (postID, vote) => {
    return fetch(`${api.base_url}/posts/${postID}`, {
        ...api.options,
        method: 'POST',
        body: JSON.stringify({ option: vote })
    })
        .then(res => res.json())
        .then(json => json)
        .catch(err => err);
};

export const editPost = async post => {
    return fetch(`${api.base_url}/posts/${post.id}`, {
        ...api.options,
        method: 'PUT',
        body: JSON.stringify({
            title: post.title,
            body: post.body
        })
    })
        .then(res => res.json())
        .then(json => json)
        .catch(err => err);
};

export const deletePost = async id => {
    return fetch(`${api.base_url}/posts/${id}`, {
        ...api.options,
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(json => json)
        .catch(err => err);
};

// Comment related API
export const addComment = async comment => {
    return fetch(`${api.base_url}/comments`, {
        ...api.options,
        method: 'POST',
        body: JSON.stringify(comment)
    }).then(res => res.json());
};
export const getCommentsForPost = async id => {
    return fetch(`${api.base_url}/posts/${id}/comments`, api.options)
        .then(res => res.json())
        .then(json => json)
        .catch(err => err);
};

export const voteComment = async (commentID, vote) => {
    return fetch(`${api.base_url}/comments/${commentID}`, {
        ...api.options,
        method: 'POST',
        body: JSON.stringify({ option: vote })
    })
        .then(res => res.json())
        .then(json => json)
        .catch(err => err);
};

export const deleteComment = async commentID => {
    return fetch(`${api.base_url}/comments/${commentID}`, {
        ...api.options,
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(json => json)
        .catch(err => err);
};

export const updateComment = async (commentID, body) => {
    return fetch(`${api.base_url}/comments/${commentID}`, {
        ...api.options,
        method: 'PUT',
        body: JSON.stringify({ body, timestamp: Date.now() })
    })
        .then(res => res.json())
        .then(json => json)
        .catch(err => err);
};

// Common Utilities
export const capitalize = str => {
    return `${str.slice(0, 1).toUpperCase()}${str.slice(1, str.length)}`;
};
