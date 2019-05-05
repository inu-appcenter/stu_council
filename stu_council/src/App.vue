<template>
  <div id="App">
    <headercom></headercom>
    <router-view></router-view>
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
    footercom
  },

}
</script>
