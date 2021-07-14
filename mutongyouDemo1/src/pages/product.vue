<template>
  <div class="body">
    <Nav :num='1'></Nav>
    <div class="top_bg"><img :src="top_bg_src" alt=""></div>
    <Duty></Duty>
    <div class="page_function">
      <Title :title= "funtitle" :message= "funmessage"></Title>
      <div>
        <FunCarousel></FunCarousel>
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
import Nav from '../views/Nav'
import Foot from '../views/Foot'
import Duty from '../views/Duty'
import Title from '../components/common/Title'
import FunCarousel from '../components/common/FunCarousel'
export default ({
  name: 'index',
  data () {
    return {
      top_bg_src: require('../assets/img/product/img1.png'),
      funtitle: '牧童游功能说明',
      funmessage: '- 专注于乡村旅行服务 -'
    }
  },
  components: {
    Nav,
    Foot,
    Duty,
    Title,
    FunCarousel
  }
})
</script>

<style lang="scss">
@import url(../assets/css/common.css);
.top_bg {
  font-size: 0;
  height: 630px;
}
.page_function {
  margin-bottom: 180px;
}
</style>
