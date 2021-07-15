<template>
<div class="Carousel">
  <div class="fun_explain">
     <h1>{{functionimg[id].title}}</h1>
     <p>{{functionimg[id].message}}</p>
     <div class="tips">
       牧童游用户端<br>
       随时随地看民宿
       </div>
     <input type="button" value="立即入驻">
  </div>
  <div class="fun_img" @click= "click1($event)">
    <el-carousel :interval="4000" type="card" height="490px" arrow="never" indicator-position="none" :autoplay= "false">
    <el-carousel-item v-for="(item, index) in functionimg" :key="item.src" :id='index' class="carousel_move">
     <img :src="item.src" alt="">
    </el-carousel-item>
  </el-carousel>
  </div>
</div>
</template>
<script>
export default ({
  name: 'FunCarousel',
  data () {
    return {
      id: 0,
      functionimg: [{src: require('../../assets/img/product/img-3.png'), title: '我的客人', message: '在住客人，明日客人，接下来一周的客人列表一目了然。'},
        {src: require('../../assets/img/product/img-4.png'), title: '掌柜发圈', message: '掌柜一键发布经营日常，关联店内商品，深度和客人社交互动，构建私域流量。'},
        {src: require('../../assets/img/product/img-5.png'), title: '一铺四展', message: '住宿、餐饮、娱乐项目、特产商城。一个店铺全部搞定，将你店内的一切全方位多维度展现给客人。'}]
    }
  },
  methods: {
    click1 (event) {
      this.id = document.querySelector('.is-active').id
      console.log(this)
    },
    moveTo (event) {
      let CarouselMove = document.querySelectorAll('.carousel_move')
      for (let i = 0; i < CarouselMove.length; i++) {
        CarouselMove[i].addEventListener('mousemove', function () {
          this.click()
        })
      }
    }
  },
  mounted () {
    this.moveTo()
  }
})
</script>
<style lang="scss">
  .el-carousel__item {
    h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
    img {
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    }
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
.Carousel {
  display: flex;
  justify-content: center;
  text-align: left;
  .fun_explain {
    width: 278px;
    margin-right: 250px;
    margin-top: 60px;
    p {
      background: #FFFFFF;
      height: 60px;
      margin-top: 50px;
      margin-bottom: 55px;
    }
    .tips {
      margin-bottom: 40px;
      font-size: 16px;
      font-weight: 500;
      line-height: 28px;
      color: #222223;
    }
    input {
      width: 278px;
      height: 36px;
      border: 1px solid #62BE96;
      cursor: pointer;
    }
  }
  .fun_img {
    width: 442px;
    height: 190px;
  }
}
</style>
