<template>
  <div class="footer">
    <div class="left"><slot name="left"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>

export default ({
  name: 'Footer'
})
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: space-between;
  padding: 60px 180px 60px 180px;
  height: 475px;
}
</style>
