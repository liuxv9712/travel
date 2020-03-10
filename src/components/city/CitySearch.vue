<template>
  <div>
    <div class="search">
      <input v-model="keyword" type="search" class="search-input" placeholder="请输入城市名" />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
          v-for="item in list"
          :key="item.ids"
          class="search-item border-bottom"
          @click="handleCityChange(item.name)"
        >{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
import { mapMutations } from "vuex";

export default {
  name: "citysearch",
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
  // 计算属性 定义是否能匹配 使用在 li 元素的 v-show 中
  computed: {
    hasNoData() {
      return !this.list.length;
    }
  },
  methods: {
    handleCityChange(city) {
      // this.$store.commit("changeCity", city);
      this.changeCity(city);
      this.$router.push("/");
    },
    ...mapMutations(["changeCity"])
  },
  watch: {
    // 用节流函数监听搜索keyword的变化
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search);
  }
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

.search-content {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 6rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;

  .search-item {
    line-height: 1.5rem;
    padding-left: 0.5rem;
    background: #fff;
    color: #666;
  }
}
</style>