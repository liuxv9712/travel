<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img :src="bannerImg" alt class="banner-img" />
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number">
          <span class="iconfont">&#xe62f;{{this.gallaryImgs.length}}</span>
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary :imgs="gallaryImgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from "common/gallary/Gallary";
import FadeAnimation from "common/fade/FadeAnimation";
export default {
  name: "banner",
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data() {
    return {
      showGallary: false
    };
  },
  components: {
    CommonGallary,
    FadeAnimation
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true;
    },
    handleGallaryClose() {
      this.showGallary = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 2rem;
    color: #fff;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));

    .banner-title {
      flex: 1;
      font-size: 1.2rem;
      padding: 0 0.2rem;
    }

    .banner-number {
      padding: 0 0.6rem;
      height: 2rem;
      line-height: 2rem;
      margin-top: 0.02rem;
      font-size: 1rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);

      .iconfont {
        font-size: 1.2rem;
      }
    }
  }
}
</style>