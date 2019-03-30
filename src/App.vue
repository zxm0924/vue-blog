<template>
  <div id="app">
      <!-- <Blog/> -->
    <!-- <Showblog/> -->
    <home/>
    <router-view></router-view>
  </div>
</template>

<script>
import Blog from './components/Bolg'
import Showblog from './components/Showblog'
import home from './components/home'
export default {
  name: 'App',
  components: {
    Blog,
    Showblog,
    home
  }
}
</script>

<style>
*{
    margin: 0px;
    padding: 0px;
}
body{
    margin:0 auto;
    width:800px;
}

@media screen and (min-width: 480px) {
    #app {
        width:480px;
    }
}
@media screen and (max-width: 960px) {
    #app {
        width:800px;
    }
}
</style>
