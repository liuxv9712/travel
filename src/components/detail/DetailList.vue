<template>
  <div>
    <div class="item" v-for="(item,index) of list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <!-- 之所以在组件当中需要一个 name 属性，也是为了方便在组件自身调用自身出现递归的时候便于调用。下面可以看到，在下一个 div 标签中做一个 v-if 判断，如果存在 item.children。就把 item.children 当做 list 再传递给自身，进行递归调用 -->
      <div v-if="item.children">
        <detail-list :list="item.children" class="item-children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailList",
  props: {
    list: Array
  }
};
</script>

<style lang="stylus" scoped>
.item-title-icon {
  position: relative;
  left: 0.06rem;
  top: 0.06rem;
  display: inline-block;
  line-height: 2rem;
  width: 0.4rem;
  height: 0.4rem;
  background: url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') no-repeat;
  margin-right: 0.1rem;
  background-size: 0.4rem 3rem;
}

.item-title {
  line-height: 3rem;
  font-size: 1.2rem;
  padding: 0 0.2rem;
}

.item-children {
  padding: 0 1rem;
}
</style>