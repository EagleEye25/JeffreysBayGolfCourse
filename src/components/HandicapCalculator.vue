<template>
  <div>
    <b-card
      title="Handicap Calculator"
      class="mb-3"
    >
      <!-- Inputs Container -->
      <b-row>
        <!-- Surname Input -->
        <b-col
          md="3"
          sm="12"
          class="mb-3"
        >
          <b-form-input
            v-model="surname"
            placeholder="Surname"
          />
        </b-col>

        <!-- First Name Input -->
        <b-col
          md="3"
          sm="12"
          class="mb-3"
        >
          <b-form-input
            v-model="firstName"
            placeholder="Firstname"
          />
        </b-col>

        <!-- SA Player ID Input -->
        <b-col
          md="3"
          sm="12"
          class="mb-3"
        >
          <b-form-input
            v-model="playerId"
            placeholder="SA Player ID (Optional)"
          />
        </b-col>

        <!-- Home Club Input -->
        <b-col
          md="3"
          sm="12"
          class="mb-3"
        >
          <b-form-input
            v-model="clubid"
            placeholder="Home Club (Optional)"
          />
        </b-col>
      </b-row>

      <!-- Submit Container -->
      <b-row>
        <b-col>
          <b-button
            @click="calculateCourseHandicap"
            variant="primary"
          >
            Submit
          </b-button>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { GolferLookup } from '@/services/api/apis/handicapNetwork'

interface ComponentData {
  playerId: string;
  firstName: string;
  surname: string;
  clubid: string;
}

// interface ComponentComputed {

// }

interface ComponentMethods {
  calculateCourseHandicap: () => number;
}

export default Vue.extend<ComponentData, ComponentMethods, unknown, unknown>({
  name: 'HandicapCalculatorComponent',
  data() {
    return {
      clubid: '',
      firstName: '',
      playerId: '',
      surname: '',
    }
  },

  computed: {

  },

  methods: {
    calculateCourseHandicap() {
      GolferLookup({
        search_clubId: this.clubid,
        search_firstname: this.firstName,
        search_playerId: this.playerId,
        search_surname: this.surname,
      })
      return 1;
    },
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.container {
  width: 90%;
}

</style>
