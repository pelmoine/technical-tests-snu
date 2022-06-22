import axios from 'axios';

export default axios.create({
  baseURL: 'https://pixabay.com/api',
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
  },
});

export const API_DEFAULT_PARAMS = {
  per_page: 6,
  key: process.env.REACT_APP_API_KEY,
  lang: 'fr',
  safesearch: 'true',
  order: 'popular',
};
