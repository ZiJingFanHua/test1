<template>
  <div class="card_show" @click= "$emit('click')">
      <div class="card_img"><img :src="src" alt=""></div>
      <h1>{{title}}</h1>
      <slot name="address">
      </slot>
      <div class="tags">
        <div class="score">{{score}}</div>
        <div v-for="tag in tags" :key="tag.id" class="tag">{{tag.tagName}}</div>
      </div>
      <div class="money">
        <div class="now"><span>￥</span>{{money}}</div>
        <slot name="moneymessage"></slot>
      </div>
  </div>
</template>

<script >

export default({
  name: 'cardshow',
  props: {
    title: {
      type: String,
      default: '没有标题'
    },
    tags: {
      type: Array,
      default: function () {
        return ['']
      }
    },
    score: {
      type: Number,
      default: 5
    },
    money: {
      type: Number,
      default: 100
    },
    src: {
      type: String
    }
  }
})
</script>

<style lang="scss" scoped>
.card_show {
  margin: 20px 10px;
  text-align: left;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: 0.4;
  }
  .card_img {
    width: 277px;
    height: 208px;
    font: 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
    h1{
    display: -webkit-box;
    width: 221px;
    height: 50px;
    margin: 8px 0;
    font-size: 18px;
    color: #000000;
    overflow:hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    }
  .tags {
    display: flex;
    justify-content: left;
    margin-top: 7px;
    margin-bottom: 16px;
    .score {
      width: 33px;
      height: 20px;
      margin-right: 8px;
      background: #3FBFF0;
      font-size: 12px;
      line-height: 20px;
      font-weight: 500;
      text-align: center;
      color: #FFFFFF;
      border-radius: 6px;
    }
    .tag {
      width: 64px;
      height: 20px;
      margin-right: 8px;
      border: 1px solid #DCDCDD;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 500;
      color: #9E9E9F;
      text-align: center;
    }
  }
  .money {
    font-size: 16px;
    font-weight: bold;
    color: #00AE7D;
    display: flex;
    justify-content: left;
    .now{
      margin-right: 5px;
    span {
      font-size: 8px;
    }
    }
  }
}
</style>
