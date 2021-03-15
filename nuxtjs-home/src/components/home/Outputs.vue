<template>
  <div id="home-outputs" :style="styles">
    <div class="main-container">
      <ParaTitle title="SDFxx" subtitle="Hello, World!"></ParaTitle>
      <div class="main-content">
        <div class="output-container">
          <div class="link">
            <a href="https://www.dogdrip.net" target="_blank">
              <img src="~/static/icons/home/cpp.png" alt="" />
            </a>
          </div>
          <div class="skills">
            <img src="~/static/icons/home/css.png" alt="" class="icon" />
            <img src="~/static/icons/home/vue.png" alt="" class="icon" />
          </div>
        </div>
        <div class="output-container">
          <div class="link">
            <a href="https://www.dogdrip.net" target="_blank">
              <img src="~/static/icons/home/cpp.png" alt="" />
            </a>
          </div>
          <div class="skills">
            <img src="~/static/icons/home/cpp.png" alt="" class="icon" />
          </div>
        </div>
        <div class="output-container">
          <div class="link">
            <a href="https://www.dogdrip.net" target="_blank">
              <img src="~/static/icons/home/cpp.png" alt="" />
            </a>
          </div>
          <div class="skills">
            <img src="~/static/icons/home/cpp.png" alt="" class="icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { colors, vars } from "~/styles/theme";
import ParaTitle from "~/blocks/ParaTitle.vue";

export default Vue.extend({
  // head: { ...Head },
  props: {},
  components: { ParaTitle },
  data: () => ({}),
  mounted() {},
  methods: {},
  computed: {
    styles() {
      return {
        "--main-bgColor": colors.teal[5],
        "--max-width": vars.maxWidth.main
      };
    }
  }
});
</script>

<style lang="scss" scoped>
#home-outputs {
  width: 100%;
  padding: 80px 0;
  background-color: var(--main-bgColor);
  color: white;
}

.main-container {
  max-width: var(--max-width);
  margin: 0 auto;
  text-align: center;
}

.main-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.output-container {
  margin: 40px;
  padding: 20px;
  border: 3px solid black;
  border-radius: 45px;
  background-color: white;

  div.link {
    margin-bottom: 20px;

    img {
      width: 200px;
    }
  }

  div.skills {
    display: flex;
    flex-flow: row wrap;
    align-items: center;

    img.icon {
      margin: 10px;
      width: 60px;
    }
  }
}
</style>
