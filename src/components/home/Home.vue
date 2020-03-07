<template>
  <div class="home">
    <Header :city="city"></Header>
    <Swiper :swiperList="swiperList"></Swiper>
    <Icons :iconsList="iconsList"></Icons>
    <Recommend :recommendList="recommendList"></Recommend>
    <Weekend :weekendList="weekendList"></Weekend>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import Header from "components/home/Header";
import Swiper from "components/home/Swiper";
import Icons from "components/home/Icons";
import Recommend from "components/home/Recommend";
import Weekend from "components/home/Weekend";

export default {
  name: "Home",
  components: {
    Header,
    Swiper,
    Icons,
    Recommend,
    Weekend
  },
  data() {
    return {
      city: "",
      swiperList: [],
      iconsList: [],
      recommendList: [],
      weekendList: []
    };
  },
  methods: {
    getHomeInfo() {
      this.axios
        .get("/mock/index.json")
        .then(res => {
          res = res.data;
          if (res.ret && res.data) {
            const data = res.data;
            console.log(data);
            this.city = data.city;
            this.swiperList = data.swiperList;
            this.iconsList = data.iconsList;
            this.recommendList = data.recommendList;
            this.weekendList = data.weekendList;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getHomeInfo();
  }
};
</script>
