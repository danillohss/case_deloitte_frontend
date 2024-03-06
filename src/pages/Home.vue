<template>
  <div>
    <h1>Página inicial</h1>
    <Card_movie/>
  </div>
</template>

<script>
import Card_movie from "../components/CardMovie.vue";

export default {
  name: "HOME",
  components: {
    Card_movie,
  },
};
</script>