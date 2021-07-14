<template>
  <div class="store_card">
     <div class="store_logo"><img :src="store_logo" alt=""></div>
     <div class="store_img"><img :src="store_img" alt=""></div>
     <div class="store_message"><p>{{store_message}}</p></div>
     <div class="store_change">
       <div class="store_order_change">
         <div>入驻前后订单量变化</div>
          <div>{{order_change}}%</div>
         </div>
       <div class="store_effect_change">
         <div>入驻前后品牌影响力变化</div>
         <div>{{effect_change}}%</div>
       </div>
     </div>
  </div>
</template>

<script>

export default ({
  name: 'StoreCard',
  props: {
    store_logo: {
      type: String
    },
    store_img: {
      type: String
    },
    store_message: {
      type: String,
      default: '没有更多信息'
    },
    order_change: {
      type: Number,
      default: 100
    },
    effect_change: {
      type: Number,
      default: 100
    }
  }
})
</script>

<style lang="scss" scoped>
.store_card {
  position: relative;
  margin: 0 20px;
  width: 460px;
  height: 490px;
  padding: 24px 24px 48px 24px;
  &:hover{
  transform: scale(1.2);
  }
  transition-duration:.08s;
  .store_logo {
    position: absolute;
    top: -32px;
    left: 171px;
    background-color: transparent;
  }
  .store_img {
    height: 192px;
    font-size: 0;
    margin-bottom: 24px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .store_message {
    p {
      font-size: 16px;
      line-height: 28px;
      margin-bottom: 20px;
      text-align: left;
      color: #606266;
    }
   &:after{
     content: '';
     display: block;
     width: 100%;
     height: 1px;
     background-color: #EBEEF5;
   }
  }
  .store_change {
    margin-top: 24px;
    .store_order_change {
      display: flex;
      justify-content: space-between;
      margin-bottom: 18px;
    }
    .store_effect_change {
      display: flex;
      justify-content: space-between;
    }
    div {
      font-size: 16px;
      line-height: 28px;
      font-weight: 900;
    }
  }
}
</style>
