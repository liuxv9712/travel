<template>
  <!-- ref可获取DOM -->
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <ul class="item-list">
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
        </ul>
      </div>
      <div class="area">
        <div class="title border-topbottom">B</div>
        <ul class="item-list">
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";

export default {
  name: "citylist",
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper);
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.border-topbottom, &:before {
  border-color: #cccccc;
}

&:after {
  border-color: #ccc;
}

.list {
  // 绝对定位布局和overflow: hidden,使屏幕不能拉动
  overflow: hidden;
  position: absolute;
  top: 5.5rem;
  bottom: 0;
  left: 0;
  right: 0;

  .title {
    line-height: 2rem;
    background: #eee;
    padding-left: 1rem;
    color: #666;
    font-size: 1.2rem;
  }

  .button-list {
    overflow: hidden;
    padding: 0.2rem 0.6rem 0.2rem 0.2rem;

    .button-wrapper {
      float: left;
      width: 33.33%;

      .button {
        margin: 0.2rem;
        padding: 0.2rem 0;
        text-align: center;
        border: 0.1rem solid #ccc;
        border-radius: 0.1rem;
      }
    }
  }

  .item-list {
    .item {
      line-height: 2.4rem;
      padding-left: 1rem;
      border-bottom: 0.02 rem solid #ccc;
    }
  }
}
</style>