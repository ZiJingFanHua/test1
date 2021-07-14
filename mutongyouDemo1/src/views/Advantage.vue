<template>
  <div class="advantage">
    <AdvantageBox>
      <div slot="top">
        <h1>{{title}}</h1>
        <p>{{title_message}}</p>
      </div>
      <div slot="foot" class="advantage_foot">
        <div v-for="adv in advantages" :key="adv.url" class="ad_foot_box">
          <div><img :src="adv.url" alt=""></div>
          <div class="adstitle">{{adv.atitle}}</div>
          <div v-for="ads in adv.ads" :key="ads.adstitle" class="ads">
            <div>{{ads.adstitle}}</div>
            <p>{{ads.adsmess}}</p>
          </div>
        </div>
      </div>
    </AdvantageBox>
  </div>
</template>

<script>
import AdvantageBox from '../components/common/AdvantageBox'
export default ({
  name: 'Advantage',
  data () {
    return {
      title: '牧童游的优势',
      title_message: '- 因为专注 所以专业 -',
      advantages: [{url: require('../assets/img/index/icon-advantage1.png'),
        atitle: '功能优势',
        ads: [{adstitle: '一铺四展', adsmess: '住宿、餐饮、体验项目、特色商城；\n一个店铺全方位数字化您的景区。'},
          {adstitle: '店铺的品牌朋友圈', adsmess: '掌柜发圈，链接商品，提高内容转化。\n构建内容社交+新零售的全新经营模式。\n与用户互动交流，构建店铺IP私域品牌流量池，增强用户忠诚度。'},
          {adstitle: 'web系统+移动管理平台', adsmess: '订单管理，客人系统，营销管理不再发愁。'}]},
      {url: require('../assets/img/index/icon-advantage2.png'),
        atitle: '行业优势',
        ads: [{adstitle: '行业标杆', adsmess: '重庆市乡村旅游评级标准起草人、标准制定者；\n国家20个部委联合颁发认定的中国最具品牌影响力平台；\n乡村旅游协会副会长单位；\n乡村旅游宣传部部长单位；\n民宿产业协会副会长单位。'},
          {adstitle: '平台硬实力', adsmess: '30余名高校专家团队智库；\n40余项科技创新类荣誉，国家级荣誉4项，省部级荣誉16项；\n与8所高等学校深度合作。'}]},
      {url: require('../assets/img/index/icon-advantage3.png'),
        atitle: '服务优势',
        ads: [{adstitle: '服务保障', adsmess: '7*24小时客服在线解答问题，AI客服+人工客服双保障；\n专属服务团队——掌柜专属运营专员+中台运营团队支撑；\n腾讯、阿里巴巴、京东等著名互联网技术工程师保驾护航；\n多渠道平台互通，为您带来更大的产品曝光度；\n汇集诸多行业资深掌柜，为您带来经营金点子；定期为您发布行业资讯和专项政策。'}]},
      {url: require('../assets/img/index/icon-advantage4.png'),
        atitle: '产品优势',
        ads: [{adstitle: '卓越产品团队', adsmess: '产品团队耗时两年倾力打造，只为极致的用户体验感；\n平均每天一个新版本，一月一个大版本的超快更新频率。'},
          {adstitle: '产品可用性', adsmess: '全方位云服务+，携手阿里云、腾讯云共同为您保障数据安全；\n扫码即用，不用下载，快捷化满足您的服务需求；\n围绕乡村旅游市场定制化平台，具备高度的业务耦合性。'}]}
      ]
    }
  },
  components: {
    AdvantageBox
  }
})
</script>

<style lang="scss" scoped>
.advantage {
  text-align: center;
  padding-top: 180px;
  h1 {
  font-size: 40px;
  line-height: 50px;
  }
  p {
    font-size: 16px;
    line-height: 26px;
    color: #5E5E5F;
    margin-bottom: 120px;
  }
  .advantage_foot {
    display: flex;
    justify-content: space-around;
    .ad_foot_box{
      box-shadow: 0px 20px 30px rgba(96, 98, 102, 0.05);
      margin-bottom: 180px;
      &:hover{
      transform:scale(1.2);
      transition-duration:.08s;
      }
        img {
          width: 60px;
          height: 60px;
        }
        .adstitle {
          margin: 20px 0 40px 0;
          font-size: 30px;
          line-height: 36px;
          font-weight: 900px;
        }
        .ads {
          width: 280px;
          text-align: left;
          div {
            font-size: 16px;
            line-height: 26px;
            font-weight: 900;
            color: #222223;
          }

          p {
            font-size: 16px;
            line-height: 26px;
            color: #5E5E5F;
            margin-bottom: 30px;
            white-space: pre-line;
          }
       }
    }
  }
}
</style>
