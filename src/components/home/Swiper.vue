<template>
  <!-- wrapper是为了防止布局抖动 -->
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->

      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="去哪儿" />
      </swiper-slide>

      <!-- Optional controls -->
      <!-- 显示小点 -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- 左右箭头 -->
      <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
      <!-- <div class="swiper-button-next" slot="button-next"></div> -->
      <!-- 滚动条 -->
      <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
export default {
  name: "mySwiper",
  data() {
    return {
      swiperOption: {
        loop: true, //设置图片循环
        autoplay: true, //设置可自动播放
        speed: 800, //自动播放的速度，每隔1秒滑动一次

        pagination: {
          el: ".swiper-pagination", //分页器的类名
          clickable: true //设置分页小圆点可手动点击
        }
      },
      swiperList: [
        {
          id: "001",
          imgUrl: "https://dimg04.c-ctrip.com/images/zg0j1d000001e8gif1020.jpg"
        },
        {
          id: "002",
          imgUrl: "https://dimg04.c-ctrip.com/images/zg0c1e000001eya7aCF69.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
// >>>穿透作用，因为swiper-pagination-bullet-active类在组件内部定义的，想要wrapper也能作用到，可以用>>>,
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff !important;
}

.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 16%;
  background: #eee;

  .swiper-img {
    width: 100%;
  }
}
</style>