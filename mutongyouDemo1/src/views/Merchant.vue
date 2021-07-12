<template>
  <div>
    <PS>
      <div slot="ps_left" class="ps_left">
         <h1>{{mtitle}}</h1>
         <p v-for=" message in mtitle_message" :key="message">{{message}}</p>
         <div class="tags">
           <div v-for="tag in mtags" :key="tag">{{tag}}</div>
         </div>
         <div class="button_use">
           <input type="button" :value="mbtn">
         <InsertPic></InsertPic>
         </div>
      </div>
      <div v-for="img in mimges" :key="img" :slot="img.slot" class="img_box">
        <img :src="img.src" alt="">
      </div>
    </PS>
  </div>
</template>

<script>
import PS from '../components/common/PictureShow'
import InsertPic from '../components/common/InsertDraw'
export default ({
  name: 'Merchant',
  // data () {
  //   return {
  //     title: '乡村路由经营商户',
  //     title_message: '帮助B端商户更好的服务C端消费者是我们的宗旨',
  //     tags: ['乡村民宿', '乡村酒店', '度假山庄', '户外基地', '农场院子', '田园风光', '古镇古村', '乡村景区', '农家乐…'],
  //     imges: [{src: require('../assets/img/index/img-11.png'), slot: 'picture_top'}, {src: require('../assets/img/index/img-12.png'), slot: 'picture_foot_right'}]
  //   }
  // },
  components: {
    PS,
    InsertPic
  },
  props: {
    mtitle: {
      type: String,
      required: true
    },
    mtitle_message: {
      type: Array,
      default: function () {
        return '无更多描述'
      }
    },
    mtags: {
      type: Array
    },
    mimges: {
      type: [Object]
    },
    mbtn: {
      type: String,
      default: '立即进入'
    },
    mactivenum: {
      type: menubar,
      default: 0
    },
    murl: {
      type: String
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../assets/css/common.scss';
.ps_left {
  padding: 120px 0 0 180px;
  text-align: left;
  h1 {
    text-align: 40px;
    line-height: 50px;
    margin-bottom: 40px;
  }
  p {
    width: 255px;
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 26px;
  }
  .tags {
    width: 318px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 60px;
    div {
      margin-right: 40px;
      font-size: 16px;
      line-height: 21px;
    }
  }
  .button_use{
    position: relative;
    margin: 100px 0 160px 0;
    display: flex;
    justify-content: center;
    input {
      width: 278px;
      height: 36px;
      font-size: 16px;
      line-height: 26px;
      color: $bg_color_green;
      text-align: center;
      color: $bg_color_green;
      background-color: $color_white;
      border: 1px solid $bg_color_green;
      cursor: pointer;
      &:hover {
      transform:scale(1.1);
      transition-duration: 0.8s;
     }
   }
  }
}

.img_box {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    img {
      position: absolute;
      object-fit: cover;
      top: 0;
      left: 0;
    }
}
</style>
