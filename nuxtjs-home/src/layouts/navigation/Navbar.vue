<template>
  <div>
    <div id="navbar" :style="styles">
      <div class="appbar">
        <!-- area: Logo -->
        <div class="logo">
          <nuxt-link to="/">HAN</nuxt-link>
        </div>
        <!-- area: Menu -->
        <div class="menu">
          <template v-for="el in menuItems">
            <template v-if="el.link">
              <nuxt-link :to="el.link" :key="el.name">
                <v-btn class="menu-item">
                  {{ el.name }}
                </v-btn>
              </nuxt-link>
            </template>
            <template v-else>
              <v-btn
                class="menu-item"
                :key="el.name"
                @click="handleScroll(el.scroll)"
              >
                {{ el.name }}
              </v-btn>
            </template>
          </template>
        </div>
      </div>
    </div>
    <div class="blank" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { colors } from "~/styles/theme";
import { vars } from "~/styles/theme";

const menuItems = [
  {
    name: "Home",
    scroll: "home-main"
  },
  {
    name: "Introduce",
    scroll: "home-introduce"
  },
  {
    name: "Outputs",
    scroll: "home-outputs"
  },
  {
    name: "API",
    link: "/weather"
  }
];

export default Vue.extend({
  components: {},

  data: () => ({
    menuItems: [...menuItems]
  }),

  methods: {
    handleScroll(payload: string) {
      if (this.$route.path !== "/") {
        this.$router.push("/");
      }
      document.getElementById(payload)?.scrollIntoView();
    }
  },

  computed: {
    styles() {
      return {
        "--navbar-bgColor": colors.bluegray[8],
        "--max-width": vars.maxWidth.main
      };
    }
  }
});
</script>

<style lang="scss" scoped>
#navbar {
  position: fixed;
  width: 100%;

  background-color: var(--navbar-bgColor);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0%;
    border-bottom: 5px double rgba(0, 0, 0, 0.5);
    animation: anim-navbar-border 1.5s ease 0s 1 forwards;
    @keyframes anim-navbar-border {
      0% {
        width: 0%;
      }
      100% {
        width: 100%;
      }
    }
  }
}

.blank {
  width: 100%;
  height: 80px;
}

.appbar {
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  height: 80px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > .logo {
    margin-left: 80px;

    a {
      font-family: "Dancing Script", "Noto Serif JP", "Open Sans", sans-serif;
      font-size: 2.2rem;
      color: white;
    }
  }

  & > .menu {
    margin-right: 80px;

    display: flex;
    justify-content: flex-end;
    align-items: flex-start;

    button {
      margin: 0 5px;
    }
  }
}
</style>
