<template>
  <div id="root-layout">
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import "~/styles/static/normalize.css";
import "~/styles/globalStyle.css";
import Navbar from "~/layouts/navigation/Navbar.vue";
import Footer from "~/layouts/footer/Footer.vue";
import Vue from "vue";

export default Vue.extend({
  components: {
    Navbar,
    Footer
  }
});
</script>

<style lang="scss" scoped></style>
