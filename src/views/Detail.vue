<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
    <div class="container"></div>
  </div>
</template>

<script>
import DetailBanner from "components/detail/DetailBanner";
import DetailHeader from "components/detail/DetailHeader";
import DetailList from "components/detail/DetailList";
export default {
  name: "detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      list: [
        {
          title: "成人票",
          children: [
            {
              title: "成人三馆联票",
              children: [
                {
                  title: "成人三馆联票 - 某一连锁店销售"
                }
              ]
            },
            {
              title: "成人五馆联票"
            }
          ]
        },
        {
          title: "学生票"
        },
        {
          title: "儿童票"
        },
        {
          title: "特惠票"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.container {
  height: 500rem;
}
</style>