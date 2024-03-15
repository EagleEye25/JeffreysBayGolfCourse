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

    <LocalRules
      ref="localRulesSection"
      class="pb-5"
    />

    <History
      ref="historySection"
      class="pb-5"
    />

    <ContactUs
      ref="contactUsSection"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Home from '../components/Home.vue'
import Header from '../components/Header.vue';
import History from '../components/History.vue';
import Fees from '../components/Fees.vue';
import LocalRules from '../components/LocalRules.vue';
import ContactUs from '../components/ContactUs.vue';

interface ComponentMethods {
  handleSectionClick(section: string): void;
  scrollIntoViewWithOffset(section: Vue | undefined, offset: number): void
}

export default Vue.extend<unknown, ComponentMethods, unknown, unknown>({
  name: 'LandingPage',
  components: {
    Home,
    Header,
    History,
    Fees,
    LocalRules,
    ContactUs
  },

  methods: {
    handleSectionClick(section) {
      const offset = 60; // Adjust this value as needed

      switch (section) {
        case 'landingSection':
          this.scrollIntoViewWithOffset(this.$refs.landingSection as Vue | undefined, offset);
          break;
        case 'historySection':
          this.scrollIntoViewWithOffset(this.$refs.historySection as Vue | undefined, offset);
          break;
        case 'feesSection':
          this.scrollIntoViewWithOffset(this.$refs.feesSection as Vue | undefined, offset);
          break;
        case 'localRulesSection':
          this.scrollIntoViewWithOffset(this.$refs.localRulesSection as Vue | undefined, offset);
          break;
        case 'contactUsSection':
          this.scrollIntoViewWithOffset(this.$refs.contactUsSection as Vue | undefined, offset);
          break;
      }
    },

    scrollIntoViewWithOffset(section: Vue | undefined, offset: number): void {
      if (section?.$el) {
        section.$el.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });

        // Use setTimeout to calculate the adjusted position after scrollIntoView
        setTimeout(() => {
          const currentScrollPosition = window.scrollY;
          const newScrollPosition = currentScrollPosition - offset;
          window.scroll(0, newScrollPosition);
        }, 500); // Adjust the timeout duration as needed
      }
    },
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
