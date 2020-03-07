<template>
  <div class="head">
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>

<script>
import CityHeader from "components/city/CityHeader";
import CitySearch from "components/city/CitySearch";

export default {
  name: "city",
  components: {
    CityHeader,
    CitySearch
  }
};
</script>

<style>
</style>