import fetch from 'cross-fetch';

const base_url = 'http://localhost:3001';
const options = {
    headers: {
        Authorization: 'whatever',
        'Content-Type': 'application/json'
    }
};

// Category related API
export const getCategories = async () => {
    return fetch(`${base_url}/categories`, options)
        .then(res => res.json())
        .then(json => json)
        .catch(err => err);
};

// Posts related API
export const getPost = async id => {
    return fetch(`${base_url}/posts/${id}`, options)
        .then(res => res.json())
        .then(json => json)
        .catch(err => err);
};

export const getPosts = async () => {
    return fetch(`${base_url}/posts`, options)
        .then(res => res.json())
        .then(json => json)
        .catch(err => err);
};

export const addPost = async post => {
    return fetch(`${base_url}/posts/`, {
        ...options,
        method: 'POST',
        body: JSON.stringify(post)
    })
        .then(res => res.json())
        .then(json => json)
        .catch(err => err);
};

export const votePost = async (postID, vote) => {
    return fetch(`${base_url}/posts/${postID}`, {
        ...options,
        method: 'POST',
        body: JSON.stringify({ option: vote })
    })
        .then(res => res.json())
        .then(json => json)
        .catch(err => err);
};

export const editPost = async post => {
    return fetch(`${base_url}/posts/${post.id}`, {
        ...options,
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
    return fetch(`${base_url}/posts/${id}`, {
        ...options,
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(json => json)
        .catch(err => err);
};

// Comment related API
export const addComment = async comment => {
    return fetch(`${base_url}/comments`, {
        ...options,
        method: 'POST',
        body: JSON.stringify(comment)
    }).then(res => res.json());
};
export const getCommentsForPost = async id => {
    return fetch(`${base_url}/posts/${id}/comments`, options)
        .then(res => res.json())
        .then(json => json)
        .catch(err => err);
};

export const voteComment = async (commentID, vote) => {
    return fetch(`${base_url}/comments/${commentID}`, {
        ...options,
        method: 'POST',
        body: JSON.stringify({ option: vote })
    })
        .then(res => res.json())
        .then(json => json)
        .catch(err => err);
};

export const deleteComment = async commentID => {
    return fetch(`${base_url}/comments/${commentID}`, {
        ...options,
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(json => json)
        .catch(err => err);
};

export const updateComment = async (commentID, body) => {
    return fetch(`${base_url}/comments/${commentID}`, {
        ...options,
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
