<template>
  <div class="body">
    <Nav></Nav>

    <MovePicture></MovePicture>

    <Duty></Duty>

    <Existence></Existence>

    <Advantage></Advantage>

    <Number></Number>

    <Friends></Friends>

    <Cooperation></Cooperation>

    <Foot></Foot>
  </div>
</template>

<script>
import Nav from '../views/Nav'
import MovePicture from '../views/MovePicture'
import Foot from '../views/Foot'
import Cooperation from '../views/Cooperation1'
import Friends from '../views/Friends'
import Duty from '../views/Duty'
import Number from '../views/Number'
import Existence from '../views/Existence'
import Merchant from '../views/Merchant'
import Advantage from '../views/Advantage'
export default ({
  name: 'index',
  components: {
    Nav,
    MovePicture,
    Foot,
    Cooperation,
    Friends,
    Duty,
    Number,
    Existence,
    Merchant,
    Advantage
  }
})
</script>

<style lang="scss">
@import url(../assets/css/common.css);
.body {
  // max-width: 1920px;
  width: 100%;
  overflow: hidden;
  // display: flex;
  flex-grow: 1;
  flex-basis: 1;
}
</style>
