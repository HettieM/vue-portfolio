<template>
  <div class="card-wrapper" @click="toggleCard(false)">
    <div class="card" @click="toggleCard(true)">
      <div class="row contact-row justify-content-between">
        <p class="telephone">+44 (0) 7910 1062754</p>
        <p class="email">hettie.mcconnell@outlook.com</p>
      </div>
      <p class="name">Hettie McConnell</p>
      <p class="title">Full Stack JavaScript Software Engineer</p>
      <div class="row link-row justify-content-center">
        <a class="link mr-4" target="_blank" href="https://uk.linkedin.com/in/hettie-mcconnell-b0589617b">LinkedIn</a>
        <a class="link" target="_blank" href="https://github.com/HettieM">GitHub</a>
      </div>
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
  max-width: 800px;
  height: 45%;
  padding: 3%;
  background-color: #FCF9F3 !important;
  color: black;
}

.name {
  font-size: 3rem;
  margin-top: 3%;
}

.title {
  font-size: 1.5rem;
  line-height: 0;
}

.link-row {
  position: absolute;
  bottom: 5%;
  width: 94%;
}

</style>