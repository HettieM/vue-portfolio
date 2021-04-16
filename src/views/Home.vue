<template>
  <div class="home-page-wrapper">
    <h1>Hettie McConnell</h1>
    <ul class="tech-stack__list">
      <li class="tech-stack__list-item">
        <svg role="img" viewBox="0 0 25 25">
          <use href="../assets/svg/icons.svg#html-icon"></use>
        </svg>
        <p>HTML</p>
      </li>
      <li class="tech-stack__list-item">
        <svg role="img" viewBox="0 0 25 25">
          <use href="../assets/svg/icons.svg#css-icon"></use>
        </svg>
        <p>CSS</p>
      </li>
      <li class="tech-stack__list-item">
        <svg role="img" viewBox="0 0 25 25">
          <use href="../assets/svg/icons.svg#javascript-icon"></use>
        </svg>
        <p>JavaScript</p>
      </li>
      <li class="tech-stack__list-item">
        <svg role="img" viewBox="0 0 25 25">
          <use href="../assets/svg/icons.svg#node-icon"></use>
        </svg>
        <p>Node.js</p>
      </li>
      <li class="tech-stack__list-item">
        <svg role="img" viewBox="0 0 120 60">
          <use href="../assets/svg/icons.svg#express-icon"></use>
        </svg>
        <p>Express.js</p>
      </li>
      <li class="tech-stack__list-item">
        <svg role="img" viewBox="0 0 25 25">
          <use href="../assets/svg/icons.svg#postgresql-icon"></use>
        </svg>
        <p>PostgreSQL</p>
      </li><li class="tech-stack__list-item">
        <svg role="img" viewBox="0 0 25 25">
          <use href="../assets/svg/icons.svg#vue-icon"></use>
        </svg>
        <p>Vue.js</p>
      </li>
      <li class="tech-stack__list-item">
        <svg role="img" viewBox="0 0 25 25">
          <use href="../assets/svg/icons.svg#react-icon"></use>
        </svg>
        <p>React.js</p>
      </li>
      <li class="tech-stack__list-item">
        <svg role="img" viewBox="0 0 25 25">
          <use href="../assets/svg/icons.svg#materialui-icon"></use>
        </svg>
        <p>Material UI</p>
      </li>
      <li class="tech-stack__list-item">
        <svg role="img" viewBox="0 0 25 25">
          <use href="../assets/svg/icons.svg#styledcomponents-icon"></use>
        </svg>
        <p>Styled Components</p>
      </li>
      <li class="tech-stack__list-item">
        <svg role="img" viewBox="0 0 25 25">
          <use href="../assets/svg/icons.svg#bootstrap-icon"></use>
        </svg>
        <p>Bootstrap</p>
      </li>
      <li class="tech-stack__list-item">
        <svg role="img" viewBox="0 0 25 25">
          <use href="../assets/svg/icons.svg#jest-icon"></use>
        </svg>
        <p>Jest</p>
      </li>
      <li class="tech-stack__list-item">
        <svg role="img" viewBox="0 0 25 25">
          <use href="../assets/svg/icons.svg#codecov-icon"></use>
        </svg>
        <p>Codecov</p>
      </li>
      <li class="tech-stack__list-item">
        <svg role="img" viewBox="0 0 25 25">
          <use href="../assets/svg/icons.svg#git-icon"></use>
        </svg>
        <p>Git & GitHub</p>
      </li>
      <li class="tech-stack__list-item">
        <svg role="img" viewBox="0 0 25 25">
          <use href="../assets/svg/icons.svg#prettier-icon"></use>
        </svg>
        <p>Prettier</p>
      </li>
      <li class="tech-stack__list-item">
        <svg role="img" viewBox="0 0 25 25">
          <use href="../assets/svg/icons.svg#eslint-icon"></use>
        </svg>
        <p>ES Lint</p>
      </li>
      <li class="tech-stack__list-item">
        <svg role="img" viewBox="0 0 25 25">
          <use href="../assets/svg/icons.svg#aws-icon"></use>
        </svg>
        <p>AWS</p>
      </li>
      <li class="tech-stack__list-item">
        <svg role="img" viewBox="0 0 25 25">
          <use href="../assets/svg/icons.svg#netlify-icon"></use>
        </svg>
        <p>Netlify</p>
      </li>
      <li class="tech-stack__list-item">
        <svg role="img" viewBox="0 0 25 25">
          <use href="../assets/svg/icons.svg#heroku-icon"></use>
        </svg>
        <p>Heroku</p>
      </li>
      <li class="tech-stack__list-item">
        <svg role="img" viewBox="0 0 25 25">
          <use href="../assets/svg/icons.svg#postman-icon"></use>
        </svg>
        <p>Postman</p>
      </li>
      <li class="tech-stack__list-item">
        <svg role="img" viewBox="0 0 25 25">
          <use href="../assets/svg/icons.svg#figma-icon"></use>
        </svg>
        <p>Figma</p>
      <li class="tech-stack__list-item">
        <svg role="img" viewBox="0 0 25 25">
          <use href="../assets/svg/icons.svg#jira-icon"></use>
        </svg>
        <p>Jira</p>
      </li>
    </ul>

    <!-- <img src="../assets/img/memoji2.png" /> -->
  </div>

</template>

<script>
</script>

<style>

h1 {
  font-size: 3rem;
  font-weight: 100;
  margin: 15vh auto 10vh auto;
  color: white;
}

svg {
  height: 3em;
  fill: white;
}
.tech-stack__list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: rgb(0, 0, 0, 0.3);
  backdrop-filter: blur(1px);
}

.tech-stack__list-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 4.5rem;
  min-height: 4.5rem;
  margin: 0.2em;
}

.tech-stack__list-item p {
  font-weight: 200;
  font-size: 0.75rem;
  line-height: 1.1;
  text-align: center;
  max-width: 4rem;
  /* color: #413C58; */
  color: white;
}

li {
  font-family: 'Quicksand', sans-serif;
  line-height: 2;
  text-align: center;
}
</style>