<template>
  <div id="home-introduce" :style="styles">
    <div class="main-container">
      <div>
        <ParaTitle subtitle="SKILLS"></ParaTitle>
        <div class="skill-area">
          <div class="icon-block">
            <div class="img-container">
              <img src="~/static/icons/home/vue.png" alt="" />
            </div>
          </div>
          <div class="line"></div>
          <div class="para-block">
            <p class="title">
              Vue
            </p>
            <p class="body">
              Vue.jsのフレームワークであるNuxt.jsを使った開発ができます。
              現在、ご覧になっているこの紹介ページはNuxtを使い開発いました。インフラはAWSを使用しています。
              v-for, v-on, v-bindなどのvueのディレクティブ、components, data,
              methods,
              computedなどvueのコンポーネント機能も使えます。cssはscssのスタイルを、cssライブラリはVuetifyを使用しています。
            </p>
          </div>
        </div>
        <div class="skill-area">
          <div class="icon-block">
            <div class="img-container">
              <img src="~/static/icons/home/react.png" alt="" />
            </div>
          </div>
          <div class="line"></div>
          <div class="para-block">
            <p class="title">
              React
            </p>
            <p class="body">
              Reactのフレームワークである「Next.js」を使った開発ができます。
              useState, useRef, useEffect, useCallbackなどのReact
              Hooks及び状態管理ライブラリのReduxの使用ができます。
              cssはstyled-components(css-in-js)を、cssライブラリはMaterial
              UIを使用しています。
              会員登録からログイン、ログインユーザチャット機能を使用できるウェブページとGithubコードで公開しています。
              インフラはAWSを使用しています。下記のOUTPUTS項目をご参照ください。
            </p>
          </div>
        </div>
        <div class="skill-area">
          <div class="icon-block">
            <div class="img-container">
              <img src="~/static/icons/home/aws.webp" alt="" />
            </div>
          </div>
          <div class="line"></div>
          <div class="para-block">
            <p class="title">
              AWS
            </p>
            <p class="body">
              NuxtJs,
              NextJsで開発したページをAWSをインフラとして公開しています。
              主に使う機能は amplify
              initを始めとするプロジェクト内での設定、ユーザ認証、データベースの利用です。
              graphqlをAPIとして天気情報表示、チャット機能でも利用しています。
            </p>
          </div>
        </div>
        <div class="skill-area">
          <div class="icon-block">
            <div class="img-container">
              <img src="~/static/icons/home/css.png" alt="" />
            </div>
          </div>
          <div class="line"></div>
          <div class="para-block">
            <p class="title">
              html, css, javascript
            </p>
            <p class="body">
              html,
              cssについてはVueのコンポーネント作成、Reactのjsx(tsx)作成ができます。
              javascriptその延長線としてtypescriptも導入して使用しています。
            </p>
          </div>
        </div>
        <div class="skill-area">
          <div class="icon-block">
            <div class="img-container">
              <img src="~/static/icons/home/cpp.png" alt="" />
            </div>
          </div>
          <div class="line"></div>
          <div class="para-block">
            <p class="title">
              C++
            </p>
            <p class="body">
              現職での主プログラミング言語として、C++使用３年目です。
            </p>
          </div>
        </div>
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
#home-introduce {
  width: 100%;
  padding: 80px 0;
  color: black;
}

.main-container {
  margin: 0 auto;
  max-width: var(--max-width);
  text-align: center;
}

.skill-area {
  margin: 120px 0;
  display: flex;

  .icon-block {
    border-right: 1px solid gray;

    .img-container {
      width: 150px;
      height: 150px;
      border: 1px solid orangered;
      border-radius: 50%;
      margin: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      img {
        width: 80%;
        height: 80%;
      }
    }
  }
  .para-block {
    margin: 20px 20px;
    flex-grow: 1;
    text-align: initial;
    p.title {
      font-size: 1.4rem;
      margin-bottom: 10px;
      display: inline-block;
      border-bottom: 3px solid #80cbc4;
    }
    p.body {
      color: var(--body-text-color);
    }
  }
}
</style>
