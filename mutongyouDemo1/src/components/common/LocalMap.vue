<template>
  <div class="map">
   <iframe id="geoPage" width="100%" height="377px" frameborder=0 scrolling= "no" :src= "src"></iframe>
  </div>
</template>
<script>
export default({
  name: 'Map',
  data () {
    return {
      key: 'DHDBZ-STAKR-DG2WY-WYYQR-WDWBS-32FSS',
      appname: 'mutongyouexamp',
      coord_lat: '29.458886',
      coord_lng: '106.526694',
      title: '牧童游',
      addr: '重庆市巴南区红光大道73号',
      src: 'https://apis.map.qq.com/tools/poimarker?type=1'
    }
  },
  methods: {
    init () {
      this.src = this.src + '&init_view=0' + '&keyword=' + this.title + '&center=' + this.coord_lat + ',' + this.coord_lng + '&radius=1000&key=' + this.key + '&referer=' + this.appname
    }
  },
  mounted () {
    this.init()
  }
})
</script>

<style lang="scss" scoped>
.map {
  height: 377px;
}
</style>
