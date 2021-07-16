<template>
  <div class="NavBar">
    <div class="left"><slot name="left"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="scss" scoped>
.NavBar {
  display: flex;
  justify-content:space-between;
  height: 60px;
  .left{
    margin: 10px 0 10px 40px;
    height: 40px;
  }
  .right{
    margin: 22px 180px 22px 0;
    height: 40px;
  }
}
</style>
