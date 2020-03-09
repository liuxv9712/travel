<template>
  <div class="head">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from "components/city/CityHeader";
import CitySearch from "components/city/CitySearch";
import CityList from "components/city/CityList";
import CityAlphabet from "components/city/CityAlphabet";

export default {
  name: "city",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: ""
    };
  },
  methods: {
    getCityInfo() {
      this.axios
        .get("/mock/city.json")
        .then(res => {
          // console.log(res);
          res = res.data;
          if (res.ret && res.data) {
            const data = res.data;
            this.cities = data.cities;
            this.hotCities = data.hotCities;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleLetterChange(letter) {
      this.letter = letter;
    }
  },
  mounted() {
    this.getCityInfo();
  }
};
</script>

<style>
</style>