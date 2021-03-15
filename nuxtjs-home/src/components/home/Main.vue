<template>
  <div id="home-main" :style="styles">
    <div class="main-container">
      <img
        class="master-img"
        src="~/static/icons/home/program.png"
        alt="program"
      />

      <p class="yomi">ハン・サヒャン</p>
      <ParaTitle title="HAN SAHYEON">
        <v-icon class="person-icon">mdi-account</v-icon>
      </ParaTitle>
      <p class="intro">{{ introPara.cur }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { colors, vars } from "~/styles/theme";
import ParaTitle from "~/blocks/ParaTitle.vue";

export default Vue.extend({
  components: {
    ParaTitle
  },
  data: () => ({
    introPara: {
      snap: "はじめまして。ウェブ開発志望のハンです。",
      cur: ""
    }
  }),
  mounted() {
    const len = this.introPara.snap.length;
    let dx = 0;
    let timer = setInterval(() => {
      if (dx >= len) {
        clearInterval(timer);
        return;
      }
      this.introPara.cur += this.introPara.snap[dx];
      dx += 1;
    }, 100);
  },
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
#home-main {
  width: 100%;
  padding: 80px 0;
  color: white;
  background-color: var(--main-bgColor);
}

.main-container {
  max-width: var(--max-width);
  margin: 0 auto;
  text-align: center;
}

.master-img {
  height: 250px;
  width: 250px;
  border: 3px solid gray;
  border-radius: 50%;
  background-color: white;
  margin: 20px;
}

p {
  &.yomi {
    font-size: 1.2rem;
  }
  &.intro {
    font-size: 1.1rem;
  }
}

.person-icon {
  color: inherit;
  font-size: 3rem;
}
</style>
