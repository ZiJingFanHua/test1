<template>
  <div class="bg_color_green">
      <h1>掌柜用了牧童游——客人服务不再愁</h1>
      <button>立即合作</button>
  </div>
</template>

<script>

export default({
  name: 'Cooperation_1'
})
</script>

<style lang="scss" scoped>
@import "../assets/css/common.scss";
.bg_color_green {
  height: 377px;
  background-color: $bg_color_green;
  padding-top: 169px;
  h1 {
    font-size: 40px;
    line-height: 50px;
    color: $color_white;
  }
  button {
    margin-top: 60px;
    width: 278px;
    height: 36px;
    text-align: center;
    font-size: 16px;
    line-height: 26px;
    color: $color_white;
    background-color: $bg_color_green;
    border:1px solid$color_white ;
    border-radius: 5px;
    cursor: pointer;
  }
}
</style>
