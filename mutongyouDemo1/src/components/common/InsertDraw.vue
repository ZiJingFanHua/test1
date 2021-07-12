<template>
  <div class="pic_show">
    <div class="picture"><img :src="url[0].purl" alt=""></div>
    <div class="letter_arrow"></div>
  </div>
</template>

<script>

export default ({
  name: 'InserDraw',
  props: {
    url: {
      type: Array,
      default: function () {
        return [{purl: require('../../assets/logo.png')}]
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.pic_show {
  // display: none;
  width: 200px;
  height: 200px;
  position: absolute;
  top: -205px;
  border: 1px solid #ebeef5;
  padding: 12px;
  margin-bottom: 12px;
  .picture {
    width: 100%;
    height: 100%;
  }
  .letter_arrow {
    position: absolute;
    top: 199px;
    left: 88px;
    border: 4px solid transparent;
    border-top-color: red;
  }
}
</style>
