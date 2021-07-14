<template>
  <div>
    <div>
      <Carousel></Carousel>
    </div>
  </div>
</template>

<script>
import Carousel from '../components/common/FunCarousel'
export default ({
  name: 'index',
  components: {
    Carousel
  },
  methods: {
    kkkk () {
      console.log(typeof require('../assets/img/index/store-img1.png'))
      console.log(typeof '2')
    }
  }
})
</script>

<style lang="scss">
</style>
