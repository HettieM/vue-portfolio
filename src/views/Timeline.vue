<template>
  <div class="timeline-wrapper">
    <Timeline 
      :timeline-items="items"
      :message-when-no-items="messageWithNoItems"
      order="desc"
      unique-timeline="true"
      color-dots="#FF9FC3"
    />
  </div>
</template>

<script>
  import Timeline from 'timeline-vuejs'

  export default {
    components: {
      Timeline,
    },
    // computed: (previousItem) => {

    // },
    data: () => ({
      messageWithNoItems: 'There are no items',
      items: [
        {
          from: new Date(2015, 8),
          title: 'University',
          description: 'Studied BSc Economics at the University of Sheffield. Achieved a 1st class grade with distinction.',
          // color: '#FF9FC3'

        },
        {
          from: new Date(2018, 9),
          title: 'Pre-programming Experience',
          description: 'Before discovering coding I worked in insurance and TV production. My experience here helped me to....'
        },
        {
          from: new Date(2020, 2),
          title: 'Founders and Coders: Bootcamp',
          description: 'After self studying the basics of JavaScript Web Development I enrolled at a 16 week course at Founders and Coders in Finsbury Park. The course is designed to help individuals start a career as full-stack web developers. Alongside learning HTML, CSS, vanilla JavaScript, and React, the course also focuses an importance on preparing individuals for the setup of future careers. Each week is designed to reflect a devlopment sprint with time set apart for learning, research, presentation and followed by a 2 day coding challenge, with a focus on pair programming and finally group and team retrospectives.'
        }, 
        {
          from: new Date(2020, 4),
          title: 'Project Development',
          description: 'The first 10 weeks of Founders and Coders is focussed on learning and practicing the basics of coding. The remaining 6 weeks bring all of the pieces together as we create 2 full-stack web apps. Our first project is student led. We must conceptualise, create and design an app from scratch within our teams of four, design our interface and carry out user testing before carrying out two week-long sprints. The second project involves these elements, but for the use of an external product owner. We worked with the Teach a Man to Fish charity to bring an interactive web application to allow users to carry out a set number of "challenges" and record their progress. Each project must be fully programmed, tested and deployed by the students and then peer reviewed by other members of the cohort working on different projects.'
        },
        {
          from: new Date(2020, 7),
          title: 'Darktrace: Full Stack JavaScript Developer',
          description: 'After graduating from Founders and Coders, I began working as a full stack JavaScript developer for Darktrace. I work within the Analyst team creating and developing on internal web-applications that allow the analysts to increase productivity and reduce workflow timelines. In my time at Darktrace I work client-side with vue, server-side with node and also have experience in devops and deployment of applications through AWS (as a Certified Cloud Practitioner), docker and terraform. Alongside this I am also learning basic Python to further my coding knowledge.'
        }
      ]
    })
  }
</script>

<style>
  .timeline-wrapper {
    width: 100%;
    margin-top: 10%;
  }

  .timeline {
    max-width: 750px !important;
    margin: 20px auto;
  }

  .item {
    text-align: justify;
    border-left: 5px solid RGB(177,237,232, 0.65) !important;
    max-width: 90%;
  }

  .description-item {
    background-color: rgb(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
    padding: 0 5px;;
  }

  .date-item {
    background-color: rgb(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 5px 5px 0 5px;
  }
  .title-item {
    background-color: rgb(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
    padding: 5px !important;
  }

</style>