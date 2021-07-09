<template>
  <div id="home">
    <tabbar class="nav-bar">
      <div slot="center">导航栏</div>
    </tabbar>
  </div>
</template>

<script >
import tabbar from '../components/common/TabBar'

export default({
  name: 'home',
  components: {
    tabbar: tabbar
  }
})
</script>

<style lang="scss" scoped>
.nav-bar {
     background-color: pink;
  }
</style>
