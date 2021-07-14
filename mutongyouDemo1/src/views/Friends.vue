<template>
  <div class="friends_bg">
    <div class="friends_title">
      <h1>{{title}}</h1>
      <div>{{friends_idea}}</div>
    </div>
     <div class="friends_school">
    <h1>{{school_title}}</h1>
    <div class="school_img">
      <div v-for="img in school_img_scr" :key="img.imgsrc">
         <img :src="img.imgsrc" alt="">
      </div>
    </div>
     </div>

    <div class="friends_company">
    <h1>{{company_title}}</h1>
    <div class="company_img">
      <div v-for="img in company_img_scr" :key="img.imgsrc">
         <img :src="img.imgsrc" alt="">
      </div>
    </div>
      </div>
  </div>
</template>

<script>

export default ({
  name: 'friends',
  data () {
    return {
      title: '牧童游的合作伙伴',
      friends_idea: '- 合作共赢 -',
      school_title: '合作高校',
      school_img_scr: [{imgsrc: require('../assets/img/index/school-1.png')},
        {imgsrc: require('../assets/img/index/school-2.png')},
        {imgsrc: require('../assets/img/index/school-3.png')},
        {imgsrc: require('../assets/img/index/school-4.png')},
        {imgsrc: require('../assets/img/index/school-5.png')}],
      company_title: '合作企业',
      company_img_scr: [{imgsrc: require('../assets/img/index/company-2.png')},
        {imgsrc: require('../assets/img/index/company-3.png')},
        {imgsrc: require('../assets/img/index/company-4.png')},
        {imgsrc: require('../assets/img/index/company-5.png')},
        {imgsrc: require('../assets/img/index/company-6.png')},
        {imgsrc: require('../assets/img/index/company-7.png')},
        {imgsrc: require('../assets/img/index/company-8.png')},
        {imgsrc: require('../assets/img/index/company-9.png')},
        {imgsrc: require('../assets/img/index/company-10.png')},
        {imgsrc: require('../assets/img/index/company-11.png')},
        {imgsrc: require('../assets/img/index/company-12.png')},
        {imgsrc: require('../assets/img/index/company-13.png')},
        {imgsrc: require('../assets/img/index/company-14.png')},
        {imgsrc: require('../assets/img/index/company-15.png')},
        {imgsrc: require('../assets/img/index/company-16.png')},
        {imgsrc: require('../assets/img/index/company-17.png')},
        {imgsrc: require('../assets/img/index/company-18.png')}]
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../assets/css/common.scss';
.friends_bg {
  width: 1200px;
  // height: 890px;
  color: $color_black;
  text-align: center;
  margin: 0 auto;
  .friends_title {
    margin-bottom: 120px;
    h1 {
      margin-top: 204px;
      font-size: 40px;
      line-height: 50px;
    }
    div {
      margin-top: 10px;
      color: #5E5E5F;
      font-size: 16px;
      line-height: 26px;
    }
  }
  .friends_school {
    h1 {
      font-size: 30px;
      line-height: 36px;
    }
    .school_img {
      display: flex;
      justify-content: center;
      div {
      margin: 0 42px;
      }
      img {
      width: 115px;
      height: 115px;
      &:hover{
      transform:scale(1.1);
      transition-duration:.08s
    }
      }
    }
  }
  .friends_company {
    // padding: 0 402px;
    h1 {
    margin-bottom: 20px;
    }
    .company_img{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto 62px auto;
    img {
      width: 115px;
      height: 115px;
      margin: 0 42px 25px;
      &:hover{
      transform:scale(1.1);
      transition-duration:.08s
    }
    }
    }
  }
}
</style>
