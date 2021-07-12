<template>
  <div class="pictureShow">
  <div class="ps_message">
    <slot name="ps_left"></slot>
  </div>
  <div class="ps_picture">
    <div class="picture_top"><slot name="picture_top"></slot></div>
    <div class="picture_foot">
    <div class="picture_foot_left"><slot name="picture_foot_left"></slot></div>
    <div class="picture_foot_right"><slot name="picture_foot_right"></slot></div>
    </div>
  </div>
  </div>
</template>

<script>
export default({
  name: 'pictureShow'
})
</script>

<style lang="scss" scoped>
@import '../../assets/css/common.scss';
.pictureShow {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 726px;
  .ps_message{
    width: 726px;
    background-color: #FAFAFB;
  }
  .ps_picture{
    // width: 1187px;
   background-color: $bg_color_green;
  //  height: 100%;
  //  line-height: 0;
   flex: 1;
  .picture_top {
    width: 100%;
    height: 50%;
  }
  .picture_foot {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    .picture_foot_left {
      width: 50%;
      height: 100%;
    }
    .picture_foot_right {
      width: 50%;
      height: 100%;
    }
  }
   img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
