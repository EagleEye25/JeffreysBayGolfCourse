<template>
  <div class="container mt-4">
    <h2 class="text-center">Local Rules</h2>

    <div class="row justify-content-center">
      <div class="col-md-8">
        <ul class="list-group">
          <!-- Local Rules -->
          <li
            class="list-group-item"
            v-for="(rule, index) in localRules" :key="index"
          >
            <strong>
              {{ rule.title }}
            </strong>

            <ul>
              <li
                v-for="(subRule, subIndex) in rule.subRules"
                :key="subIndex">
                {{ subRule }}
              </li>
            </ul>
          </li>
        </ul>

        <!-- Rules from Data -->
        <div
          v-for="(section, sectionIndex) in ruleSections"
          :key="sectionIndex"
          class="mt-4"
        >
          <h4>
            {{ section.title }}
          </h4>

          <ul
            v-if="section.type === 'ul'"
            class="list-group"
          >
            <li
              v-for="(rule, ruleIndex) in section.rules"
              :key="ruleIndex"
              class="list-group-item"
            >
              {{ rule }}
            </li>
          </ul>

          <p
            v-else-if="section.type === 'p'"
            class="list-group-item"
          >
            {{ section.rules }}
          </p>
        </div>
      </div>
    </div>

    <p class="text-center mt-4">
      Rules approved by Committee - 2023
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

interface ComponentData {
  localRules: {title: string, subRules: string[]}[];
  ruleSections: {title: string, type: string, rules: string | string[]}[]
}

export default Vue.extend<ComponentData, unknown, unknown, unknown>({
  name: 'LocalRulesComponent',
  data() {
    return {
      localRules: [
        {
          title: 'Out Of Bounds',
          subRules: [
            'All Perimeter fences',
            'The Golf cart parking area, practice greens and clubhouse complex',
            'Holes 1&10. The green, rough and fairway of 9&18 as indicated by the white markers',
            'Holes 3&12 as indicated by the white markers on the right hand side',
            'Squash court wall and maintenance yard fence and gate are a boundary thus a penalty drop if relief is required'
          ]
        },
        {
          title: 'Drop Zones',
          subRules: [
            'In the vicinity of 1/10, 2/11, 4/13, 6/15,7/16 (under 1 stroke penalty)',
            'All other drops, not nearer the hole keeping the hazard/obstruction between the ball and the hole',
            'Should bunkers be out of play for the day, free drop keeping bunker between ball and flag',
            'Relief from white staked trees and shrubs; free drop.'
          ]
        },
        {
          title: 'Movable Obstruction (See R/A rule 15)',
          subRules: ['Example: dustbins, benches, etc']
        },
        {
          title: 'Immovable Obstruction (See R/A rule 16)',
          subRules: ['Example: stakes, distance boards, etc.']
        },
        {
          title: 'Rocks and Stones',
          subRules: [
            'No relief from stones and rocks outside the fairways.',
            'Loose and embedded stones can be removed, without moving the ball. 1 Penalty stroke when the ball is moved or dropped.'
          ]
        },
        {
          title: 'Molehills (Free drop)',
          subRules: [
            'Relief may be taken from molehills or remains of molehills (Rule 25-1), provided that such remains are still identifiable as a cast made by a burrowing animal, reptile or bird and provided that your marker agrees.',
            'The scratch marks of Guinea fowls must be treated under the same rule'
          ]
        },
        {
          title: 'Preferred Lie',
          subRules: [
            'The golfer can lift a golf ball that is in the fairway and move it up to one (1) club length in any direction, not closer to the hole without penalty'
          ]
        }
      ],

      ruleSections: [
        {
          title: 'TEE Markers',
          type: 'p',
          rules: 'Blue course - Front 9 - Blue pyramid shape marker\nBack 9 - Blue square shape marker\nRed Course - Front 9 - Red Pyramid shape marker\nBack 9 - Red Pyramid shape marker'
        },
        {
          title: 'Distance Markers',
          type: 'p',
          rules: 'Distance measured to middle of green\nAll fairway markers: Green = 200m, Blue = 150m, Red = 100m'
        },
        {
          title: 'Pin Positions',
          type: 'p',
          rules: 'White Flag - Front\nYellow Flag - Middle\nRed Flag - Back'
        },
        {
          title: 'General Rules',
          type: 'ul',
          rules: [
            'Repair divots, pitch marks, and rake bunkers (Sandbags and pitchforks compulsory)',
            'Sharing of clubs not permitted',
            'Max four(4) players per group',
            'No golf carts within demarcated area of greens and within 1m from teeboxes',
            'Golf carts to be parked on the side of greens when putting',
            'Slow Play - only 3 minutes allowed when searching for a ball',
            'Allow players to get through when there is an open fairway in front',
            'Scorecards to be handed in at end of the round. Scoring and duplication of cards in the clubhouse are not permitted. Every hole must be marked by the player and marker on completion of each hole',
            'Appropriate clothing to be worn on the course and in the clubhouse'
          ]
        },
      ]
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
.col-md-8 {
  width: 70%; /* Set the width to 70% */
  margin: auto; /* Center the content */
}
</style>
