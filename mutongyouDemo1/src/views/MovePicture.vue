<template>
  <el-carousel :interval="5000" arrow="always" :height="height">
    <el-carousel-item v-for="item in items" :key="item">
      <div class="picture">
      <img :src="item.imgsrc" alt="">
      <div class="picture_title">
        <p v-for="tit in item.title" :key="tit">{{tit}}{{mess}}</p>
        <div>
          <span v-for="mes in item.message" :key="mes">{{mes}}</span>
        </div>
      </div>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>
<script>

export default ({
  name: 'Carouse',
  data (event) {
    return {
      title: '牧童游科技',
      items: [{imgsrc: require('../assets/img/index/carousel-1.png'), title: ['中国领先的乡村旅游', '生态链服务平台'], message: ['助力中国乡村振兴']},
        {imgsrc: require('../assets/img/index/carousel-2.png'), title: ['每一个乡村旅游经营者', '都应该有自己的互联网阵地'], message: ['500万乡村旅游经营者首选合作平台']},
        {imgsrc: require('../assets/img/index/carousel-3.png'), title: ['助力中国乡村振兴'], message: ['牧童游——行走在乡村振兴路上的践行者']}],
      height: 770 + 'px'
    }
  },
  methods: {
    getpath (event) {
      console.log('ashfh')
      console.log(document.body.height - 60)
    }
  },
  mounted () {
    this.height = (window.innerHeight - 60) + 'px'
  }
})
</script>
<style lang="scss">
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  el-carousel-item {
    position: relative;
    div {
      position: absolute;
      z-index: 4000;
    }
  }
  .picture {
    position: relative;
    img{
      width: 100%;
    }
    .picture_title{
    position: absolute;
    top: 35%;
    width: 100%;
    p{
    font-size: 40px;
    line-height: 50px;
    text-align: center;
    color: #FFFFFF;
    }
    div{
    margin-top: 20px;
      span {
      font-size: 20px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      line-height: 30px;
      color: #FFFFFF;
      opacity: 1;
      }
    }
  }
  }

</style>
