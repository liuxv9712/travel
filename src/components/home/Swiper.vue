<template>
  <!-- wrapper是为了防止布局抖动 -->
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
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
        speed: 100, //自动播放的速度，每隔1秒滑动一次

        pagination: {
          el: ".swiper-pagination", //分页器的类名
          clickable: true //设置分页小圆点可手动点击
        }
      }
    };
  },
  props: {
    swiperList: Array
  },
  // 在轮播图Swiper这个组件中，轮播的第一张图却是整个循环列表中的最后一张，这是因为swiper初始化创建是根据空数组创建的，只要让swiper创建的时候是一个最终数组而不是一个空数组就可以了，所以在Swiper标签上加v-if=‘swiperList.length’就可以了
  computed: {
    showSwiper: function() {
      return this.swiperList.length;
    }
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