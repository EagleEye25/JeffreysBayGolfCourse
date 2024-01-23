<template>
  <div>
    <p>Welcome to Jeffreys Bay Golf Club</p>
    <b>Where you can see the sea from every tee!</b>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HomeComponent',
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
