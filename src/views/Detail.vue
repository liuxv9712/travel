<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="container"></div>
  </div>
</template>

<script>
import DetailBanner from "components/detail/DetailBanner";
import DetailHeader from "components/detail/DetailHeader";
export default {
  name: "detail",
  components: {
    DetailBanner,
    DetailHeader
  }
};
</script>

<style lang="stylus" scoped>
.container {
  height: 500rem;
}
</style>