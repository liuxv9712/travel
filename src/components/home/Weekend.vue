<template>
  <div>
    <div class="title border-bottom">周末去哪儿</div>
    <ul class="grid" v-for="item in weekendList" :key="item.id">
      <li class="grid-cell u-lof2">
        <img class="item-img" :src="item.imgUrl" alt />
        <p class="item-desc">{{item.desc}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "weekend",
  props: {
    weekendList: Array
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

.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .grid-cell {
    flex: 1;

    // flex-basis: auto;
    // flex: 0 0 50%;

    // white-space: nowrap;
    .item-img {
      width: 100%;
    }
  }
}
</style>