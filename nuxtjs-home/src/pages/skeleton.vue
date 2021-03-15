<template>
  <div id="skeleton" :style="styles"></div>
</template>

<script lang="ts">
import Vue from "vue";
import { colors, vars } from "~/styles/theme";
// import Head from "~/atoms/Head";

export default Vue.extend({
  // head: { ...Head },
  props: {},
  components: {},
  data: () => ({}),
  async mounted() {},
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
