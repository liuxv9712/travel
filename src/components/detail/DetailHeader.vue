<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <span class="iconfont header-abs-back">&#xe606;</span>
    </router-link>

    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <span class="iconfont header-fixed-back">&#xe606;</span>
      </router-link>景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: "detailheader",
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    };
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop;
      // console.log(document.documentElement.scrollTop);
      if (top > 60) {
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = { opacity };

        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    }
  },
  activated() {
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header-abs {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  width: 3rem;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  border-radius: 1.5rem;
  background: rgba(0, 0, 0, 0.5);

  .header-abs-back {
    color: #fff;
    font-size: 1.2rem;
  }
}

.header-fixed {
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  color: #fff;
  background: $bgColor;
  font-size: 1.2rem;

  .header-fixed-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 2rem;
    text-align: center;
    font-size: 1rem;
    color: #fff;
  }
}
</style>