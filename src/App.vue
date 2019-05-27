<template>
  <div id="app">
    <headercom></headercom>
    <router-view></router-view>
    <!-- <footercom class="footer"></footercom> -->
  </div>
</template>

<style>
  .footer{
    position: absolute;
    bottom: 0;
  }
</style>


<script>
import headercom from './components/headercom'
import footercom from './components/footercom'

export default {
  name: 'App',

  components: {
    headercom,
    footercom,
  },

}
</script>

<style lang="scss">
</style>
