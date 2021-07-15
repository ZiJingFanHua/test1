<template>
  <div>
    <Nav :num='4'></Nav>
    <div class="top_bg"><img :src="top_bg_src" alt=""></div>
    <div class="page_position">
    </div>
    <div class="page_culture">
      <Title :title="cultitle" :message="culmessage"></Title>
      <div class="culture_box">
        <div class="culture_messgaes">
          <div class="culture_message">
            <h2>我们彼此信任，互相扶持</h2>
            <p>欢迎加入牧童游！我们始终相信，每个人来到这个世界上都是带着自己的使命，我们虽生来平凡，但正是因为大家
  聚在一起，才能够共同引领牧童游的发展轨迹。在这个大家庭里，我们彼此信任，互相扶持，一点点变得更像我们
  梦想中的样子。因为相信，所以看见是我们共同的价值观，敢想他人所不敢想，敢为他人所不敢为，是我们身上共
  有的特质！</p>
          </div>
          <div class="culture_message">
            <h2>挑战中坚实，奋斗中快乐</h2>
            <p>来到这里，肯定会有很多挑战在等着你，我们不承诺你在这里有多舒适，但是一定承诺你在这里获得快乐。成就我
  们共同的事业，需要每个家人携着梦想全力以赴，因此，牧童游也属于每一个为之奋斗的家人。在这里，请你放心
  的把自己融入牧童游大家庭，放心的把后背交给你身边的“亲人”，放心的把梦想同大家一起交织在未来，我们相
  互靠背，并肩前行！</p>
          </div>
        </div>
        <div class="culture_img">
          <img src="../assets/img/aboutUs/img2.png" alt="">
        </div>
      </div>
    </div>
    <div class="page_guarantee">
        <Title :title= "guartitle" :message= "guarmessage"></Title>
        <div class="guarantee-title">
          <h1>工作环境</h1>
          <h1>公司福利</h1>
          <h1>职业生涯</h1>
        </div>
        <Guarantee :items= "guaritems"></Guarantee>
    </div>
    <div class="page_work">
      <Title :title= "worktitle" :message= "workmessage"></Title>
      <ListCard class="works" :cards= "workcard"></ListCard>
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
import Guarantee from '../components/common/Guarantee'
import ListCard from '../components/common/ListCard'
export default ({
  name: 'joinus',
  data () {
    return {
      top_bg_src: require('../assets/img/joinUs/img1.png'),
      resume_title: '投递简历',
      re_message: '- 未来由我们共同创造 -',
      cultitle: '我们志同道合',
      culmessage: '- 因为相信所以看见 -',
      guartitle: '牧童游能为你带来',
      guarmessage: '- 因为相信所以看见 -',
      worktitle: '寻找志同道合',
      workmessage: '- 因为相信所以看见 -',
      guaritems: [{src: require('../assets/img/joinUs/icon-1.png'), message1: '超大独立工位、沙发放松区、餐吧休闲区、\n头脑风暴区、会议室…', message2: '', message3: ''},
        {src: require('../assets/img/joinUs/icon-2.png'), message1: '合伙人股份、项目奖金、带薪休假、交通补助、\n生日福利、团建聚会…', message2: '', message3: ''},
        {src: require('../assets/img/joinUs/icon-3.png'), message1: '一对一师徒制专向培养，高速成长，\n申请成为牧童游合伙人，共同开创属于我们的时代！', message2: '', message3: ''}],
      workcard: [{url: require('../assets/img/joinUs/icon-4.png'),
        title: '后端工程师',
        sec: [{title: '岗位描述', message: '①配合其他工程师设计开发工作，保障代码质量；\n②平台核心基础模块设计开发，系统性能优化；\n③负责业务代码与逻辑代码的编写；\n④有独立开发中小型后台项目经验者优先。'},
          {title: '岗位要求', message: '①计算机相关专业本科以上，有Java相关开发经验优先；\n②精通Java技术、了解jvm内部工作原理、熟悉SSM等主流开发框架；\n③熟练使用mysql、redis等数据库，有一定的sql优化经验；\n④掌握 maven、git等工具、Tomcat、Nginx等主流应用服务器、Linux系统的基本操作指令；\n⑤有良好的编码习惯，代码风格清晰、简单、保证运行效率⑥具有良好的服务意识、责任心、较强的学习能力、优秀的团队沟通与协作能力、能承受一定的工作压力。'}]},
      {url: require('../assets/img/joinUs/icon-5.png'),
        title: '后端工程师',
        sec: [{title: '岗位描述', message: '①配合其他工程师设计开发工作，保障代码质量；\n②平台核心基础模块设计开发，系统性能优化；\n③负责业务代码与逻辑代码的编写；\n④有独立开发中小型后台项目经验者优先。'},
          {title: '岗位要求', message: '①计算机相关专业本科以上，有Java相关开发经验优先；\n②精通Java技术、了解jvm内部工作原理、熟悉SSM等主流开发框架；\n③熟练使用mysql、redis等数据库，有一定的sql优化经验；\n④掌握 maven、git等工具、Tomcat、Nginx等主流应用服务器、Linux系统的基本操作指令；\n⑤有良好的编码习惯，代码风格清晰、简单、保证运行效率⑥具有良好的服务意识、责任心、较强的学习能力、优秀的团队沟通与协作能力、能承受一定的工作压力。'}]},
      {url: require('../assets/img/joinUs/icon-6.png'),
        title: '后端工程师',
        sec: [{title: '岗位描述', message: '①配合其他工程师设计开发工作，保障代码质量；\n②平台核心基础模块设计开发，系统性能优化；\n③负责业务代码与逻辑代码的编写；\n④有独立开发中小型后台项目经验者优先。'},
          {title: '岗位要求', message: '①计算机相关专业本科以上，有Java相关开发经验优先；\n②精通Java技术、了解jvm内部工作原理、熟悉SSM等主流开发框架；\n③熟练使用mysql、redis等数据库，有一定的sql优化经验；\n④掌握 maven、git等工具、Tomcat、Nginx等主流应用服务器、Linux系统的基本操作指令；\n⑤有良好的编码习惯，代码风格清晰、简单、保证运行效率⑥具有良好的服务意识、责任心、较强的学习能力、优秀的团队沟通与协作能力、能承受一定的工作压力。'}]},
      {url: require('../assets/img/joinUs/icon-7.png'),
        title: '后端工程师',
        sec: [{title: '岗位描述', message: '①配合其他工程师设计开发工作，保障代码质量；\n②平台核心基础模块设计开发，系统性能优化；\n③负责业务代码与逻辑代码的编写；\n④有独立开发中小型后台项目经验者优先。'},
          {title: '岗位要求', message: '①计算机相关专业本科以上，有Java相关开发经验优先；\n②精通Java技术、了解jvm内部工作原理、熟悉SSM等主流开发框架；\n③熟练使用mysql、redis等数据库，有一定的sql优化经验；\n④掌握 maven、git等工具、Tomcat、Nginx等主流应用服务器、Linux系统的基本操作指令；\n⑤有良好的编码习惯，代码风格清晰、简单、保证运行效率⑥具有良好的服务意识、责任心、较强的学习能力、优秀的团队沟通与协作能力、能承受一定的工作压力。'}]},
      {url: require('../assets/img/joinUs/icon-8.png'),
        title: '后端工程师',
        sec: [{title: '岗位描述', message: '①配合其他工程师设计开发工作，保障代码质量；\n②平台核心基础模块设计开发，系统性能优化；\n③负责业务代码与逻辑代码的编写；\n④有独立开发中小型后台项目经验者优先。'},
          {title: '岗位要求', message: '①计算机相关专业本科以上，有Java相关开发经验优先；\n②精通Java技术、了解jvm内部工作原理、熟悉SSM等主流开发框架；\n③熟练使用mysql、redis等数据库，有一定的sql优化经验；\n④掌握 maven、git等工具、Tomcat、Nginx等主流应用服务器、Linux系统的基本操作指令；\n⑤有良好的编码习惯，代码风格清晰、简单、保证运行效率⑥具有良好的服务意识、责任心、较强的学习能力、优秀的团队沟通与协作能力、能承受一定的工作压力。'}]},
      {url: require('../assets/img/joinUs/icon-9.png'),
        title: '后端工程师',
        sec: [{title: '岗位描述', message: '①配合其他工程师设计开发工作，保障代码质量；\n②平台核心基础模块设计开发，系统性能优化；\n③负责业务代码与逻辑代码的编写；\n④有独立开发中小型后台项目经验者优先。'},
          {title: '岗位要求', message: '①计算机相关专业本科以上，有Java相关开发经验优先；\n②精通Java技术、了解jvm内部工作原理、熟悉SSM等主流开发框架；\n③熟练使用mysql、redis等数据库，有一定的sql优化经验；\n④掌握 maven、git等工具、Tomcat、Nginx等主流应用服务器、Linux系统的基本操作指令；\n⑤有良好的编码习惯，代码风格清晰、简单、保证运行效率⑥具有良好的服务意识、责任心、较强的学习能力、优秀的团队沟通与协作能力、能承受一定的工作压力。'}]}]
    }
  },
  components: {
    Nav,
    Foot,
    Duty,
    Title,
    Guarantee,
    ListCard
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

.page_culture {
  .culture_box {
    display: flex;
    justify-content: center;
    .culture_messgaes {
      margin-left: 180px;
      .culture_message {
        margin-top: 74px;
        margin-right: 240px;
        text-align: left;
        margin-bottom: 100px;
        h2 {
          margin-bottom: 20px;
          font-size: 40px;
        }
        p {
          width: 700px;
          font-size: 14px;
        }
      }
    }
    .culture_img {
      width: 596px;
      height: 562px;
      font-size: 0;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.page_work {
  .works {
    width: 1500px;
    margin: 0 auto;
  }
}
.page_guarantee {
  background: #FAFAFB;
  .guarantee-title {
     display: flex;
     justify-content: center;
     h1 {
       width: 540px;
       text-align: center;
       padding-left: 84px;
     }
  }
}
</style>
