<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe606;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe63c;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <!-- {{this.doubleCity}} -->
        <span class="iconfont">&#xe601;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapState(["city"]),
    ...mapGetters(["doubleCity"])
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header {
  display: flex;
  line-height: 3rem;
  background: $bgColor;
  color: #fff;

  .header-left {
    width: 2rem;
    float: left;
  }

  .header-input {
    // 自动撑开
    flex: 1;
    height: 2.4rem;
    line-height: 2.4rem;
    margin-top: 0.3rem;
    margin-left: 0.3rem;
    background: #fff;
    border-radius: 0.2rem;
    color: #ccc;
  }

  .header-right {
    min-width: 4rem;
    float: right;
    text-align: center;
    color: #fff;
  }
}
</style>