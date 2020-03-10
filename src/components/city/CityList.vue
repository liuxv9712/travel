<template>
  <!-- ref可获取DOM -->
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item in hotCities"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(items,key) in cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <ul class="item-list">
          <li
            class="item"
            v-for="item in items"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >{{item.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
import { mapState, mapMutations } from "vuex";

export default {
  name: "citylist",
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: "city"
    })
  },
  methods: {
    handleCityClick(city) {
      // this.$store.commit("changeCity", city);
      this.changeCity(city);
      this.$router.push("/");
    },
    ...mapMutations(["changeCity"])
  },
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
    }
  },
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