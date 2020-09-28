<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  #app{
    font-family: 'Mali', cursive;
    background-color: antiquewhite;
    background-image: url('https://i.pinimg.com/originals/df/02/d8/df02d8b746196732b9da293a65f13bd8.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    background-attachment: fixed;
    height :100vh;
  }
</style>
