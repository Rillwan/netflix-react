import {API_KEY} from './constants/constants';

export const popular = `trending/all/week?api_key=${API_KEY}&language=en-US`;
export const action = `discover/movie?api_key=${API_KEY}&with_genres=10752`;
// export const tvshows = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=80`;
export const animation = `discover/movie?api_key=${API_KEY}&with_genres=16`;
export const music = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1&with_genres=10402` ;
export const tvshows = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&page=1&with_genres=10751`;
