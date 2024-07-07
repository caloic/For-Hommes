import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const register = (userData) => {
    return axios.post(`${API_URL}/auth/register`, userData);
};

export const login = (userData) => {
    return axios.post(`${API_URL}/auth/login`, userData);
};

export const createPost = (postData, token) => {
    return axios.post(`${API_URL}/posts`, postData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};