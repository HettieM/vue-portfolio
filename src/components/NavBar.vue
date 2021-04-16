<template>
<div class="nav-wrapper">
  <nav class="navbar d-flex align-items-start">
    <a class="navbar-link mr-2" href="/home">Home</a>
    <a class="navbar-link mr-2" @click="toggleCard(true)">Contact</a>
    <a class="navbar-link mr-auto" href="/Hettie-McConnell-CV.pdf" target="_blank" download>CV</a>
    <a class="navbar-link mr-2" href="/about">About Me </a>
    <a class="navbar-link mr-2" href = "/projects">My Projects</a>
    <a class="navbar-link" href="/timeline">My Timeline</a>
  </nav>
</div>

</template>

<script>
  export default {
    methods: {
      toggleCard(state) {
        this.$store.commit('setDisplayCard', state)
      },
    }
  }

</script>

<style>
.navbar {
  height: 20vh;
  background-image: linear-gradient(black, transparent);
}

.navbar-link {
  color: white;
}
</style>