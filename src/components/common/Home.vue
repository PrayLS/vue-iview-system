<template>
  <div class="home-wrapper">
    <iHeader/>
    <iSidebar/>
  </div>
</template>
<script>
import Header from './Header'
import Sidebar from './Sidebar'
export default {
  data() {
    return {
      
    }
  },
  components: {
    iHeader: Header,
    iSidebar: Sidebar
  }
}
</script>
<style lang="less" scoped>
  
</style>