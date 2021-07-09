<template>
  <div>
    <home></home>
    <PictureMove></PictureMove>
  </div>
</template>

<script>
import home from '../views/home'
import PictureMove from '../components/common/PictureMove'
export default({
  name: 'shop',
  components: {
    'home': home,
    'PictureMove': PictureMove
  }
})
</script>

<style scoped>

</style>
