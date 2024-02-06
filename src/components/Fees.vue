<template>
  <div class="text-center">
      <b-container>
        <h1 class="font-weight-bold">
          Membership Fees
        </h1>

        <b-table striped hover :items="membershipTypes" :fields="membershipFields"></b-table>
      </b-container>

      <b-container>
        <h1 class="font-weight-bold">
          GreenFees
        </h1>

        <b-table striped hover :items="playingTypes" :fields="playingFields"></b-table>
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
  playingFields: {key: string, label: string}[];
  playingTypes: {membershipType: string, nineHoles: string, eighteenHoles: string}[];
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
        { membershipType: 'JUNIORS', annualFee: 'R450.00' },
        { membershipType: 'MEN / LADIES', annualFee: 'R1 650.00' },
        { membershipType: 'SPOUSES', annualFee: 'R1 300.00' },
        { membershipType: 'SOCIAL MEMBER', annualFee: 'R130.00' },
        { membershipType: 'COUNTRY MEMBER', annualFee: 'R850.00' },
      ],

      playingFields: [
        { key: 'membershipType', label: 'Membership Type' },
        { key: 'nineHoles', label: '9 Holes' },
        { key: 'eighteenHoles', label: '18 Holes' },
      ],

      playingTypes: [
        { membershipType: 'MEMBERS (SA HANDICAPPED)', nineHoles: 'R45.00', eighteenHoles: 'R70.00' },
        { membershipType: 'JUNIORS-MEMBERS (SA HANDICAPPED)', nineHoles: 'R30.00', eighteenHoles: 'R45.00' },
        { membershipType: 'VISITORS (SA HANDICAPPED)', nineHoles: 'R100.00', eighteenHoles: 'R140.00' },
        { membershipType: 'VISITORS (NON-SA HANDICAPPED)', nineHoles: 'R130.00', eighteenHoles: 'R180.00' },
        { membershipType: 'JUNIOR & STUDENT VISITORS (SA & NON-SA HANDICAPPED)', nineHoles: 'R45.00', eighteenHoles: 'R60.00' },
        { membershipType: 'SAGES/ALBATROS/GROUPS', nineHoles: 'R45.00', eighteenHoles: 'R70.00' },
        { membershipType: 'COUNTRY MEMBERS/VISITORS WITH RECIPROCITY (SA HANDICAPPED)', nineHoles: 'R70.00', eighteenHoles: 'R90.00' },
        { membershipType: 'OVER 80\'s - non club competition days', nineHoles: 'R30.00', eighteenHoles: 'R30.00' },
        { membershipType: 'OVER 80\'s - competition days', nineHoles: 'R70.00', eighteenHoles: '' },
        { membershipType: 'CHICKEN RUN', nineHoles: 'R35.00', eighteenHoles: 'R35.00' },
        { membershipType: 'SUNDAY - all players (9&18 holes)(Accept December Season)', nineHoles: 'R30.00', eighteenHoles: 'R45.00' },
        { membershipType: 'WATER LEVY - all players', nineHoles: 'R5.00', eighteenHoles: 'R5.00' },
        { membershipType: 'GOLF CART HIRE - MEMBERS', nineHoles: 'R100.00', eighteenHoles: 'R155.00' },
        { membershipType: 'GOLF CART HIRE - VISITORS', nineHoles: 'R130.00', eighteenHoles: 'R185.00' },
      ],
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
