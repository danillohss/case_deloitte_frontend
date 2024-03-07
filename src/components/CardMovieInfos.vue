<template>
  <div id="card" class="card mb-3" style="max-width: 540px; margin: auto">
    <div class="row g-0 d-flex justify-content-center align-items-center">
      <div class="col-md-8">
        <img
          :src="getImageUrl(movieInfos.poster_path)"
          alt="Descrição da Imagem"
          style="padding: 7px"
          id="imgMovie"
        />
        <div class="card-body">
          <h5 class="card-title" style="color: white">
            <strong>
              {{ movieInfos.title }}
            </strong>
          </h5>
          <p class="card-text">{{ movieInfos.overview }}</p>
          <p class="card-text">
            Score:
            <strong> {{ movieInfos.vote_average }} / 10 </strong>
          </p>
          <div>
            <strong style="padding-right: 10px" class="card-text"
              >Add to favorites</strong
            >
            <input
              class="form-check-input"
              type="checkbox"
              id="checkboxNoLabel"
              aria-label="..."
              v-model="radio"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "CARDMOVIEINFOS",
  data() {
    return {
      radio: false,
    };
  },
  computed: {
    ...mapState(["movieInfos"]),
  },
  methods: {
    getImageUrl(relativePath) {
      return `https://image.tmdb.org/t/p/w200${relativePath}`;
    },
  },
};
</script>

<style scoped>
#imgMovie {
  transition: all 0.5s;
  padding: 10px;
}

#imgMovie:hover {
  -webkit-transform: scale(1.5);
  transform: scale(1.5);
}
#card {
  background-color: #606060;
}
.card-text {
  color: white;
}
</style>