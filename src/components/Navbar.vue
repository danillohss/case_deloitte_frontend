<template>
  <div>
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
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/">
                Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link active"
                aria-current="page"
                to="/favorites"
                >Favorites</router-link
              >
            </li>
          </ul>
        </div>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search a movie..."
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <div style="padding-top: 70px"></div>
  </div>
</template>

<script>
export default {
  name: "NAVBAR",
};
</script>

<style>
li:hover {
  background-color: #5A8C87;
}
</style>