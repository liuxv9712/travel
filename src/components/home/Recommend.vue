<template>
  <div>
    <div class="title border-bottom">热销推荐</div>
    <ul v-for="item in recommendList" :key="item.id">
      <li class="item">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" alt class="item-img" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "recommend",
  props: {
    recommendList: Array
  }
};
</script>

<style lang="stylus" scoped>
.title {
  margin-top: 1.5rem;
  line-height: 2rem;
  background: #eee;
  // text-indent 属性规定文本块中首行文本的缩进。
  text-indent: 0.2rem;
}

.item {
  display: flex;
  height: 8rem;
  // background: red;
  overflow: hidden;

  .item-img {
    width: 7.5rem;
    height: 7.5rem;
    padding: 0.1rem;
  }

  .item-info {
    flex: 1;
    box-sizing: border-box;
    margin: 0.8rem;
    // 保证内容不超出外层容器
    min-width: 0;

    // background: green;
    .item-title {
      margin-top: 0.2rem;
      font-size: 1.2rem;
      line-height: 2rem;
      ellipsis();
    }

    .item-desc {
      line-height: 2rem;
      font-size: 1rem;
      color: #333;
      ellipsis();
    }

    .item-button {
      line-height: 1.6rem;
      margin-top: 0.16rem;
      background-color: #ff9300;
      padding: 0 0.8rem;
      border: none;
      border-radius: 0.6rem;
      color: #fff;
    }
  }
}
</style>