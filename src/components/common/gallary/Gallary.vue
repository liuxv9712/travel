<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallary-img" :src="item" alt="牛首山" />
        </swiper-slide>

        <!-- Optional controls -->
        <!-- 显示小点 -->
        <div class="swiper-pagination" slot="pagination"></div>
        <!-- 左右箭头 -->
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "commongallary",
  props: {
    imgs: {
      type: Array
    }
  },
  data() {
    return {
      swiperOption: {
        loop: true, //设置图片循环
        autoplay: true, //设置可自动播放
        speed: 100, //自动播放的速度，每隔1秒滑动一次
        observeParents: true, //swiper 插件监听到自身或父级元素DOM变化时，自动自我刷新。解决 swiper 刷新宽度计算 bug 的问题
        observer: true, //解决不可滚动BUG

        pagination: {
          el: ".swiper-pagination", //分页器的类名
          clickable: true, //设置分页小圆点可手动点击
          type: "fraction"
        },

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  methods: {
    handleGallaryClick() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container {
  overflow: inherit;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 99;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #000;

  .wrapper {
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 66.4%; // 宽高比

    .gallary-img {
      width: 100%;
    }

    .swiper-pagination {
      color: #fff;
      bottom: 0.2rem;
    }
  }
}
</style>