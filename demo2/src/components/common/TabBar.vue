<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>

export default({
  name: 'tabbar'
})
</script>

<style scoped lang="scss">
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
  .center {
  /* background-color: red; */
  flex: 3;
  }
  .left,.right {
  /* background-color: blue; */
  flex: 1;
  }
}
</style>
