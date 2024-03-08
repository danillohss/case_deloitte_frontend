import { createStore } from 'vuex'
import axiosConfig from "@/axios/api";
const { options, apiAxios } = axiosConfig;


export default createStore({
  state: {
    movies: [],
    currentPage: 1,
    movieInfos: [],
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  },
  mutations: {
    getMovies(state, data) {
      state.movies = [...state.movies, ...data.results];
      //console.log(state.movies.length);
    },
    getMoviesInfos(state, payload) {
      state.movieInfos = payload;
    },
     addToFavorites(state, payload) {
      state.favorites.push(payload);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    removeFromFavorites(state, payload) {
      state.favorites = state.favorites.filter((favMovie) => favMovie.id !== payload.id);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
  actions: {
    async getMovies({ commit }, page) {
      const response = await apiAxios.get(`/3/discover/movie?page=${page}`, options);
      response.data.results = response.data.results.slice(0, 15);
      response.data.results.forEach(movie => {
        movie.vote_average = parseFloat(movie.vote_average).toFixed(1);
      });
      commit('getMovies', response.data);
    }
  },
})
