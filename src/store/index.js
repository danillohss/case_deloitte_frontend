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
    },
    getMoviesInfos(state, payload) {
      state.movieInfos = payload;
    }
  },
  actions: {
    async getMovies(state) {
      const response = await apiAxios.get("/3/discover/movie", options);
      response.data.vote_average = parseFloat(response.data.vote_average).toFixed(1);
      console.log(response.data)
      state.commit('getMovies', response.data);
    }
  },
})
