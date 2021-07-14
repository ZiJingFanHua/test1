<template>
  <div class="user">
    <div class="user_top">
      <div class="user_title">
      <div class="user_logo"><img :src="user_logo" alt=""></div>
      <h1 class="user_name">{{user_name}}</h1>
      <div class="user_local"><img src="../../assets/img/case/icon-address.png" alt=""></div>
      <p class="user_local_message">{{user_local_message}}</p>
    </div>
     <div class="tags">
       <div v-for="tag in tags" :key="tag">{{tag}}</div>
     </div>
    </div>
    <div class="user_message">{{user_message}}</div>
  </div>
</template>

<script>
export default ({
  name: 'User',
  props: {
    user_logo: {
      type: String
    },
    user_name: {
      type: String
    },
    user_local_message: {
      type: String
    },
    tags: {
      type: Array
    },
    user_message: {
      type: String
    }
  }
})
</script>

<style lang="scss" scoped>
.user {
  color: #222223;
  margin: 115px 120px 0 120px;
  .user_top {
    .user_title {
      display: flex;
      justify-content: left;
      .user_logo {
        width: 48px;
        height: 48px;
        font-size: 0;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .user_name {
        font-size: 30px;
        line-height: 36px;
      }
      .user_local {
        width: 27px;
        height: 30px;
      }
      .user_local_message {
        font-size: 14px;
        line-height: 24px;
      }
    }
    .tags {
      display: flex;
      justify-content: left;
       div {
          width: 84px;
          height: 24px;
          border: 1px solid #5E5E5F;
          opacity: 1;
          border-radius: 4px;
          margin-right: 20px;
       }
    }
  }
  .user_message {
    width: 350px;
    margin-top: 80px;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    opacity: 1;
    text-align: left;
  }
}
</style>
