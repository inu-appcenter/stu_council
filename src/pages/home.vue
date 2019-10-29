<template>
  <div id="home">
    <div class="home-top-section">
      <div class="home-top-img">
        <img class="home-main-pic" src="../assets/main.png" />
        <img
          class="temp_img"
          src="../assets/temp_img.png"
          onclick="window.open('http://vote.inu.ac.kr/')"
        />
      </div>
    </div>

    <div class="home-middle-section">
      <div class="container">
        <div class="info-section">
          <div class="work-time">
            <span class="wt-1">업무시간</span>
            <span class="wt-2">오전 10시 ~ 오후 5시</span>
          </div>
          <div class="line-block" />
          <div class="A-E-C">
            <p>Adress</p>
            <p>Email</p>
            <p>Call</p>
          </div>
          <div class="A-E-C-Info">
            <p>인천대학교 17호관 206호</p>
            <p>36inunb@gmail.com</p>
            <p>032) 835 - 4400</p>
          </div>
        </div>

        <div class="login-section">
          <afLogin v-if="this.$session.exists()"></afLogin>
          <bfLogin v-else></bfLogin>
        </div>
      </div>
    </div>

    <div class="home-bottom-section">
      <div class="bottom-container">
        <div class="facebook-block" onclick="window.open('https://www.facebook.com/inuchong/')"></div>
        <div class="padding-block" />

        <div class="Every-Kakao-block">
          <div class="Every-block" onclick="window.open('https://inu.everytime.kr/416066')"></div>
          <div class="Kakao-block" onclick="window.open('http://pf.kakao.com/_AStxoxl')"></div>
        </div>

        <div class="padding-block" />

        <div class="Insta-Ad-block">
          <div class="Insta-block" onclick="window.open('https://www.instagram.com/36inu_bounce/')"></div>
          <div class="Ad-block" onclick="window.open('https://inu-appcenter.firebaseapp.com/')"></div>
        </div>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>
<style>
.temp_img {
  width: 467px;
  height: 80px;
  cursor: pointer;
}
</style>
<script>
import bfLogin from "@/components/home_bf_login";
import afLogin from "@/components/home_af_login";

export default {
  name: "home",

  created() {},

  methods: {},

  components: {
    bfLogin,
    afLogin
  }
};
</script>


