<template>
  <div>
    <Header @onSectionClick="handleSectionClick"/>
    <Home
      ref="landingSection"
      class="mb-5"
    />

    <Fees
      ref="feesSection"
      class="pb-5"
    />

    <History
      ref="historySection"
      class="pb-5"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Home from '../components/Home.vue'
import Header from '../components/Header.vue';
import History from '../components/History.vue';
import Fees from '../components/Fees.vue';

interface ComponentMethods {
  handleSectionClick(section: string): void;
}

export default Vue.extend<unknown, ComponentMethods, unknown, unknown>({
  name: 'LandingPage',
  components: {
    Home,
    Header,
    History,
    Fees
  },

  methods: {
    handleSectionClick(section) {
        switch (section) {
          case 'landingSection':
            (this.$refs.landingSection as Vue | undefined)?.$el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          break;
          case 'historySection':
            (this.$refs.historySection as Vue | undefined)?.$el?.scrollIntoView({ behavior: 'smooth', block: 'start'  });
            break;
          case 'feesSection':
            (this.$refs.feesSection as Vue | undefined)?.$el?.scrollIntoView({ behavior: 'smooth', block: 'start'  });
            break;
        }
    },
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
