<template>
  <div>
    <h1 v-if="favorites.length === 0">You need to favorite a movie</h1>
    <h1 v-else>Favorite movies:</h1>

    <div v-if="movies.length" class="row no-horizontal-margin">
      <div v-for="movie in favorites" :key="movie.id" class="col-md-4">
        <div class="card mb-3" style="max-width: 540px" id="card">
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
                <h5 class="card-title" style="color: white">
                  <strong class="card-text">
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
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "FAVORITES",
  data() {
    return {
      limit: 300,
    };
  },
  computed: {
    ...mapState(["favorites", "movies"]),
  },
  methods: {
    getImageUrl(relativePath) {
      return `https://image.tmdb.org/t/p/w200${relativePath}`;
    },
    caracterLimit(overview, limit) {
      if (!overview) return "";
      return overview.length > limit
        ? overview.slice(0, limit) + "..."
        : overview;
    },
  },
};
</script>

<style scoped>
h1 {
  color: white;
}

.card {
  cursor: pointer;
  margin: 15px 15px 15px 40px;
}

.no-horizontal-margin {
  margin-right: 0;
}
#card {
  background-color: #606060;
}
.card-text {
  color: white;
}
</style>