<template>
  <div class="body">
        <Nav>
        </Nav>
        <MovePicture>
        </MovePicture>
  </div>
</template>

<script>
import Nav from '../views/Nav'
import MovePicture from '../views/MovePicture'
export default ({
  name: 'index',
  components: {
    Nav,
    MovePicture
  }
})
</script>

<style lang="scss">
@import url(../assets/css/common.css);
.body {
  max-width: 1920px;
  overflow: hidden;
}
</style>
