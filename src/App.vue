<template>
  <div id="app">
      <NavBar class="nav-bar"/>
      <ContactCard v-if="cardView"/>
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import ContactCard from './components/ContactCard.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    ContactCard,
  },
  computed: {
    cardView() {
      return this.$store.getters.displayCard;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-image: url('./assets/img/hiking.jpeg');
  background-attachment: fixed;
  background-size: cover;
}

.nav-bar {
  position: fixed;
  width: 100%;
  z-index: 1;
}
</style>
