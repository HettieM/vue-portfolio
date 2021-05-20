<template>
  <div class="project-page-wrapper">
    <h1>Here are some of the projects I have worked on</h1>
    <div class="project-wrapper">
      <projects 
        v-for="object in projectObjects"
        :key="object.name"
        :project="object"
      />
    </div>
  </div>

</template>

<script>
import projects from '../components/ProjectObject';

  export default {
    components: {
      projects,
    },
    data() {
      return {
        projectObjects: [
          {
            name: 'Top Trumps - Star Wars',
            bio: 'A classic Top Trumps game built using the Star Wars API, modified to work with GraphQL',
            techStack: 'React.js, Apollo, GraphQL, Git, GitHub, Netlify',
            link: 'https://gallant-hermann-668d4d.netlify.app/',
            github: 'https://github.com/HettieM/star-wars-top-trumps',
          },
          { 
            name: 'Teach a Man to Fish: Enterprise Adventures',
            bio: 'Developing the School Enterprise Challenge into a single person mission that teaches students entrepreneurial skills. MVP allows individuals to access guidelines and upload evidence of progression',
            techStack: 'React.js, Airtable, Figma, Jira, Git, GitHub, Netlify',
            img: '../assets/img/TAMTF.jpeg',
            link: 'https://enterprise-adventure.netlify.app/',
            github: 'https://github.com/fac19/teach-fish-frontend',
          },
          {
            name: 'Where\'s Whippy?',
            bio: 'Dual-user, full stack web app designed to connect customers with local ice cream vendors.',
            techStack: 'React.js, Node.js, Express, Postman API, Figma, Git, GitHub, Netlify, Heroku, Material UI',
            img: '../assets/img/wheres-whippy.jpeg',
            link: 'https://where-is-whippy.netlify.app/',
            github: 'https://github.com/fac19/week11-where-is-whippy',
          }, 
          {
            name: 'Crimes Against The Cohort',
            bio: 'A game built using React.js in a pair over 3 days that renders a wanted poster for a chosen member of our cohort, based on GitHub API and then the player has to guess in which displayed location the "criminal" is hiding.',
            techStack: 'React.js, Git, GitHub, Netlify',
            img: '../assets/img/CATC.jpeg',
            link: 'https://crimes-against-the-cohort.netlify.app/',
            github: 'https://github.com/fac19/week10-hettiehannah',
          },
          {
            name: 'Rest API',
            bio: 'Back end REST API built on many-to-many relational database connecting readers with books',
            techStack: 'Express, PostgreSQL, Postman API, Git, GitHub, Heroku',
            img: '../assets/img/RestAPI.jpeg',
            link: 'https://readers-and-coders.herokuapp.com/',
            github: 'https://github.com/fac19/week7-hihi',
          },
          {
            name: 'Javascript Calculator',
            bio: 'Calculator built with HTML, CSS and vanilla JavaScript',
            techStack: 'HTML5, CSS3, JavaScript, Git, GitHub, GitHub Pages',
            img: '../assets/img/calc.jpeg',
            link: 'https://hettiem.github.io/calculator/index.html',
            github: 'https://github.com/HettieM/calculator',
          }
        ]
      }
    }
  }
</script>

<style>
  .project-page-wrapper {
    margin-top: 10%;
  }
</style>