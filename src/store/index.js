import { createStore } from 'vuex'
import axiosConfig from "@/axios/api";
const { options, apiAxios } = axiosConfig;


export default createStore({
  state: {
    movies: [],
    movieInfos: [],
  },
  mutations: {
    getMovies(state, payload) {
      state.movies = payload.results;
      console.log('vuex', state.movies);
    },
    getMoviesInfos(state, payload) {
      state.movieInfos = payload;
      console.log('vuex', state.movieInfos);
    }
  },
  actions: {
    async getMovies(state) {
      const response = await apiAxios.get("/3/discover/movie", options);
      state.commit('getMovies', response.data);
    }
  },
})
