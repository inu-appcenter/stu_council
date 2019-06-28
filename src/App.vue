<template>
  <div id="app">
    <headercom></headercom>
    <div class="main">
      <router-view></router-view>
    </div>
    <sitelist></sitelist>
    <footercom></footercom>
  </div>
</template>

<script>
import headercom from "./components/headercom";
import footercom from "./components/footercom";
import sitelist from "./components/sitelist";

export default {
  name: "App",

  components: {
    headercom,
    footercom,
    sitelist
  },

  data: () => ({})
};
</script>

<style lang="scss">
</style>
