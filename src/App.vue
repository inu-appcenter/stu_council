<template>
  <div id="app">
    <headercom></headercom>
    <router-view></router-view>
    <!-- <footercom class="footer"></footercom> -->
    <footercom></footercom>
  </div>
</template>

<script>
import headercom from './components/headercom'
import footercom from './components/footercom'

export default {
  name: 'App',

  components: {
    headercom,
    footercom,
  },

  data: () => ({
    }),

}
</script>

<style lang="scss">
</style>
