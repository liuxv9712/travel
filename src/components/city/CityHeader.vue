<template>
  <div class="header">
    <p>城市选择</p>
    <!-- 点击箭头回到首页 -->
    <router-link to="/">
      <div class="iconfont header-back">&#xe606;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "cityheader"
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header {
  position: relative;
  overflow: hidden;
  height: 2.4rem;
  text-align: center;
  line-height: 2.4rem;
  color: #fff;
  background-color: $bgColor;
  font-size: 1.2rem;

  .header-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 2.5rem;
    font-size: 1.2rem;
    color: #fff;
  }
}
</style>