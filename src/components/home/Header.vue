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
        <span class="iconfont">&#xe601;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    city: String
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header {
  display: flex;
  line-height: 45px;
  background: $bgColor;
  color: #fff;

  .header-left {
    width: 40px;
    float: left;
  }

  .header-input {
    // 自动撑开
    flex: 1;
    height: 30px;
    line-height: 30px;
    margin-top: 6px;
    margin-left: 6px;
    background: #fff;
    border-radius: 4px;
    color: #ccc;
  }

  .header-right {
    width: 60px;
    float: right;
    text-align: center;
    color: #fff;
  }
}
</style>