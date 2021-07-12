<template>
  <div>
    <BgColor>
    <div v-for="item in items" :key="item" :slot="item.slot">
      <div class="number_out_box">
        <div class="number_in_box">
      <div class="number">
        {{item.number}}+{{item.company}}
      </div>
      <div class="number_message">
        {{item.message}}
      </div>
      </div>
    </div>
    </div>
     </BgColor>
  </div>
</template>

<script>
import BgColor from '../components/common/BgColorGreen'

export default ({
  name: 'Nume4ber',
  data () {
    return {
      items: [{slot: 'left', message: '我们服务过的掌柜', company: '户', number: '26828'},
        {slot: 'center', message: '我们服务过的客户', company: '人次', number: '1305234'},
        {slot: 'right', message: '我们的GMV', company: '元', number: '80123651'}]
    }
  },
  components: {
    BgColor
  }
})
</script>

<style lang="scss" scoped>
@import '.././assets/css/common.scss';

.number_out_box {
  margin: 40px 0;
  border: 1px solid $color_white;
  border-radius: 20px;
  .number_in_box {
    width: 283px;
    height: 283px;
    border-radius: 20px;
    background-color: $color_white;
    padding-top: 129px;
    .number {
      font-size: 40px;
      line-height: 50px;
      color: $bg_color_green;
    }
    .number_message {
      font-size: 20px;
      line-height: 30px;
      color: $bg_color_green;
    }
  }
}
</style>
