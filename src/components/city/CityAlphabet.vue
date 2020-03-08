<template>
  <div>
    <!-- 当我们处理兄弟组件时，可以让一个组件的数据给父组件，然后让父组件的这个数据传递给另一个组件 -->
    <ul class="list">
      <li
        class="item"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @click="handleLetter"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "cityalphabet",
  props: {
    cities: Object
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    };
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    }
  },
  methods: {
    handleLetter(e) {
      this.$emit("change", e.target.innerText);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        if (this.touchStatus) {
          const touchY = e.touches[0].clientY - 79;
          const index = Math.floor((touchY - this.startY) / 20);
          if (index >= 0 && index < this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
        }
      });
    },
    handleTouchEnd() {
      this.touchStatus = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 14rem;
  right: 0;
  bottom: 0;
  width: 1rem;

  // background: red;
  .item {
    line-height: 1.2rem;
    text-align: center;
    color: $bgColor;
  }
}
</style>