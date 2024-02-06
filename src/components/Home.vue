<template>
  <div class="landing-page">
    <p class="h1 font-weight-bold">Welcome to Jeffreys Bay Golf Club</p>
    <b class="h3">Where you can see the sea from every tee!</b>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HomeComponent',
  components: {
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .landing-page {
    background-image: url('~@/assets/images/landing.jpg'); /* Adjust the path based on your project structure */
    background-size: cover;
    background-position: center;
    height: 100vh; /* Set the height to viewport height */
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white; /* Set text color to contrast with the background */
    text-align: center;
    overflow: hidden; /* Prevent scrolling */
  }
</style>
