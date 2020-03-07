<template>
  <div>
    <ul class="list">
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "cityalphabet"
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 6rem;
  right: 0;
  bottom: 0;
  width: 0.8rem;

  // background: red;
  .item {
    line-height: 1.2rem;
    text-align: center;
    color: $bgColor;
  }
}
</style>