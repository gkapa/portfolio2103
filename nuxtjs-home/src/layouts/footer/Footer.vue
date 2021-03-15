<template>
  <div id="footer" :style="styles">
    Copyright © Han Sahyeon 2021
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { colors } from "~/styles/theme";

export default Vue.extend({
  props: {},
  components: {},
  data: () => ({}),
  mounted() {},
  methods: {},
  computed: {
    styles() {
      return {
        "--footer-bgColor": colors.bluegray[10]
      };
    }
  }
});
</script>

<style lang="scss" scoped>
#footer {
  width: 100%;
  padding: 50px 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--footer-bgColor);
  color: white;
}
</style>
