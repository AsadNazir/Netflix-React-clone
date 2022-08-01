export const base = "https://api.themoviedb.org/3";
const API_key = "0b097619528f54aa926f3f817c793a6f";

const REQUEST = {
  trending: `/trending/all/day?api_key=${API_key}`,
  Netflix_Originals:`/discover/tv?api_key=${API_key}&with_network=213`,
  Top_rated: `/movie/top_rated?api_key=${API_key}&language=en-US`,
  Action: `/discover/movie?api_key=${API_key}&with_genres=28`,
  Comedy: `/discover/movie?api_key=${API_key}&with_genres=35`,
  Horror: `/discover/movie?api_key=${API_key}&with_genres=37`,
  Romance: `/discover/movie?api_key=${API_key}&with_genres=10749`,
  Doucmentary: `/discover/movie?api_key=${API_key}&with_genres=99`,
};

export default REQUEST;
