<template>
  <div class="bg_color_green">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default({
  name: 'bg_color_green'
})
</script>

<style lang="scss" scoped>
@import '../../assets/css/common.scss';
.bg_color_green {
  height: 377px;
  background-color: $bg_color_green;
  display: flex;
  justify-content: space-around;
}
</style>
