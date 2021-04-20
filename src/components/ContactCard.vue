<template>
  <div class="card-wrapper" @click="toggleCard(false)">
    <div class="card" @click="toggleCard(true)">
      <div class="contact-details list">
        <p class="key">Name: </p>
        <p class="value">Hettie McConnell</p>
        <p class="key">Title: </p>
        <p class="value">Full Stack JavaScript Developer</p>
        <p class="key">Email: </p>
        <p class="value">hettie.mcconnell@outlook.com</p>
        <p class="key">Mobile: </p>
        <p class="value">+44 (0) 7910 162754</p>
      </div>
      <a class="link" target="_blank" href="https://uk.linkedin.com/in/hettie-mcconnell-b0589617b">LinkedIn</a>
      <a class="link" target="_blank" href="https://github.com/HettieM">GitHub</a>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      toggleCard(state) {
        if (state) return;
        this.$store.commit('setDisplayCard', state)
      },
    }
  }
</script>

<style>
.card-wrapper {
  border: 1px solid black;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background-color: RGB(0, 0, 0, 0.15);
  backdrop-filter: blur(5px);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  width: 70%;
  max-width: 600px;
  padding: 3%;
  background-color: #FCF9F3 !important;
  color: black;
  overflow: hidden;
}

.key {
  float: left;
  width: 25%;
  text-align: right;
  font-weight: bold;
}

.value{
  float: right;
  width: 70%;
  text-align: right;
}

.link {
  text-align: center;
  color: navy;
}

.link:hover {
  text-decoration: none;
  color: pink;
  transform: scale(1.2);;
}

</style>