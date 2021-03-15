<template>
  <div id="p-weather" :style="styles">
    <Weather />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { colors, vars } from "~/styles/theme";
import Head from "~/atoms/Head";
import Weather from "~/components/weather/Weather.vue";

export default Vue.extend({
  // head: { ...Head },
  props: {},
  components: { Weather },
  data: () => ({}),
  async mounted() {},
  created() {},
  methods: {},
  computed: {
    styles() {
      return {
        "--max-width": vars.maxWidth.main
      };
    }
  }
});
</script>

<style lang="scss" scoped></style>
