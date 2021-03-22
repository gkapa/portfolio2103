<template>
  <div id="home-home">
    <Main />
    <Introduce />
    <Outputs />
    <Contact />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Main from "./Main.vue";
import Introduce from "./Introduce.vue";
import Outputs from "./Outputs.vue";
import Contact from "./Contact.vue";

export default Vue.extend({
  components: {
    Main,
    Introduce,
    Outputs,
    Contact
  }
});
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap");

#home-home {
  width: 100%;
}
</style>
