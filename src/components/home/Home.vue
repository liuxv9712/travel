<template>
  <div class="home">
    <Header></Header>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Header from "components/home/Header";

export default {
  name: "Home",
  components: {
    Header
  }
};
</script>
