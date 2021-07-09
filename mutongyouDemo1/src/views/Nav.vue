<template>
  <div class="Nav">
   <NavBar>
    <div slot="left">
      <div class="nav-left-box">
      <img src="../assets/img/login-head.png" alt="牧童游">
      <div class="Title">{{title}}</div>
      </div>
    </div>
    <div slot="right">
      <div class="nav-right-box">
        <a href="#" v-for="(item, index) in items" :class="{'active':index==0}" :key="item" @click="HighLight($event)">{{item}}</a>
      </div>
    </div>
   </NavBar>
  </div>
</template>

<script>
import NavBar from '../components/common/NavBar'

export default ({
  name: 'Nav',
  data (event) {
    return {
      title: '牧童游科技',
      items: ['首页', '产品服务', '客户案例', '关于我们', '加入我们']
    }
  },
  methods: {
    HighLight () {
      let RightBox = document.querySelector('.nav-right-box')
      for (let j = 0; j < RightBox.children.length; j++) {
        RightBox.children[j].className = ''
      }
      event.currentTarget.className = 'active'
    }
  },
  components: {
    NavBar
  }
})
</script>

<style lang="scss">
.nav-left-box{
  display: flex;
  img {
    width: 40px;
    height: 40px;
  }
  .Title {
     margin: 12px 5px;
     line-height: 16px;
  }
}
.nav-right-box {
  display: flex;
  flex-direction: row;
  a {
    margin: 0 10px;
    height: 16px;
    line-height: 16px;
      &:hover {
      color: #00AE7D;
    }
  }
  .active {
    color: #00AE7D;
  }
}

</style>
