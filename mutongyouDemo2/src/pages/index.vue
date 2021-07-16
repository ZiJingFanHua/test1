<template>
  <div>
    <Nav></Nav>
    <div class="page_main">
      <div class="top_bg">
        <img src="../assets/img/img-top-product.png" alt="">
      </div>
      <div class="page_show">
        <CardShow :src= "card.img" :title= "card.name" :tags= "card.tagList" v-for="card in cards" :key="card.id" @click="goTOStore(card.id,card.img,card.imgList[0].img)">
          <div slot="address" class="address">
            <div class="address_img"><img src="../assets/img/icon-address.png" alt=""></div>
            <p class="address_meg">{{card.city}}{{card.area}}</p>
          </div>
          <div slot="moneymessage" class="moneymessage">人均消费</div>
        </CardShow>
        <div class="settleIn">
           <img src="../assets/img/settleIn.jpg" alt="">
        </div>
      </div>
    </div>
    <Foot></Foot>
  </div>
  <!-- <div>
    {{cards}}
  </div> -->
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
      cards: '',
      item: ''
    }
  },
  methods: {
    getStores () {
      let data = {pageNum: 1, pageSize: 12}
      get('/mty/theme/getAll', data)
        .then(res => {
          console.log(res)
          console.log(res.data.data.list[0].img)
          this.item = res
          this.cards = res.data.data.list
        })
        .catch(err => {
          console.log(err)
          console.log('2')
        })
    },
    goTOStore (id, logurl, bgurl) {
      console.log('1')
      // console.log(url)
      router.push({name: 'store', params: {Id: id, LogUrl: logurl, BgUrl: bgurl}})
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
    this.getStores()
  }
})
</script>

<style lang="scss" scoped>
.top_bg {
  width: 100%;
  height: 340px;
  margin-bottom: 32px;
  font-size: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.page_show {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  .moneymessage {
    font-size: 10px;
    font-weight: 500;
    line-height: 20px;
    color: #9E9E9F;
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
