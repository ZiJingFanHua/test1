<template>
  <div class="footer_left">
    <div class="footer_left_top">
      <h1>{{title}}</h1>
    </div>
    <div class="footer_left_center">
      <div v-for="item in contact" :key="item">{{item}}</div>
    </div>
    <div class="footer_left_foot">
        <div v-for="imgsrc in 3" :key="imgsrc">
          <img src="../../assets/img/mtyshd.png" alt="">
          <div>牧童游乡村旅游网</div>
        </div>
    </div>
  </div>
</template>

<script>

export default ({
  name: 'FooterLeft',
  data () {
    return {
      title: '牧童游(重庆)科技有限责任公司',
      contact: {address: '地址：重庆市巴南区红光大道巴南区先进技术创新中心', tel: '电话：023-66488668', emil: '邮箱：MHKJ@mutongyou.com'}
    }
  }
})
</script>

<style lang="scss" scoped>
.footer_left {
text-align: left;
.footer_left_top {
  margin-bottom: 40px;
}
.footer_left_center {
  div{
  margin-bottom: 10px;
  }
}
.footer_left_foot {
  display: flex;
  margin-top: 30px;
  justify-content:space-between;
  div {
    width: 150px;
    height: 150px;
    margin-right: 40px;
    img {
      width: 150px;
      height: 150px;
      margin-bottom: 10px;
    }
    div {
      text-align: center;
      font-size: 16px;
      line-height: 28px;
    }
  }
}
}
</style>
