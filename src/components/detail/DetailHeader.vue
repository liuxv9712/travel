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
      console.log("scroll");
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
  // 每一次页面展示的时候执行 activated 生命周期钩子
  // 利用 activated 钩子监听 scroll 触发 this.handleScroll。并在 methods 的 handleScroll 中完成渐隐渐现的算法逻辑。（通过 document.documentElement.scrollTop 计算 opacity 属性即可实现该动画效果）
  activated() {
    window.addEventListener("scroll", this.handleScroll);
  },
  // 使用 deactivated 生命周期钩子（页面即将被隐藏或替换成其他页面时） 对全局事件解绑
  deactivated() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  created() {
    // 如果在App.vue中使用了keep-alive exclued="Detail",造成了渐隐渐显的效果不显示了
    window.addEventListener("scroll", this.handleScroll);
    // 这样就不会执行activated,但是执行created生命周期钩子
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
  // 使用 fixed 定位到浏览器最上方。开始
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  // 结束
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