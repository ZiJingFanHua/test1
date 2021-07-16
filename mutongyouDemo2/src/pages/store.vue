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
        <div class="show_nav"><span>主页 </span>> {{store_name}}</div>
        <CardShow :src= "card.img" :title= "card.name" :tags= "card.goodsTag" v-for="card in cards" :key="card.id" @click= "goToGood(card)">
          <div slot="moneymessage" class="moneymessage"> <div>2100</div> <span>优惠2000元</span></div>
        </CardShow>
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
    getGoods () {
      let data = {pageNum: 1, pageSize: 12, storeId: this.store_id}
      get('/mty/store/searchKey', data)
        .then(res => {
          // console.log(res)
          // console.log(res.data.data.list[0].img)
          // this.item = res
          this.cards = res.data.data.list
          this.store_name = this.cards[0].store
        })
        .catch(err => {
          console.log(err)
          console.log('2')
        })
    },
    goToGood (categoryId) {
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
    this.getGoods()
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
  .address {
    display: flex;
    justify-content: left;
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
  .moneymessage {
    display: flex;
    justify-content: left;
    font-size: 10px;
    font-weight: 500;
    line-height: 18px;
    color: #9E9E9F;
    div{
      text-decoration: line-through;
    }
    span {
      width: 90px;
      height: 19px;
      margin-left: 5px;
      padding: 4px 10px;
      font-size: 11px;
      line-height: 11px;
      text-align: center;
      text-decoration: none;
      color: #FFFFFF;
      background: #FB5A13;
      border-radius: 10px;
    }
  }
  .settleIn {
    width: 1172px;
    height: 208px;
    background: rgba(0, 0, 0, 0);
    border: 1px solid #707070;
    border-radius: 20px;
    font-size: 0;
    img {
      width: 100%;
      height: 100%;
      border-radius: 20px;
      object-fit: cover;
    }
  }
}
</style>
