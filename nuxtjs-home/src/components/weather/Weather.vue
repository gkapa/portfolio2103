<template>
  <div id="weather-weather" :style="styles">
    <ParaTitle title="API活用" subtitle="現在の天気"></ParaTitle>
    <div class="introduce">
      フリーのAPIを利用して、私が住んでいる長野県の現在の天気を表しています。<br />
      APIソース：<a class="a-blue" href="https://openweathermap.org/"
        >https://openweathermap.org/</a
      ><br />
      参考ページ：<a
        class="a-blue"
        href="https://qiita.com/nownabe/items/aeac1ce0977be963a740"
        >無料天気予報APIのOpenWeatherMapを使ってみる</a
      ><br />
      デザイン参考：<a
        class="a-blue"
        href="https://vuetifyjs.com/en/components/cards/#weather-card"
        >https://vuetifyjs.com/en/components/cards/#weather-card</a
      >
    </div>
    <Card />
    <div class="reference"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { colors, vars } from "~/styles/theme";
import ParaTitle from "~/blocks/ParaTitle.vue";
import Card from "./Card.vue";

export default Vue.extend({
  // head: { ...Head },
  props: {},
  components: { ParaTitle, Card },
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

<style lang="scss" scoped>
#weather-weather {
  padding: 50px 100px;
}

.introduce {
  display: inline-block;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>
