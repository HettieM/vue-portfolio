<template>
<div class="nav-wrapper">
  <nav class="navbar d-flex align-items-end">
    <a class="mr-2" href="/home">Home</a>
    <a class="mr-2" @click="toggleCard()">Contact</a>
    <a class="mr-auto" href="/Hettie-McConnell-CV.pdf" target="_blank" download>CV</a>
    <a class="mr-2" href="/about">About Me </a>
    <a class="mr-2" href = "/projects">My Projects</a>
    <a href="/timeline">My Timeline</a>
  </nav>

  <div v-if="cardView" class="card-wrapper" @click="toggleCard()">
    <div class="card" @click="toggleCard(on)">
      <div class="row contact-row justify-content-between">
        <p class="telephone">+44 (0) 7910 1062754</p>
        <p class="email">hettie.mcconnell@outlook.com</p>
      </div>
      <p class="name">Hettie McConnell</p>
      <p class="title">Full Stack JavaScript Software Engineer</p>
      <div class="row link-row justify-content-center">
        <a class="link" target="_blank" href="https://uk.linkedin.com/in/hettie-mcconnell-b0589617b">LinkedIn</a>
        <a class="link" target="_blank" href="https://github.com/HettieM">GitHub</a>
      </div>
    </div>
  </div>

</div>
<!-- public/Hettie-McConnell-CV.pdf -->

</template>

<script>
  export default {
    data() {
      return {
        cardView: null,
      }
    },
    methods: {
      toggleCard(on) {
        if (on) return;
        if (!this.cardView) this.cardView="on";
        else  this.cardView=null;
      },
    }
  }

</script>

<style>
.navbar {
  border-bottom: 1px solid black;
  height: 7.5vh;
  background-color: #FCF9F3;
  position: fixed;
  top: 0;
  left: 0;
}

.card-wrapper {
  border: 1px solid black;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  background-color: RGB(0, 0, 0, 0.65);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  width: 70%;
  height: 45%;
  padding: 3%;
}

p {
  text-shadow: 1px 1px #e6ebef;
}

.name {
  font-size: 3rem;
  margin-top: 5%;
}

.title {
  font-size: 1.5rem;
  line-height: 0;
}

.link-row {
  position: absolute;
  bottom: 5%;
  margin: 0 auto;
  width: 97%;
}

.link {
  margin: 0 1%;
}

</style>