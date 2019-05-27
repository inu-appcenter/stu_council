<template>
  <div id="app">
    <headercom></headercom>
    <router-view></router-view>
<<<<<<< HEAD
    <!-- <footercom class="footer"></footercom> -->
=======
    <footercom></footercom>
>>>>>>> 1f7f75ca125a850098d9a1e75b1746aae1c69f31
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
