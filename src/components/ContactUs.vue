<template>
  <div>
    <h2>Contact Details</h2>
    <p>
      For inquiries and reservations, please contact us at:
    </p>
    <ul>
      <li>Email: info@golfcourse.com</li>
      <li>Phone: (123) 456-7890</li>
    </ul>

    <h2>Location</h2>
    <p>
      Find us on the map below:
    </p>

    <div
      id="map"
      class="map-container"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import L from 'leaflet';

// interface ComponentProps {}

// interface ComponentData {}

// interface ComponentComputed {}

// interface ComponentMethods {}

export default Vue.extend<unknown, unknown, unknown, unknown>({
  name: 'ContactUSComponent',
  data() {
    return {};
  },

  computed: {},

  methods: {},

  mounted() {
    // Initialize the map
    const map = L.map('map').setView([51.505, -0.09], 13); // Set initial coordinates and zoom level

    // Add OpenStreetMap as the base layer
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Add a marker
    L.marker([51.505, -0.09]).addTo(map).bindPopup('A sample popup.');
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .map-container {
    height: 100vh;
  }
</style>
