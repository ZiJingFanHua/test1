<template>
  <div>
    <div class="page_head"> <Nav :num='2'></Nav></div>
    <div class="page_body">
    <div class="page_top">
      <img :src="top_bg_src" alt="">
      <div class="top_bg"></div>
      <div class="top_center">
        <h1>牧童游携手掌柜打造
          精彩案例</h1>
        <p>每一个乡村旅游经营者都应该有自己的互联网阵地</p>
      </div>
    </div>
    <div class="users_examples">
      <Title :title= "extitle" :message= "exmessage"></Title>
      <div class="user_example" v-for="(company, index) in companys" :key="company.company_name">
        <div class="company_img"><img :src="companys[index].company_img" alt=""></div>
        <div><User :user_logo= "companys[index].company_logo" :user_name= "companys[index].company_name" :tags= "companys[index].tags" :user_local_message = "companys[index].company_local_message" :user_message= "companys[index].company_message"></User></div>
      </div>
    </div>
    <div class="page_store">
         <div class="store_carousel">
           <img src="../assets/img/case/img-bg.png" alt="" v-for="item in 3" :key="item">
         </div>
         <div class="store_title">
           <Title :title= "stitle" :message= "smessage"></Title>
         </div>
    </div>
    </div>
    <Duty></Duty>
    <Foot></Foot>
  </div>
</template>

<script>
import Nav from '../views/Nav'
import Foot from '../views/Foot'
import Duty from '../views/Duty'
import Title from '../components/common/Title'
import User from '../components/common/User'
export default ({
  name: 'case',
  data () {
    return {
      left: 0,
      timer: '',
      top_bg_src: require('../assets/img/case/img1.png'),
      extitle: '客户案例',
      exmessage: '- 为商户赋能 -',
      stitle: '这些掌柜都在牧童游',
      smessage: '- 资深掌柜都在选择牧童游 -',
      companys: [{company_logo: require('../assets/img/case/store-logo1.png'),
        company_img: require('../assets/img/case/store-pic1.png'),
        company_name: '重庆界外美术馆民宿',
        company_local_message: '沙坪坝区',
        tags: ['艺术自然', '美术馆'],
        company_message: '牧童游掌柜智慧系统   为商户提供店铺数字化管理、营销、服务；建设“界外民宿”线上互联网品牌阵地。'},
      {company_logo: require('../assets/img/case/store-logo2.png'),
        company_img: require('../assets/img/case/store-pic2.png'),
        company_name: '萤火谷农场',
        company_local_message: '沙坪坝区',
        tags: ['自然生态', '亲子时光'],
        company_message: '组织策划10余场线下引流品牌活动。推出嘉年华活动，专业策划团队、执行团队入场，成功将该地打造成当地人气聚集地，直接性利润破60万元。'},
      {company_logo: require('../assets/img/case/store-logo3.png'),
        company_img: require('../assets/img/case/store-pic3.png'),
        company_name: '岗嘉·喜麓民宿',
        company_local_message: '江津区',
        tags: ['高端民宿', '文创民宿'],
        company_message: '派驻专业文创团队，挖掘当地文化，全套的文创改造升级，陆续推出纪录片、扎染、双生愿等活动；规划设计空间艺术改造，提升整个民宿的文化氛围。'}]
    }
  },
  components: {
    Nav,
    Foot,
    Duty,
    Title,
    User
  },
  methods: {
    reverse () {
      let company = document.querySelectorAll('.user_example')
      for (let i = 0; i < company.length; i++) {
        if (i % 2 === 1) {
          company[i].style.flexDirection = 'row-reverse'
        }
      }
    },
    changeLeft () {
      this.timer = setInterval(() => {
        this.left = this.left - 1
        let BgStore = document.querySelector('.store_carousel')
        BgStore.style.left = this.left + 'px'
        if (this.left < -2980) { this.left = 0 }
      }, 40)
    },
    cleartimer () {
      clearInterval(this.timer)
    }
  },
  mounted () {
    this.reverse()
    this.changeLeft()
  },
  beforeDestroy () {
    this.cleartimer()
  }
})
</script>

<style lang="scss" scoped>
@import url(../assets/css/common.css);
.page_top {
  position: relative;
  font-size: 0;
  width: 100%;
  height: 630px;
  img {
    width: 100%;
    height: 100%;
  }
  .top_bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 1;
  }
  .top_center {
    position: absolute;
    top: 0;
    left: 0;
    color: #FFFFFF;
    opacity: 1;
    padding-left: 180px;
    padding-top: 240px;
    text-align: left;
    h1 {
      font-size: 40px;
      font-weight: bold;
      line-height: 50px;
      white-space: pre-line;
    }
    p {
      font-size: 20px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      line-height: 30px;
    }
  }
}
.users_examples {
  margin-bottom: 176px;
  .user_example {
    display: flex;
    justify-content: space-between;
    margin-bottom: 120px;
    .company_img {
      //  width: 1186px;
      width: 100%;
       height: 464px;
       font-size: 0;
       img {
         width: 100%;
         height: 100%;
         object-fit: cover;
       }
    }
  }
}
.page_store {
  width: 100%;
  height: 467px;
  position: relative;
  display: flex;
  justify-content: center;
  .store_carousel {
    position: absolute;
    width: 8943px;
    display: flex;
    justify-content: left;
  }
  .store_title {
   z-index: 3;
  }
}
</style>
