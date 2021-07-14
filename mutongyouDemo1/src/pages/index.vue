<template>
  <div class="body">
    <Nav :num='0'></Nav>

    <MovePicture></MovePicture>

    <Duty></Duty>

    <Existence></Existence>

    <Advantage></Advantage>

    <Number></Number>
    <div class="store_cards">
      <Title :title = "title[0].ltitle" :message= "title[0].tmessage"></Title>
      <div class="card_carouse">
        <div class="card_list">
        <StoreCard v-for="(card, index) in cardsmessage" :key="card.store_logo" :store_logo= "cardsmessage[index].store_logo" :store_img = "cardsmessage[index].store_img" :store_message= 'cardsmessage[index].store_message'></StoreCard>
        <StoreCard v-for="(card, index) in cardsmessage" :key="card.store_img" :store_logo= "cardsmessage[index].store_logo" :store_img = "cardsmessage[index].store_img" :store_message= 'cardsmessage[index].store_message'></StoreCard>
        <StoreCard v-for="(card, index) in cardsmessage" :key="card.store_logo+index" :store_logo= "cardsmessage[index].store_logo" :store_img = "cardsmessage[index].store_img" :store_message= 'cardsmessage[index].store_message'></StoreCard>
       </div>
      </div>
    </div>
    <Friends></Friends>

    <Cooperation></Cooperation>

    <Foot></Foot>
  </div>
</template>

<script>
import Nav from '../views/Nav'
import MovePicture from '../views/MovePicture'
import Foot from '../views/Foot'
import Cooperation from '../views/Cooperation1'
import Friends from '../views/Friends'
import Duty from '../views/Duty'
import Number from '../views/Number'
import Existence from '../views/Existence'
import Merchant from '../views/Merchant'
import Advantage from '../views/Advantage'
import Title from '../components/common/Title'
import StoreCard from '../views/StoreCard'
export default ({
  name: 'index',
  components: {
    Nav,
    MovePicture,
    Foot,
    Cooperation,
    Friends,
    Duty,
    Number,
    Existence,
    Merchant,
    Advantage,
    Title,
    StoreCard
  },
  data () {
    return {
      title: [{ltitle: '这些掌柜都在牧童游', tmessage: '- 资深掌柜都在选择牧童游 -'}],
      left: 0,
      timer: '',
      cardsmessage: [{store_logo: require('../assets/img/index/store-logo1.png'),
        store_img: require('../assets/img/index/store-img1.png'),
        store_message: '派驻专业文创团队，挖掘当地文化，全套的文创改造升级，陆续推出纪录片、扎染、双生愿等活动；规划设计空间艺术改造，提升整个民宿的文化氛围。',
        order_change: 166,
        effect_change: 283},
      {store_logo: require('../assets/img/index/store-logo2.png'),
        store_img: require('../assets/img/index/store-img2.png'),
        store_message: '派驻专业文创团队，挖掘当地文化，全套的文创改造升级，陆续推出纪录片、扎染、双生愿等活动；规划设计空间艺术改造，提升整个民宿的文化氛围。',
        order_change: 198,
        effect_change: 190},
      {store_logo: require('../assets/img/index/store-logo3.png'),
        store_img: require('../assets/img/index/store-img3.png'),
        store_message: '派驻专业文创团队，挖掘当地文化，全套的文创改造升级，陆续推出纪录片、扎染、双生愿等活动；规划设计空间艺术改造，提升整个民宿的文化氛围。',
        order_change: 130,
        effect_change: 272},
      {store_logo: require('../assets/img/index/store-logo4.png'),
        store_img: require('../assets/img/index/store-img4.png'),
        store_message: '派驻专业文创团队，挖掘当地文化，全套的文创改造升级，陆续推出纪录片、扎染、双生愿等活动；规划设计空间艺术改造，提升整个民宿的文化氛围。',
        order_change: 130,
        effect_change: 272}]
    }
  },
  methods: {
    changeleft () {
      this.timer = setInterval(() => {
        this.left = this.left - 1
        let list1 = document.querySelector('.card_list')
        list1.style.left = this.left + 'px'
        if (this.left === -2000) {
          this.left = 0
        }
      }, 40)
    },
    clearTimer () {
      clearInterval(this.timer)
    }
  },
  mounted () {
    this.changeleft()
  },
  beforeDestroy () {
    this.clearTimer()
  }
})
</script>

<style lang="scss">
@import url(../assets/css/common.css);
.body {
  // max-width: 1920px;
  width: 100%;
  overflow: hidden;
  // display: flex;
  flex-grow: 1;
  flex-basis: 1;
  .store_cards{
    width: 100%;
    height: 850px;
    .card_carouse {
    width: 6000px;
    position: relative;
    .card_list {
      position: absolute;
      left: 0;
      display: flex;
      justify-content: space-between;
    }
  }
  }
}
</style>
