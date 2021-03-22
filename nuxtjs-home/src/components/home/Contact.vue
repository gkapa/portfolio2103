<template>
  <div id="home-contact" :style="styles">
    <div class="main-container">
      <div class="title">
        <ParaTitle subtitle="Contact"> </ParaTitle>
      </div>
      <div class="content">
        <div :style="{ margin: '10px auto' }">e-mail: pleasmin@gmail.com</div>
        <v-btn class="contact-button"
          ><a href="https://d2gebidt8vtcq4.cloudfront.net/" target="_blank"
            ><v-icon class="git-icon">mdi-github</v-icon>Github</a
          ></v-btn
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ParaTitle from "~/blocks/ParaTitle.vue";
import { colors, vars } from "~/styles/theme";

export default Vue.extend({
  components: {
    ParaTitle
  },
  data: () => ({}),
  mounted() {},
  methods: {},
  computed: {
    styles() {
      return {
        "--body-text-color": colors.gray[7],
        "--max-width": vars.maxWidth.main
      };
    }
  }
});
</script>

<style lang="scss" scoped>
#home-contact {
  width: 100%;
  padding: 80px 0;
  color: black;
}

.main-container {
  margin: 0 auto;
  max-width: var(--max-width);

  display: flex;
  flex-flow: column wrap;
  align-items: center;

  .title {
    .git-icon {
      color: inherit;
      font-size: 3rem;
    }
  }

  .content {
    margin: 0 auto;

    .contact-button {
      display: flex;
      align-items: center;
      border: 2px solid gray;
      border-radius: 15px;
      padding: 20px 40px;
      margin: 10px auto;

      .git-icon {
        font-size: 2.2rem;
      }
    }
  }
}
</style>
