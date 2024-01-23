<template>
  <div>
    <Home />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Home from '../components/Home.vue'

export default Vue.extend({
  name: 'LandingPage',
  components: {
    Home
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
