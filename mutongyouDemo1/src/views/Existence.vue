<template>
  <div class="existence">
    <div class="existence_top">
      <h1>{{title}}</h1>
      <p>{{title_message}}</p>
    </div>
    <div class="existence_foot">
      <div v-for="(message, index) in messages" :key="message" @click="change(index)">
      <h1>{{message}}</h1>
      <div :class="{active:index==mactivenum}"></div>
      </div>
    </div>
    <Merchant :mtitle = "mtitle" :mtitle_message= "mtitle_message" :mtags="mtags" :mbtn="mbtn" :mimges="mimges" :mactivenum="mactivenum" :url="url"></Merchant>
  </div>
</template>

<script>
import Merchant from '../views/Merchant'
export default ({
  name: 'Existence',
  data () {
    return {
      title: '牧童游为谁而存在?',
      title_message: '- 500万乡村旅游经营者首选合作平台 -',
      messages: ['致力乡村旅游的经营商户', '广大爱好旅游的消费人群', '产业链上下游的链接者'],
      // 传递给子组件
      mtitle: '乡村路由经营商户',
      mtitle_message: ['帮助B端商户更好的服务C端消费者是我们的宗旨'],
      mtags: ['乡村民宿', '乡村酒店', '度假山庄', '户外基地', '农场院子', '田园风光', '古镇古村', '乡村景区', '农家乐…'],
      mbtn: '立即入驻',
      url: [{purl: undefined}],
      mimges: [{src: require('../assets/img/index/img-11.png'), slot: 'picture_top'}, {src: require('../assets/img/index/img-12.png'), slot: 'picture_foot_right'}],
      mactivenum: 0,
      mers: [[{mtitle1: '乡村路由经营商户',
        mtitle_message1: ['帮助B端商户更好的服务C端消费者是我们的宗旨'],
        mtags1: ['乡村民宿', '乡村酒店', '度假山庄', '户外基地', '农场院子', '田园风光', '古镇古村', '乡村景区', '农家乐…'],
        mbtn1: '立即入驻',
        mactivenum1: 0,
        url1: [{purl: undefined}],
        mimges1: [{src: require('../assets/img/index/img-11.png'), slot: 'picture_top'}, {src: require('../assets/img/index/img-12.png'), slot: 'picture_foot_right'}]}],
      [{mtitle1: '广大爱好旅游的消费人群',
        mtitle_message1: ['涵盖了你城市周边车程30分钟~3小时的一切吃喝玩乐周末去哪不再迷茫随时随地逛逛周边的生活圈子，记录你灵魂去过的足迹', '微信搜索牧童游，城市周边任你游！'],
        mtags1: ['住乡村民宿', '赏乡村美景', '品生态美食', '购乡村特产'],
        mbtn1: '扫码体验',
        mactivenum1: 1,
        url1: [{purl: require('../assets/img/mtyxcx.png')}],
        mimges1: [{src: require('../assets/img/index/img-13.png'), slot: 'picture_top'}, {src: require('../assets/img/index/img-14.png'), slot: 'picture_foot_right'}]}],
      [{mtitle1: '产业链上下游的链接者',
        mtitle_message1: ['打通乡村旅游产业链上下游为行业赋能而存在'],
        mtags1: ['乡村旅游学院', '消耗品供应商', '景观规划设计', '人才孵化输送', '外包服务商', '系统服务商', '品牌打造', '金融服务', '土地流转…'],
        mbtn1: '联系合作',
        mactivenum1: 2,
        url1: [{purl: require('../assets/img/mtygzh.png')}],
        mimges1: [{src: require('../assets/img/index/img-15.png'), slot: 'picture_top'}, {src: require('../assets/img/index/img-16.png'), slot: 'picture_foot_right'}]}]
      ]
    }
  },
  components: {
    Merchant
  },
  methods: {
    change (num) {
      this.mtitle = this.mers[num][0].mtitle1
      this.mtitle_message = this.mers[num][0].mtitle_message1
      this.mtags = this.mers[num][0].mtags1
      this.mbtn = this.mers[num][0].mbtn1
      this.mimges = this.mers[num][0].mimges1
      this.mactivenum = this.mers[num][0].mactivenum1
      this.url = this.mers[num][0].url1
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../assets/css/common.scss';
.existence {
  // height: 472px;
  text-align: center;
  padding-top: 180px;
  .existence_top {
    // box-sizing: border-box;
    h1 {
      // text-align: left;
      font-size: 40px;
      line-height: 50px;
    }
    p {
      font-size: 16px;
      line-height: 26px;
      margin: 10px 0 100px 0;
    }
  }
  .existence_foot {
    display: flex;
    justify-content: space-between;
    padding-left: 180px;
    padding-right: 180px;
    div{
       width: 218px;
       height: 106px;
      cursor: pointer;
      display: flex;
      flex-wrap: wrap;
    h1 {
      width: 218px;
      height: 66px;
      font-size: 30px;
      line-height: 36px;
    }
    div {
      width: 218px;
      height: 80px;
      align-self: end;
       border-bottom: 3px solid $color_white;
    }
    .active {
      border-bottom: 3px solid $bg_color_green;
    }
    }
    margin-bottom: 40px;
  }
}
</style>
