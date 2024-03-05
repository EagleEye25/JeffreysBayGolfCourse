<template>
  <div class="text-center">
      <!-- Membership Fees -->
      <b-container>
        <h1 class="font-weight-bold">
          Membership Fees
        </h1>

        <b-table striped hover :items="membershipTypes" :fields="membershipFields"></b-table>
      </b-container>

      <!-- Green Fees Members -->
      <b-container>
        <h1 class="font-weight-bold">
          GreenFees (Members)
        </h1>

        <b-table striped hover :items="memberPlayingTypes" :fields="memberPlayingFields"></b-table>
      </b-container>

      <!-- Green Fees Non Members -->
      <b-container>
        <h1 class="font-weight-bold">
          GreenFees (Non-Members)
        </h1>

        <b-table striped hover :items="visitorPlayingTypes" :fields="visitorPlayingFields"></b-table>
      </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

// interface ComponentProps {

// }

interface ComponentData {
  membershipFields: string[];
  membershipTypes: {membershipType: string, annualFee: string}[]
  memberPlayingFields: {key: string, label: string}[];
  memberPlayingTypes: {membershipType: string, nineHoles: string, eighteenHoles: string}[];
  visitorPlayingFields: {key: string, label: string}[];
  visitorPlayingTypes: {membershipType: string, nineHoles: string, eighteenHoles: string}[];
  reciprocities: string[];
}

// interface ComponentComputed {
// }

// interface ComponentMethods {
// }

export default Vue.extend<ComponentData, unknown, unknown, unknown>({
  name: 'FeesComponent',
  data() {
    return {
      membershipFields: ['membershipType', 'annualFee'],
      membershipTypes: [
        { membershipType: 'Full Members', annualFee: 'R2 400.00' },
        { membershipType: 'Wives of Full Members', annualFee: 'R1 900.00' },
        { membershipType: 'Country Member', annualFee: 'R1710.00' },
        { membershipType: 'Junior Member', annualFee: 'R650.00' },
        { membershipType: 'Social Member', annualFee: 'R200.00' },
      ],

      memberPlayingFields: [
        { key: 'membershipType', label: 'Membership Type' },
        { key: 'nineHoles', label: '9 Holes' },
        { key: 'eighteenHoles', label: '18 Holes' },
      ],

      memberPlayingTypes: [
        { membershipType: 'Full Members', nineHoles: 'R80.00', eighteenHoles: 'R105.00' },
        { membershipType: 'Junior Members', nineHoles: 'R60.00', eighteenHoles: 'R75.00' },
        { membershipType: 'Rental Golf Cart', nineHoles: 'R160.00', eighteenHoles: 'R250.00' },
        { membershipType: 'Full Members Sunday', nineHoles: 'R75.00', eighteenHoles: 'R95.00' },
        { membershipType: 'Country Members', nineHoles: 'R80.00', eighteenHoles: 'R105.00' },
        { membershipType: 'Competition Fee', nineHoles: '', eighteenHoles: 'R20.00' },
      ],

      visitorPlayingFields: [
        { key: 'membershipType', label: 'Membership Type' },
        { key: 'nineHoles', label: '9 Holes' },
        { key: 'eighteenHoles', label: '18 Holes' },
      ],

      visitorPlayingTypes: [
        { membershipType: 'Affiliated', nineHoles: 'R110.00', eighteenHoles: 'R185.00' },
        { membershipType: 'Non Affiliated', nineHoles: 'R130.00', eighteenHoles: 'R210.00' },
        { membershipType: 'Rental Golf Cart', nineHoles: 'R200.00', eighteenHoles: 'R300.00' },
        { membershipType: 'SAGES', nineHoles: 'R80.00', eighteenHoles: 'R105.00' },
        { membershipType: 'Students (University card must be shown)', nineHoles: 'R85.00', eighteenHoles: 'R110.00' },
        { membershipType: 'Junior Affiliated', nineHoles: 'R85.00', eighteenHoles: 'R110.00' },
        { membershipType: 'Junior Non Affiliated', nineHoles: 'R85.00', eighteenHoles: 'R110.00' },
      ],

      reciprocities: ['Fynbos', 'Goose Valley', 'Graaff Reinet', 'Hankey', 'Joubertina', 'Shark River GC', 'St Francis Bay', 'Uitenhage', 'Walmer GC', 'Zwartenbosch'],
    }
  },

  computed: {

  },

  methods: {

  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
