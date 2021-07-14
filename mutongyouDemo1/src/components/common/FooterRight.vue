<template>
  <div class="footer_right">
    <div class="footer_right_top">
    <dl  v-for="message in messages" :key="message.service">
      <dt>{{message[0]}}</dt>
      <!-- // eslint-disable-next-line vue/valid-v-if -->
      <dd v-for="(item, index) in message" :key="item" v-if="index>0">
        {{item}}
      </dd>
    </dl>
    </div>
    <div class="footer_right_footer">
      <span>渝ICP备19011205号-1</span>
      <img src="../../assets/img/foot_police.png" alt="">
      <span>渝公网安备50010702502590号</span>
    </div>
  </div>
</template>

<script>

export default ({
  name: 'FooterRight',
  data () {
    return {
      messages: {service: ['产品服务', 'B端掌柜小程序', 'C端用户小程序', '掌柜管理入口'], abutme: ['关于我们', '产品服务', '公司简介', '招聘投递']}
    }
  }
})
</script>

<style lang="scss" scoped>
.footer_right {
  text-align: left;
  .footer_right_top {
    display: flex;
    justify-content: space-between;
    dl {
      margin-left: 90px;
      dt {
      font-weight:900;
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 40px;
      }
      dd {
      font-size: 16px;
      line-height: 21px;
      margin-bottom: 40px;
      }
    }
  }

  .footer_right_footer {
    margin-top: 108px;
    span {
      font-size: 14px;
      line-height: 24px;
    }
    img {
       width: 13px;
       height: 14px;
    }
  }
}
</style>
