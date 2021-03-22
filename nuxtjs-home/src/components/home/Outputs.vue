<template>
  <div id="home-outputs" :style="styles">
    <div class="main-container">
      <ParaTitle title="作成した物" subtitle="OUTPUTS"></ParaTitle>
      <div class="main-content">
        <div class="output-container">
          <div class="link">
            <a href="https://d2gebidt8vtcq4.cloudfront.net/" target="_blank">
              <img src="~/static/images/home/chatpage.jpg" alt="" />
            </a>
          </div>
          <div class="introduce">
            <p class="title">チャット機能</p>
            <p class="content">適用技術スタック</p>
          </div>
          <div class="skills">
            <img src="~/static/icons/home/react.png" alt="" class="icon" />
            <img src="~/static/icons/home/aws.webp" alt="" class="icon" />
            <img src="~/static/icons/home/css.png" alt="" class="icon" />
          </div>
        </div>
        <div class="output-container">
          <div class="link">
            <a href="/weather" target="_blank">
              <img src="~/static/images/home/weatherpage.jpg" alt="" />
            </a>
          </div>
          <div class="introduce">
            <p class="title">現在の天気</p>
            <p class="content">適用技術スタック</p>
          </div>
          <div class="skills">
            <img src="~/static/icons/home/vue.png" alt="" class="icon" />
            <img
              src="~/static/icons/home/openweather.jpg"
              alt=""
              class="icon"
            />
            <img src="~/static/icons/home/css.png" alt="" class="icon" />
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

  .introduce {
    color: gray;
    .title {
      font-size: 1.4rem;
    }
  }

  div.link {
    position: relative;
    margin-bottom: 20px;
    a:hover {
      &:after {
        position: absolute;
        left: 0;
        top: 0;
        content: "";
        width: 100%;
        height: 100%;
        background-color: greenyellow;
        border-radius: 3px;
        opacity: 0.5;
      }
    }

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
      width: 50px;
    }
  }
}
</style>
