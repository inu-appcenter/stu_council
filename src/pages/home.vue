<template>
  <div id="home">
    <div class = "home-top-section">
      <div class = "home-top-img container">
        <img class = "home-main-pic" src="../assets/main.png"/>
      </div>
      <div class = "home-top-text">
      </div>
    </div>

    <div class = "home-middle-section">
      <div class="container">
        <div class = "info-section">
          <div class = "work-time">
            <span class = "wt-1">업무시간</span>
            <span class = "wt-2">오전 10시 ~ 오후 5시</span>
          </div>
          <div class = "line-block"/>
          <div class = "A-E-C">
            <p>Adress</p>
            <p>Email</p>
            <p>Call</p>
          </div>
          <div class = "A-E-C-Info">
            <p>인천대학교 17호관 206호</p>
            <p>36inunb@gmail.com</p>
            <p>032) 835 - 4400</p>
          </div>
        </div>

        <div class = "login-section">
          <afLogin v-if="this.$session.exists()"></afLogin>
          <bfLogin v-else></bfLogin>
        </div>
      </div>
    </div>
    
    <div class = "home-bottom-section">
      <div class="bottom-container container">  
        <div class = "facebook-block">
          <a href="https://www.facebook.com/inuchong/"><img src="../assets/총학 페이스북.png"/></a>
        </div>
        <div class = "padding-block"/>

        <div class = "Every-Kakao-block">
          <div class = "Every-block">
            <a href="https://inu.everytime.kr/416066"><img src="../assets/에타.png"/></a>
          </div>
          <div class = "Kakao-block">
            <a href="http://pf.kakao.com/_AStxoxl"><img src="../assets/총학 플러스친구.png"/></a>
          </div>
        </div>
        
        <div class = "padding-block"/>

        <div class = "Insta-Ad-block">
          <div class = "Insta-block">
            <a href="https://www.instagram.com/36inu_bounce/"><img src="../assets/총학 인스타.png"/></a>
          </div>
          <div class = "Ad-block">
            <a href="https://inu-appcenter.firebaseapp.com/"><img src="../assets/앱센터.png"/></a>
          </div>
        </div>
      
      </div>
    </div>
      <router-view></router-view>
    </div>
</template>

<script>
import bfLogin from '@/components/home_bf_login'
import afLogin from '@/components/home_af_login'

export default {
  name: 'home',

  created () {

  },

  methods: {

  },

  components: {
    bfLogin,
    afLogin
  }

}

</script>


