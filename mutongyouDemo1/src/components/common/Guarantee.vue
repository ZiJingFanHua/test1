<template>
  <div class="guarantee-main">
    <div class="guarantee-box" v-for="item in items" :key="item.src">
      <div><img :src="item.src" alt=""></div>
      <p>{{item.message1}}<strong>{{item.message2}}</strong>{{item.message3}}</p>
    </div>
  </div>
</template>

<script>

export default ({
  name: 'Guarantee',
  props: {
    items: {
      type: Array,
      default: () => {
        return ['']
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.guarantee-main {
  max-width: 1500px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 auto;
  .guarantee-box {
    width: 460px;
    padding: 24px 38px;
    border-radius: 30px;
    box-shadow: 0px 20px 30px rgba(96, 98, 102, 0.05);
    margin-bottom: 60px;
    // margin-left: 84px;
    &:hover {
    transform: scale(1.1);
    transition: 0.2s;
    }
    div {
      margin: 0 auto;
      width: 172px;
      height: 148px;
      font-size: 0;
      img {
        width: 100%;
        height: 100%;
      }
    }
    p {
      text-align: center;
      font-size: 16px;
      margin-bottom: 48px;
      white-space: pre-line;
    }
  }
}
</style>
