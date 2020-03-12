<template>
  <div>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
    <div class="container"></div>
  </div>
</template>

<script>
import DetailBanner from "components/detail/DetailBanner";
import DetailHeader from "components/detail/DetailHeader";
import DetailList from "components/detail/DetailList";
export default {
  name: "detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      sightName: "",
      bannerImg: "",
      gallaryImgs: [],
      list: []
    };
  },
  methods: {
    getDetailInfo() {
      this.axios
        .get("/mock/detail.json", {
          params: {
            id: this.$route.params.id
          }
        })
        // .get("/mock/detail.json?id=" + this.$route.params.id)
        .then(res => {
          // console.log(res);
          res = res.data;
          if (res.ret && res.data) {
            const data = res.data;
            this.sightName = data.sightName;
            this.bannerImg = data.bannerImg;
            this.gallaryImgs = data.gallaryImgs;
            this.list = data.categoryList;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getDetailInfo();
  }
};
</script>

<style lang="stylus" scoped>
.container {
  height: 500rem;
}
</style>