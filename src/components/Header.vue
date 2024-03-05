<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      class="fixed-top header"
    >
      <b-navbar-brand href="#">
        <img src="@/assets/images/logo.png" alt="Your Logo" height="40" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse
        id="nav-collapse"
        is-nav
      >
        <b-navbar-nav>
          <b-nav-item @click="emitSection('landingSection')">
            Home
          </b-nav-item>
          <b-nav-item @click="emitSection('feesSection')">
            Fees
          </b-nav-item>
          <b-nav-item @click="emitSection('localRulesSection')">
            Local Rules
          </b-nav-item>
          <b-nav-item @click="emitSection('historySection')">
            History
          </b-nav-item>
          <b-nav-item @click="emitSection('contactUsSection')">
            Contact Us
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

// interface ComponentProps {}

// interface ComponentData {}

// interface ComponentComputed {}

interface ComponentMethods {
  emitSection(section: string): void;
}

export default Vue.extend<unknown, ComponentMethods, unknown, unknown>({
  name: 'HeaderComponent',
  methods: {
    emitSection(section: string) {
      this.$emit('onSectionClick', section);
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  background-color: rgba(0, 0, 0, 0.5) !important;
}

</style>
