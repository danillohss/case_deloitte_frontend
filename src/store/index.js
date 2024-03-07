import { createStore } from 'vuex'
import axiosConfig from "@/axios/api";
const { options, apiAxios } = axiosConfig;


export default createStore({
  state: {
    movies: [],
    currentPage: 1,
    movieInfos: [],
  },
  mutations: {
    getMovies(state, data) {
      state.movies = [...state.movies, ...data.results];
    },
    getMoviesInfos(state, payload) {
      state.movieInfos = payload;
    }
  },
  actions: {
    async getMovies({ commit }, page) {
      const response = await apiAxios.get(`/3/discover/movie?page=${page}`, options);
      response.data.results = response.data.results.slice(0, 12);
      response.data.results.forEach(movie => {
        movie.vote_average = parseFloat(movie.vote_average).toFixed(1);
      });
      commit('getMovies', response.data);
    }
  },
})
