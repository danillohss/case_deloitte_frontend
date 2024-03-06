<template>
  <div class="card mb-3" style="max-width: 540px; margin: auto">
    <div class="row g-0 d-flex justify-content-center align-items-center">
      <div class="col-md-8">
        <img
          src="../assets/0156803.jpg"
          class="img-fluid rounded-start"
          id="imgMovie"
        />
        <div class="card-body">
          <h5 class="card-title">
            <strong>
              {{ movieInfos.title }}
            </strong>
          </h5>
          <p class="card-text">{{ movieInfos.overview }}</p>
          <p class="card-text">
            Nota:
            <strong> {{ movieInfos.vote_average }} / 10 </strong>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "CARDMOVIEINFOS",
  computed: {
    ...mapState(["movieInfos"]),
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
</style>