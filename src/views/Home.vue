<template>
  <div class="home">
    <Header></Header>
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
import { mapState } from "vuex";

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
      lastCity: "",
      swiperList: [],
      iconsList: [],
      recommendList: [],
      weekendList: []
    };
  },
  computed: {
    ...mapState(["city"])
  },
  methods: {
    getHomeInfo() {
      this.axios
        .get("/mock/index.json?city=" + this.city)
        .then(res => {
          res = res.data;
          if (res.ret && res.data) {
            const data = res.data;
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
    this.lastCity = this.city;
    this.getHomeInfo();
  },
  // 当页面重新显示的时候被执行
  activated() {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city;
      this.getHomeInfo();
    }
    console.log("activated");
  }
};
</script>
