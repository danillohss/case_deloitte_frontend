<template>
  <div>
    <div v-if="movies.length" class="row no-horizontal-margin">
      <div v-for="movie in movies" :key="movie.id" class="col-md-4">
        <div
          class="card mb-3"
          style="max-width: 540px"
          @click="movieInfo(movie)"
        >
          <div class="row g-0">
            <div class="col-md-4">
              <img
                :src="getImageUrl(movie.poster_path)"
                alt="Descrição da Imagem"
                style="padding: 7px; max-height: 100%"
                class="img-fluid"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">
                  <strong>
                    {{ movie.title }}
                  </strong>
                </h5>
                <p class="card-text">
                  {{ caracterLimit(movie.overview, limit) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-else
      class="spinner-border"
      style="width: 3rem; height: 3rem"
      role="status"
    ></div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "CARD_MOVIE",
  data() {
    return {
      limit: 300,
    };
  },
  methods: {
    caracterLimit(overview, limit) {
      if (!overview) return "";
      return overview.length > limit
        ? overview.slice(0, limit) + "..."
        : overview;
    },
    movieInfo(movie) {
      this.$store.commit("getMoviesInfos", movie);
      this.$router.push("/Infos");
    },
    getImageUrl(relativePath) {
      return `https://image.tmdb.org/t/p/w200${relativePath}`;
    },
    async loadMoreMovies() {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (windowHeight + scrollTop >= documentHeight - 100) {
        this.$store.dispatch("getMovies", this.$store.state.currentPage + 1);
      }
    },
  },
  computed: {
    ...mapState(["movies"]),
    ...mapState(["movieInfos"]),
  },
  mounted() {
    if (!this.movies.length) {
      this.$store.dispatch("getMovies", this.$store.state.currentPage);
    }
    window.addEventListener("scroll", this.loadMoreMovies);
  },
};
</script>

<style scoped>
.card {
  cursor: pointer;
  margin: 15px 15px 15px 40px;
}

.no-horizontal-margin {
  margin-right: 0;
}
</style>