<template>
  <div class= "listcards">
        <div v-for="card in cards" :key="card.url" class="card">
          <div><img :src="card.url" alt=""></div>
          <div class="title">{{card.title}}</div>
          <div v-for="sec in card.sec" :key="sec.adstitle" class="sec">
            <div>{{sec.title}}</div>
            <p>{{sec.message}}</p>
          </div>
        </div>
  </div>
</template>

<script >

export default ({
  name: 'cards',
  props: {
    cards: {
      type: Array
    }
  }
})
</script>

<style lang="scss" scoped>
  .listcards {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .card{
      box-shadow: 0px 20px 30px rgba(96, 98, 102, 0.05);
      margin-bottom: 90px;
      width: 430px;
      &:hover{
      transform:scale(1.2);
      transition-duration:.08s;
      }
        img {
          width: 60px;
          height: 60px;
        }
        .title {
          margin: 20px 0 40px 0;
          font-size: 30px;
          line-height: 36px;
          font-weight: 900px;
        }
        .sec {
          width: 280px;
          text-align: left;
          margin-left: 50px;
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
</style>
