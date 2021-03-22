<template>
  <div id="weather-card" :style="styles">
    <template v-if="isFetched">
      <div class="block-title">
        <div class="title">長野県</div>
        <div class="subtitle">
          {{ weather.dt.md }} ({{ weather.dt.dayweek_ja }})
          {{ weather.dt.hm }} 現在
        </div>
      </div>
      <div class="block-temperature">
        <div class="temperature">{{ weather.main.temp }}℃</div>
        <div class="icon">
          <img
            :src="
              `http://openweathermap.org/img/wn/${weather.weather.icon}@2x.png`
            "
            alt=""
          />
        </div>
      </div>
      <div class="block-wind">
        <v-icon>mdi-send</v-icon>
        <div class="wind">{{ weather.wind.speed }} m/s</div>
      </div>
      <div class="block-humidity">
        <v-icon>mdi-cloud-download</v-icon>
        <div class="humidity">{{ weather.main.humidity }} %</div>
      </div>
    </template>
    <template v-else>
      <v-progress-circular indeterminate></v-progress-circular>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { colors, vars } from "~/styles/theme";
import Head from "~/atoms/Head";
import dateConverter from "~/utils/dateConverter";

export default Vue.extend({
  // head: { ...Head },
  props: {},
  components: {},
  data: () => ({
    isFetched: false,
    weather: {}
  }),
  async mounted() {
    try {
      // 참고: https://openweathermap.org/current
      // ex: api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}
      const city_id = "1856210"; // Nagano
      const api_key = process.env.API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?id=${city_id}&appid=${api_key}`;

      //@ts-ignore
      const response = await this.$axios.$get(url);
      // const skeleton = {
      //   coord: {
      //     lon: -122.08,
      //     lat: 37.39
      //   },
      //   weather: [
      //     {
      //       id: 800,
      //       main: "Clear",
      //       description: "clear sky",
      //       icon: "01d"
      //     }
      //   ],
      //   base: "stations",
      //   main: {
      //     temp: 282.55,
      //     feels_like: 281.86,
      //     temp_min: 280.37,
      //     temp_max: 284.26,
      //     pressure: 1023,
      //     humidity: 100
      //   },
      //   visibility: 16093,
      //   wind: {
      //     speed: 1.5,
      //     deg: 350
      //   },
      //   clouds: {
      //     all: 1
      //   },
      //   dt: 1560350645,
      //   sys: {
      //     type: 1,
      //     id: 5122,
      //     message: 0.0139,
      //     country: "US",
      //     sunrise: 1560343627,
      //     sunset: 1560396563
      //   },
      //   timezone: -25200,
      //   id: 420006353,
      //   name: "Mountain View",
      //   cod: 200
      // };

      const pay = {
        weather: {
          ...response.weather[0]
        },
        main: {
          ...response.main,
          temp: this.convertTemperature(response.main.temp),
          temp_min: this.convertTemperature(response.main.temp_min),
          temp_max: this.convertTemperature(response.main.temp_max),
          feels_like: this.convertTemperature(response.main.feels_like)
        },
        wind: {
          ...response.wind
        },
        dt: dateConverter.convertTimestamp(response.dt)
      };
      this.weather = { ...pay };
      this.isFetched = true;
    } catch (error) {
      console.log({ error });
    }
  },
  methods: {
    convertTemperature(Fa: number) {
      let Cel: any = Fa - 273.15;
      Cel = Cel.toFixed(1);
      return Cel;
    }
  },
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
#weather-card {
  display: inline-block;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0%);
  margin: 40px auto;
  border: 1px solid black;
  padding: 50px 100px;

  font-size: 1.2rem;
}

.block-title {
  .title {
    font-size: 2.2rem;
  }
  .subtitle {
    margin-top: 5px;
    color: gray;
  }
}

.block-temperature {
  display: flex;
  align-items: center;
  margin: 10px 0;
  .temperature {
    font-size: 3.2rem;
  }
  img {
    margin-left: 10px;
  }
}

.block-wind {
  display: flex;
  align-items: center;
  margin: 10px 0;
  .wind {
    margin-left: 20px;
  }
}

.block-humidity {
  display: flex;
  align-items: center;
  margin: 10px 0;
  .humidity {
    margin-left: 20px;
  }
}
</style>
