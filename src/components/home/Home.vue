<template>
  <div class="home">
    <Header></Header>
    <Swiper></Swiper>
    <Icons></Icons>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import Header from "components/home/Header";
import Swiper from "components/home/Swiper";
import Icons from "components/home/Icons";
export default {
  name: "Home",
  components: {
    Header,
    Swiper,
    Icons
  }
};
</script>
