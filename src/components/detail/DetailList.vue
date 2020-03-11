<template>
  <div>
    <div class="item" v-for="(item,index) of list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
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