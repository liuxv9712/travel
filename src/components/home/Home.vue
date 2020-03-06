<template>
  <div class="home">
    <Header></Header>
    <Swiper></Swiper>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import Header from "components/home/Header";
import Swiper from "components/home/Swiper";
export default {
  name: "Home",
  components: {
    Header,
    Swiper
  }
};
</script>
