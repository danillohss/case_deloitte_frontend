<template>
  <h1 class="filmInfo">Information about the movie</h1>
  <card-movie-infos-vue />
</template>

<script>
import CardMovieInfosVue from "@/components/CardMovieInfos.vue";

export default {
  name: "INFOMOVIE",
  components: {
    CardMovieInfosVue,
  },
};
</script>

<style>
.filmInfo {
  color: #46E0D1;
  padding: 20px 0px 20px 0px;
}
</style>