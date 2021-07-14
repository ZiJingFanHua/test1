<template>
  <div>
  <Nav :num='3'></Nav>
  <div class="top_bg"><img :src="top_bg_src" alt=""></div>
  <div class="page_introduce">
    <Title :title="intrtitle" :message="intrmessage"></Title>
    <div class="introduce_box">
      <div class="introduce_message">
        <p>牧童游科技——重庆魔幻空间科技控股子公司。是一家以互联网为基
础的平台型公司，企业奉行平台成就商业，生态链接未来的理念，以
创造社会价值为前提，学习、运用、并期待在未来引领导向型科学技
术，服务生活，造福社会。</p>
        <p>牧童游科技，以数据为驱动，结合AI、大数据、底层创新互联网技
术，怀揣将整个中国乡村数字化的目标，与诸多同行者共同赋能中国
乡村的发展，投身乡村经济振兴的浪潮，共同肩负起让中国乡村更美
好的时代使命与社会担当。</p>
        <p>公司上下坚持因为相信，所以看见的共同价值观，以执行力为第一要
义，学习未来，拥抱变化，为社会创造价值；有海纳百川的气魄，开
放的胸怀，传承我们共同的使命，面向世界，面向未来。</p>
      </div>
      <div class="introduce_img"><img src="../assets/img/aboutUs/img2.png" alt=""></div>
    </div>
  </div>
  <div class="page_culture">
    <Title :title="cultitle" :message="culmessage"></Title>
    <div class="culture_box">
      <div class="culture_messgaes">
        <div class="culture_message">
          <h2>我们的使命</h2>
          <p>用科技和服务让中国乡村更美好</p>
        </div>
        <div class="culture_message">
          <h2>我们的愿景</h2>
          <p>定义城市周边的乡村生活</p>
        </div>
        <div class="culture_message">
          <h2>共同价值观</h2>
          <p>因为相信，所以看见</p>
        </div>
        <div class="culture_message">
          <h2>企业信条</h2>
          <p>执行、学习、价值、开放、传承</p>
        </div>
      </div>
      <div class="culture_img">
        <img src="../assets/img/aboutUs/img2.png" alt="">
      </div>
    </div>
  </div>
  <div class="page_map">
     <Map></Map>
  </div>
  <Duty></Duty>
  <Foot></Foot>
  </div>
</template>

<script>
import Nav from '../views/Nav'
import Foot from '../views/Foot'
import Duty from '../views/Duty'
import Map from '../components/common/LocalMap'
import Title from '../components/common/Title'
export default ({
  name: 'aboutus',
  data () {
    return {
      top_bg_src: require('../assets/img/aboutUs/img1.png'),
      intrtitle: '我们志同道合',
      intrmessage: '- 因为相信所以看见 -',
      cultitle: '企业文化',
      culmessage: '- 因为相信所以看见 -'
    }
  },
  components: {
    Nav,
    Foot,
    Duty,
    Map,
    Title
  }
})
</script>

<style lang="scss" scoped>
@import url(../assets/css/common.css);
.top_bg {
  font-size: 0;
  width: 100%;
  height: 630px;
  img {
    width: 100%;
    height: 100%;
  }
}
.page_introduce {
  padding-bottom: 180px;
  .introduce_message {
    text-align: left ;
    margin-bottom: 180px;
    p {
      width: 420px;
      font-size: 14px;
      line-height: 24px;
      margin: 30px auto;
    }
  }
  .introduce_img {
    width: 733px;
    height: 377px;
    font-size: 0;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.page_culture {
  .culture_box {
    display: flex;
    justify-content: space-between;
    .culture_messgaes {
      margin-left: 180px;
      .culture_message {
        text-align: left;
        margin-bottom: 100px;
        h2 {
          margin-bottom: 20px;
          font-size: 30px;
          line-height: 30px;
        }
        p {
          font-size: 20px;
          line-height: 20px;
        }
      }
    }
    .culture_img {
      width: 733px;
      height: 595px;
      font-size: 0;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
