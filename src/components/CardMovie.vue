<template>
  <div>
    <div v-if="movies.length" class="row">
      <div v-for="movie in movies" :key="movie.id" class="col-md-4">
        <div
          class="card mb-3"
          style="max-width: 540px"
          @click="console.log('cliquei')"
        >
          <div class="row g-0">
            <div class="col-md-4"></div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{ movie.title }}</h5>
                <p class="card-text">
                  {{ caracterLimit(movie.overview, limit) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <p>Loading Movies...</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "CARD_MOVIE",
  data() {
    return {
      limit: 150,
    };
  },
  methods: {
    caracterLimit(overview, limit) {
      if (!overview) return "";
      return overview.length > limit
        ? overview.slice(0, limit) + "..."
        : overview;
    },
  },
  computed: {
    ...mapState(["movies"]),
  },
  mounted() {
    if (!this.movies.length) {
      this.$store.dispatch("getMovies");
    }
  },
};
</script>

<style>
.card {
  cursor: pointer;
}
</style>