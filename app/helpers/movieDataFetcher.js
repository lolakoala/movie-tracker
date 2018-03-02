import apikey from '../../apikey.js';

const movieDataFetcher = () => {
  return fetch(`api/movies`);
};

export default movieDataFetcher;
