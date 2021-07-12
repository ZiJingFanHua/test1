<template>
  <div>
   <Footer>
     <div slot="left">
       <FooterLeft></FooterLeft>
     </div>
     <div slot="right">
       <FooterRight></FooterRight>
     </div>
   </Footer>
  </div>
</template>

<script>
import Footer from '../components/common/Footer'
import FooterLeft from '../components/common/FooterLeft'
import FooterRight from '../components/common/FooterRight'
export default({
  name: 'Foot',
  components: {
    Footer,
    FooterLeft,
    FooterRight
  }
})
</script>

<style lang="" scoped>

</style>
