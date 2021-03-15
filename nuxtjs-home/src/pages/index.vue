<template>
  <div id="page-home">
    <Home />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import Head from "~/atoms/Head";
import Home from "~/components/home/Home.vue";

export default Vue.extend({
  head: {
    ...Head,
    title: "HAN SAHYEON（ハン・サヒャン） | ウェブ開発ポートフォリオ"
  },
  components: {
    Home
  }
});
</script>

<style lang="scss" scoped></style>
