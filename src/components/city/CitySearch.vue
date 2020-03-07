<template>
  <div class="search">
    <input type="search" class="search-input" placeholder="请输入城市名" />
  </div>
</template>

<script>
export default {
  name: "citysearch"
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.search {
  height: 3.2rem;
  background: $bgColor;
  padding: 0 0.5rem;

  .search-input {
    overflow: hidden;
    width: 100%;
    box-sizing: border-box;
    padding: 0 2rem;
    height: 3rem;
    text-align: center;
    border-radius: 0.5rem;
    color: #666;
  }
}
</style>