<template>
  <div class="text-center text-lg-start footer-container">
    <!-- Section: Links  -->
    <section class="d-flex justify-content-center justify-content-lg-between p-4">
      <div class="container text-center text-md-start">
        <!-- Grid row -->
        <div class="row mt-3">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
            <!-- Content -->
            <h6 class="text-uppercase font-weight-bold mb-4">
              Jeffreys Bay Golf Course
            </h6>
            <!-- <p>
              some random text content here
            </p> -->
            <div class="d-flex justify-content-center p-2">
              <a href="https://www.facebook.com/Jbaygolf/" target="_blank" rel="noopener" class="me-4 text-reset h2 mb-2 border-rounded m-2">
                <b-icon icon="facebook"></b-icon>
              </a>
              <!-- <a href="" rel="noopener" class="me-4 text-reset h2 mb-2 border-rounded m-2">
                <b-icon icon="twitter"></b-icon>
              </a>
              <a href="" rel="noopener" class="me-4 text-reset h2 mb-2 border-rounded m-2">
                <b-icon icon="instagram"></b-icon>
              </a> -->
            </div>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase font-weight-bold mb-4">
              Contact Us
            </h6>
            <p>
              For inquiries and reservations, please contact us at:
            </p>
            <p><a href="mailto:jbaygolf@truewan.co.za">jbaygolf@truewan.co.za</a></p>
            <p><a href="tel:+27422932532">+27(0) 42 293 2532</a></p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <!-- <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
            <h6 class="text-uppercase font-weight-bold mb-4">
              Map
            </h6>
            <p>
              Put the map container in here
            </p>
          </div> -->
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
    </section>
    <!-- Section: Links  -->

    <!-- Copyright -->
    <!-- <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
      © 2024 Copyright:
      <a class="text-reset font-weight-bold" href="" rel="noopener">Jeffreys Bay Golf Club (add link to terms and conditions or something)</a>
    </div> -->
    <!-- Copyright -->

  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { BIcon } from 'bootstrap-vue';

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

/*
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
*/
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  // .map-container {
  //   height: 100vh;
  // }
  .footer-container {
    // background-color: rgba(108, 117, 125, 0.5);
    background-color: rgba(66, 66, 66, 0.6);
    color: rgba(255, 255, 255, 0.75);
  }
</style>
