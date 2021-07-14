<template>
  <div>
    <Nav :num='4'></Nav>
    <div class="top_bg"><img :src="top_bg_src" alt=""></div>
    <div class="page_position">
    </div>
    <div class="page_resume">
    <Title :title="resume_title" :message="re_message"></Title>
    <div class="send_resume">
      <div class="join_img"><img src="../assets/img/mtykj.png" alt=""></div>
      <div class="wx_resume">
        <div>
          <div class="line"></div>
        </div>
        <div>
        <h4>微信在线投递</h4>
        <p>微信搜索牧童游科技或扫描左侧二维码点击加入我们，在线投递简历</p>
        </div>
        </div>
      <div class="emil_resume">
                <div>
          <div class="line"></div>
        </div>
        <div>
           <h4>邮箱投递</h4>
        <p>简历命名为“姓名+投递岗位”发送至qixiaoqain@mutongyou.com</p>
        </div>
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
export default ({
  name: 'joinus',
  data () {
    return {
      top_bg_src: require('../assets/img/joinUs/img1.png'),
      resume_title: '投递简历',
      re_message: '- 未来由我们共同创造 -'
    }
  },
  components: {
    Nav,
    Foot,
    Duty,
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
.page_resume {
  background-color: #FAFAFB;
  .send_resume {
    display: flex;
    justify-content:center;
    padding-bottom: 180px;
    .join_img {
      width: 120px;
      height: 120px;
      font-size: 0;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .wx_resume, .emil_resume {
      width: 340px;
      display: flex;
      justify-content: space-between;
      text-align: left;
      font-size: 16px;
      line-height: 26px;
      padding-top: 26px;
      .line {
        height: 60px;
        width: 1px;
        margin: 10px 60px 0 60px;
        background-color: #EBEEF5;
      }
      p {
        width: 280px;
      }
    }
  }
}
</style>
