<template>
  <nav
    class="navbar navbar-dark bg-dark fixed-top navbar-expand-lg"
    style="background-color: #2e948a"
  >
    <div class="container-fluid">
      <i class="bi bi-camera-reels fs-2" style="padding-right: 10px"></i>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item" style="padding-right: 5px">
            <router-link
              type="button"
              class="btn btn-#606060 position-relative"
              style="color: white"
              aria-current="page"
              to="/"
            >
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/favorites"
              type="button"
              class="btn btn-#606060 position-relative"
              style="color: white"
            >
              Favorites
              <span
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              >
                {{ this.favorites.length }}
                <span class="visually-hidden">unread messages</span>
              </span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div style="padding-top: 70px"></div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "NAVBAR",

  computed: {
    ...mapState(["favorites"]),
  },
};
</script>

<style>
.nav-item:hover {
  background-color: #606060;
}
</style>
