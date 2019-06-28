<template>
  <div id="app">
    <headercom></headercom>
    <div class="main">
      <router-view></router-view>
    </div>
    <footercom></footercom>
  </div>
</template>

<script>
import headercom from "./components/headercom";
import footercom from "./components/footercom";

export default {
  name: "App",

  components: {
    headercom,
    footercom
  },

  data: () => ({})
};
</script>

<style lang="scss">
</style>
