<template>
  <div class="body">
    <Nav :num='1'></Nav>
    <div class="top_bg"><img :src="top_bg_src" alt=""></div>
    <div class="page_introduce">
      <Title :title= "intrtitle" :message= "intrmessage"></Title>
      <div class="introduce_img"><img src="../assets/img/product/img2.png" alt=""></div>
      <ListCard class="product" :cards= "productcard"></ListCard>
    </div>
    <Duty></Duty>
    <div class="page_guarantee">
      <Title :title= "guartitle" :message= "guarmessage"></Title>
      <Guarantee :items= "guaritems"></Guarantee>
    </div>
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
import Guarantee from '../components/common/Guarantee'
import ListCard from '../components/common/ListCard'
export default ({
  name: 'index',
  data () {
    return {
      top_bg_src: require('../assets/img/product/img1.png'),
      funtitle: '牧童游功能说明',
      funmessage: '- 专注于乡村旅行服务 -',
      guartitle: '牧童游的保障',
      guarmessage: '- 品质值得保障 -',
      intrtitle: '牧童游产品介绍',
      intrmessage: '- 一心一意打造产品 -',
      guaritems: [{src: require('../assets/img/product/icon-honor-1.png'), message1: '获得中国共青团中央、农业农村部等20个国家级部委\n联合认定的', message2: '中国最具品牌影响力代表!', message3: ''},
        {src: require('../assets/img/product/icon-honor-2.png'), message1: '牧童游乡村旅行已是重庆市乡村旅游标准的\n', message2: '起草人及制定者之一', message3: ''},
        {src: require('../assets/img/product/icon-honor-3.png'), message1: '重庆市场', message2: '占有率TOP1', message3: '的\n乡村旅游专属平台'},
        {src: require('../assets/img/product/icon-honor-4.png'), message1: '40余项自主知识产权', message2: '为乡村旅行鼎立保障', message3: ''},
        {src: require('../assets/img/product/icon-honor-5.png'), message1: '累计拥有30余项国家级、省部级的\n', message2: '创新类荣誉称号', message3: ''},
        {src: require('../assets/img/product/icon-honor-6.png'), message1: '行业资深技术大牛为你的数据安全\n', message2: '保驾护航', message3: ''}],
      productcard: [{url: require('../assets/img/product/img-3.png'),
        title: '数字化管理',
        sec: [{title: '便捷管理', message: '订单管理、店铺管理、员工管理、客人管理、营销管理、扫码核销…一个小程序给您统统搞定。'},
          {title: '管家助手', message: '经营分析、大数据预测、客人消费趋势预判、AI智能掌柜祝您经营无忧。'},
          {title: '全面服务', message: '店铺介绍、数字菜单、扫码点餐、房态管理、会员系统、日历价格、您需要的我们这里都有。'}]},
      {url: require('../assets/img/product/img-4.png'),
        title: '数字化管理',
        sec: [{title: '便捷管理', message: '订单管理、店铺管理、员工管理、客人管理、营销管理、扫码核销…一个小程序给您统统搞定。'},
          {title: '管家助手', message: '经营分析、大数据预测、客人消费趋势预判、AI智能掌柜祝您经营无忧。'},
          {title: '全面服务', message: '店铺介绍、数字菜单、扫码点餐、房态管理、会员系统、日历价格、您需要的我们这里都有。'}]},
      {url: require('../assets/img/product/img-5.png'),
        title: '数字化管理',
        sec: [{title: '便捷管理', message: '订单管理、店铺管理、员工管理、客人管理、营销管理、扫码核销…一个小程序给您统统搞定。'},
          {title: '管家助手', message: '经营分析、大数据预测、客人消费趋势预判、AI智能掌柜祝您经营无忧。'},
          {title: '全面服务', message: '店铺介绍、数字菜单、扫码点餐、房态管理、会员系统、日历价格、您需要的我们这里都有。'}]}]
    }
  },
  components: {
    Nav,
    Foot,
    Duty,
    Title,
    FunCarousel,
    Guarantee,
    ListCard
  }
})
</script>

<style lang="scss">
@import url(../assets/css/common.css);
.top_bg {
  font-size: 0;
  height: 630px;
  img {
    width: 100%;
    height: 100%;
  }
}
.page_function {
  margin-bottom: 180px;
}
.page_introduce {
  .introduce_img {
    width: 1044px;
    height: 638px;
    font-size: 0;
    margin: 0 auto 100px auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .product {
    width: 1500px;
    margin: 0 auto;
}
}
</style>
