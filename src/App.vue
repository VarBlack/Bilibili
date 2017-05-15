
<template>
  <div id="app">
  	<head-view></head-view>
    <section class="content">
      <router-view></router-view>
    </section>
    
    <foot-view></foot-view>
  </div>
</template>

<script>
import Head from '@/components/header'
import Foot from '@/components/footer'
export default {
  name: 'app',
  components:{
    'head-view':Head,
    'foot-view':Foot
  },
  mounted(){
    // console.log(123)

  }
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
