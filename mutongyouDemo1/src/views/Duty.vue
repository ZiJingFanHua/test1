<template>
  <div>
   <BgColor>
    <div v-for="item in items" :key="item.src" :slot="item.slot">
      <div class="duty_img">
        <img :src="item.src" alt="">
      </div>
      <div class="duty_message">
        {{item.message}}
      </div>
    </div>
   </BgColor>
  </div>
</template>

<script>
import BgColor from '../components/common/BgColorGreen'
export default ({
  name: 'Duty',
  data () {
    return {
      items: [{src: require('../assets/img/index/icon-duty-1.png'), message: '我们为乡村旅游经营者提供一站式经营解决方案', slot: 'left'},
        {src: require('../assets/img/index/icon-duty-2.png'), message: '我们为消费者提供全方位的乡村旅游互联网服务平台', slot: 'center'},
        {src: require('../assets/img/index/icon-duty-3.png'), message: '我们为乡村旅游行业发展提供产业链服务', slot: 'right'}]
    }
  },
  components: {
    BgColor
  }
})
</script>

<style lang="scss" scoped>

.duty_img {
  width: 100px;
  margin: 120px 50px 40px 50px;
  img {
    width: 100%;
  }
}
.duty_message {
  width: 200px;
  font-size: 16px;
  line-height: 21px;
  color: #ffffff;
  text-align: center;
}
</style>
