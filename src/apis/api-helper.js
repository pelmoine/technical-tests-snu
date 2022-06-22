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
  key: '399602-06423da17c69593bb7c35aa00',
  lang: 'fr',
  safesearch: 'true',
  order: 'popular',
};
