<template>
  <div>
     <div class="advantagebox_top"><slot name="top"></slot></div>
     <div class="advantagebox_foot">
        <slot name="foot"></slot>
     </div>
  </div>
</template>

<script>
export default ({
  name: 'AdvantageBox'
})
</script>

<style lang="scss" scoped>

</style>
