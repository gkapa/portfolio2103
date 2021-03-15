<template>
  <div class="para-title">
    <div class="title">
      {{ title }}
    </div>
    <div class="subtitle">
      <hr />
      {{ subtitle }}
      <slot />
      <hr />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    title: String,
    subtitle: String
  },
  components: {},
  data: () => ({}),
  mounted() {},
  methods: {},
  computed: {
    styles() {
      return {};
    }
  }
});
</script>

<style lang="scss" scoped>
.para-title {
  font-size: 2.2rem;
  text-align: center;
}
.title {
  margin-bottom: 5px;
  font-weight: 700;
}
.subtitle {
  margin: 0 auto;
  margin-bottom: 25px;

  display: flex;
  justify-content: center;
  align-items: center;
  hr {
    width: 160px;
    height: 4px;
    margin: 0 25px;
    border: 0px;
    background-color: currentColor;
  }
}
</style>
