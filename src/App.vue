<template>
  <div id="app">
    <div v-if="modalState">
    <headercom></headercom>
    <div class="main">
      <router-view></router-view>
    </div>
    <sitelist></sitelist>
    <footercom></footercom>
  </div>
       <div v-else>
      
   <transition  name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container"> 
              <span class="img_bigarea">
                  <img v-bind:src="imageFile" @click="check_Modal(true)" title="이미지 크게보기" />
                </span>
        </div>
      </div>
    </div>
  </transition>

    </div>
  </div>
</template>

<script>
import headercom from "./components/headercom";
import footercom from "./components/footercom";
import sitelist from "./components/sitelist";
import { mapState } from 'vuex';

export default {
  name: "App",

  components: {
    headercom,
    footercom,
    sitelist
  },

computed:{
  ...mapState(["check_Modal"]),
   ...mapState(["modalState",'imageFile']),
},

  data: () => ({
  }),
}
</script>

<style lang="scss">
</style>
