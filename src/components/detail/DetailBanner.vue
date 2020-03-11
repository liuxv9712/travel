<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        src="https://imgs.qunarzz.com/sight/p0/1601/93/93fc9519bd1959b890.img.jpg_710x360_ccaf3f3b.jpg"
        alt
        class="banner-img"
      />
      <div class="banner-info">
        <div class="banner-title">牛首山文化旅游区4A景区</div>
        <div class="banner-number">
          <span class="iconfont">&#xe62f;15</span>
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from "common/gallary/Gallary";
export default {
  name: "banner",
  data() {
    return {
      showGallary: false,
      imgs: [
        "https://imgs.qunarzz.com/sight/p0/1601/93/93fc9519bd1959b890.img.jpg_710x360_ccaf3f3b.jpg",
        "https://imgs.qunarzz.com/sight/p0/1601/88/887e26529b26a8c390.img.jpg_710x360_4d312932.jpg"
      ]
    };
  },
  components: {
    CommonGallary
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