<template>
  <div class="project-inner">
    <div class="row col-12">
      <h2 class="title">{{ project.name }}</h2>
    </div>
    <div class="row col-12">
      <p>{{ project.bio }}</p>
      <p class="techStack"> <span class="bold">Tech stack: </span> {{ project.techStack }}</p>
    </div>
    <div class="row col-12 justify-content-center">
      <a class="project-link" 
        target="_blank" 
        :href="project.github"
      > 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g>
            <path d="M4.29 12l4.48-5.36a1 1 0 1 0-1.54-1.28l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37 1 1 0 0 0 .78-1.63z"/>
            <path d="M21.78 11.37l-4.78-6a1 1 0 0 0-1.56 1.26L19.71 12l-4.48 5.37a1 1 0 0 0 .13 1.41A1 1 0 0 0 16 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 .01-1.27z"/>
            <path d="M15.72 11.41a1 1 0 0 0-1.41 0L13 12.64V8a1 1 0 0 0-2 0v4.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3A1 1 0 0 0 12 16a1 1 0 0 0 .69-.28l3-2.9a1 1 0 0 0 .03-1.41z"/>
          </g>
        </svg>
      </a>  

      <a class="project-link" target="_blank" :href="project.link">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 283.842 283.842" >
          <g>
            <path d="M265.117,22.764l-9.877-8.737c-23.003-20.398-58.227-18.283-78.618,4.726l-28.267,31.89   c-6.38,7.199-5.717,18.251,1.479,24.637l2.653,2.354c7.221,6.402,18.239,5.741,24.646-1.481l28.265-31.889   c6.305-7.107,17.227-7.761,24.338-1.466l9.865,8.752c7.113,6.303,7.783,17.223,1.469,24.334l-61.808,69.726   c-5.231,5.911-13.791,7.505-20.816,3.875c-7.682-3.967-17.051-2.224-22.787,4.245l-0.482,0.544   c-3.881,4.377-5.499,10.188-4.439,15.943c1.061,5.752,4.642,10.604,9.825,13.313c8.197,4.284,17.049,6.358,25.814,6.358   c15.532,0,30.795-6.512,41.67-18.775l61.804-69.718C290.219,78.417,288.099,43.148,265.117,22.764z"/>
            <path d="M133.998,208.581l-2.659-2.356c-7.204-6.383-18.259-5.712-24.64,1.489l-28.254,31.886   c-6.308,7.105-17.222,7.764-24.327,1.473l-9.879-8.764c-7.115-6.301-7.783-17.212-1.467-24.325l61.806-69.721   c5.124-5.787,13.555-7.442,20.504-4.028c7.986,3.924,17.683,2.016,23.595-4.656l0.222-0.25c3.798-4.288,5.396-9.979,4.386-15.614   c-1.01-5.636-4.484-10.417-9.533-13.119c-22.828-12.22-50.769-7.22-67.947,12.165l-61.81,69.707v0.001   c-20.371,22.978-18.252,58.246,4.726,78.622l9.877,8.749c10.583,9.383,23.77,13.992,36.913,13.992   c15.394,0,30.724-6.327,41.718-18.724l28.258-31.886C141.88,226.003,141.224,214.987,133.998,208.581z"/>
          </g>
        </svg>
      </a>
    </div>
  </div>


  

</template>

<script>
  export default {
    props: {
      project: {
        required: true,
      type: Object,
      }
    },
  }

</script>

<style>
  .project-inner {
    border-radius: 5px;
    width: 80%;
    max-width: 900px;
    margin: 3% auto;
    padding: 1%;
    border: 0.1px solid grey;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  svg {
    height: 2em;
    fill: #FF9FC3;
    margin: 0.1em 0.5em;
  }

  svg:hover {
    fill: #d80032;
  }

  .title {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0.5em auto 1em auto;
  }

  .techStack {
    margin: auto;
    font-weight: lighter;
    font-size: 0.75rem;
  }

  p { 
    margin: auto;
    margin-bottom: 0.5em;
  }

  .bold {
    font-weight: bold;
  }
</style>