<template>
  <div>
    <Nav></Nav>
    <div class="page_main">
      <div class="top_bg">
        <img :src="bg_url" alt="">
        <div class="store">
          <div class="store_logo"><img :src="log_url" alt=""></div>
          <div class="store_message">
          <p class="title">{{store_name}}</p>
          <p class="message">欢迎来到{{store_name}}</p>
          </div>
        </div>
      </div>
      <div class="page_show">
        <div class="show_nav"><span>主页 > {{store_name}} </span>> 商品</div>
        <div class="show_main">
          <div class="show_left">
            <h1>【昊宇通航·旋翼机体验】自由翱翔于天际，高空俯瞰美景！一次体验时长为10分钟，团建多人更优惠！</h1>
          <div class="address">
            <div class="address_img"><img src="../assets/img/icon-address.png" alt=""></div>
            <p class="address_meg">重庆市巴南区一品街道桥口坝村七社</p>
          </div>
          <div class="food_imgs"><img src="../assets/img/img-top-product.png" alt=""></div>
          </div>
         <div class="show_right">
           <p class="good_message">插上飞翔的翅膀，自由翱翔于天际，享受“脱离”地球引力的宁静与美妙！体验时长为10分钟噢亲…</p>
           <div class="right_button">
             <div class="money">特惠价格 ￥ <span class="new_money">398</span>  <span class="old_money">2398</span></div>
           <input type="button" value="立即购买">
           </div>
         </div>
        </div>
        <div class="show_explain">
        <div class="explain_img"></div>
        <div class="explain_message">
          <div>
            <h1>预定须知</h1>
            <ul>
              <li></li>
            </ul>
          </div>
          <div>
            <h1>预定须知</h1>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
        </div>
        <div class="settleIn">
           <img src="../assets/img/settleIn.jpg" alt="">
        </div>
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
import Nav from '../view/Nav'
import Foot from '../view/Foot'
import CardShow from '../components/common/CardShow'
import {get, post} from '../network/request'
import router from '../router/index'
export default({
  name: 'index',
  data: function () {
    return {
      store_id: '0',
      bg_url: '',
      log_url: '',
      cards: '',
      store_name: '',
      item: ''
    }
  },
  methods: {
    getGood () {
      let data = {storeId: 17, goodsId: 47}
      get('/mty/goods/details', data)
        .then(res => {
          // console.log(res)
          // console.log(res.data.data.list[0].img)
          // this.item = res
          this.cards = res.data
          this.store_name = this.cards[0].store
        })
        .catch(err => {
          console.log(err)
          console.log('2')
        })
    },
    goTOStore () {
      console.log('1')
      router.push('/store')
      console.log('2')
    }
  },
  components: {
    Nav,
    Foot,
    CardShow,
    post,
    get,
    router
  },
  created () {
    this.log_url = this.$route.params.LogUrl
    this.store_id = this.$route.params.Id
    this.bg_url = this.$route.params.BgUrl
    this.getGood()
    // this.bg_img = router.params.imgurl
    // console.log(this.$route.params)
  }
})
</script>

<style lang="scss" scoped>
.top_bg {
  position: relative;
  max-width: 1460px;
  height: 180px;
  margin-left: auto;
  margin-right: auto;
  padding: 16px 20px 18px;
  font-size: 0;
  img {
    width: 100%;
    height: 100%;
    border-radius: 14px;
    object-fit: cover;
  }
  .store {
    position: absolute;
    top: 37px;
    left: 54px;
    display: flex;
    justify-content: left;
    // background-color: brown;
      .store_logo {
          width: 108px;
          height: 108px;
          margin-right: 10px;
          border-radius: 14px;
          background-color: transparent;
      }
      .store_message {
        color: #FFFFFF;
        text-align: left;
        margin: auto 0;
         .title {
           margin-bottom: 8px;
           font-size: 18px;
           font-weight: 500;
         }
         .message {
           font-size: 16px;
           font-weight: 500;
         }
      }
  }
}
.page_show {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  .show_nav {
    width: 100%;
    font-size: 18px;
    text-align: left;
    color: #9E9E9F;
    span {
      font-size: 18px;
      color: #3FBFF0;
    }
  }
  .show_main{
    display: flex;
    margin-bottom: 48px;
     .show_left {
       h1 {
         margin-bottom: 5px;
        font-size: 18px;
        text-align: left;
        color: #000000;
       }
     .address {
        display: flex;
        justify-content: left;
        margin-bottom: 24px;
        .address_img {
          width: 16px;
          height: 16px;
          font-size: 0;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        p {
          font-size: 14px;
          font-weight: 500;
          line-height: 14px;
          color: #9E9E9F;
        }
      }
      .food_imgs {
        width: 724px;
        height: 407px;
        background: rgba(0, 0, 0, 0);
        font-size: 0;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
     }
     .show_right {
       margin-left: 32px;
       padding-top: 170px;
       text-align: left;
       flex-wrap: wrap;
       display: flex;
       justify-content: left;
       justify-content: space-between;
       flex-direction: column;
       .good_message{
        font-size: 16px;
        font-weight: 500;
        color: #9E9E9F;
       }
       .right_button {
        .money {
        font-size: 18px;
        color: #212122;
        .new_money {
          font-size: 24px;
        }
        .old_money {
          font-size: 18px;
          color: #9E9E9F;
          text-decoration: line-through;
        }
      }
      input {
        width: 337px;
        height: 43px;
        font-size: 18px;
        text-align: center;
        background: #00AE7D;
        border-radius: 8px;
        color: #FFFFFF;
      }
       }
     }
  }
  .show_explain {
   display: flex;
   justify-content: left;
   margin-bottom: 48px;
   .explain_img {
     width: 230px;
     height: 324px;
     margin-right: 16px;
     background: #F5F5F6;
   }
   .explain_message {
     display: flex;
     justify-content: left;
     justify-content: space-between;
     flex-direction: column;
     div {
       h1 {
        font-size: 18px;
        color: #000000;
        margin-bottom: 16px;
       }
       ul>li {
        font-size: 16px;
        font-weight: 500;
        color: #9E9E9F;
       }
     }
   }
  }
}
</style>
