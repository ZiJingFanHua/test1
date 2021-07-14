<template>
  <div class="title">
  <h1>{{title}}</h1>
  <p>{{message}}</p>
  </div>
</template>

<script>

export default ({
  name: 'Title',
  props: {
    title: {
      type: String,
      default: '没有标题'
    },
    message: {
      type: String,
      default: '没有详细信息'
    }
  }
})
</script>

<style lang="scss" scoped>
.title {
  @import '../../assets/css/common.scss';
  padding-top: 180px;
  h1 {
    @extend .font_title;
  }
  p {
    @extend .font_title_message;
    margin-bottom: 144px;
  }
}
</style>
