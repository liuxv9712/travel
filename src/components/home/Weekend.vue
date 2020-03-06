<template>
  <div>
    <div class="title border-bottom">周末去哪儿</div>
    <ul class="grid" v-for="item in itemsList" :key="item.id">
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
  data() {
    return {
      itemsList: [
        {
          id: "001",
          imgUrl:
            "http://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/7d9b233c71cad13ded0013f9c9cec635.jpg",
          desc: "驾一叶扁舟，寻瓯江往事"
        },
        {
          id: "002",
          imgUrl:
            "http://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/fd16ccffb2e2376ff370bda3bebebd71.jpg",
          desc: "不负嵊夏好时光，泗乎太安逸"
        },
        {
          id: "003",
          imgUrl:
            "http://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/5a11974656794b4715156501be10c1b7.jpg",
          desc: "厦门，带娃出行与幸福同行"
        },
        {
          id: "004",
          imgUrl:
            "http://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/c2ae82fcc9fa11fa253e5919c49bcfbf.jpg",
          desc: "探访日本，一部家庭旅行画册"
        }
      ]
    };
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