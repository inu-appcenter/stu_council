<template>
  <div id="home">
    <div class = "home-top-section">
      <div class = "home-top-img container">
        <img class = "home-main-pic" src="http://via.placeholder.com/1440x560?text="/>
      </div>
      <div class = "home-top-text">
      </div>
    </div>

    <div class = "home-middle-section">
      <div class="container">
        <div class = "info-section">
          <div class = "work-time">
            <span class = "wt-1">업무시간</span>
            <span class = "wt-2">오전 10시</span>
            <span class = "wt-3">~</span>
            <span class = "wt-4">오후 5시</span>
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
        </div>
      </div>
    </div>
    
    <div class = "home-bottom-section">
      <div class="bottom-container container">  
        <div class = "facebook-block"/>
        
        <div class = "padding-block"/>

        <div class = "Every-Kakao-block">
          <div class = "Every-block">
            <div class="block-image">
              <!-- <img src="http://via.placeholder.com/385x229"/> -->
            </div>
            <div class="block-text">
              <!-- <p>every-block</p> -->
            </div>
          </div>
          <div class = "Kakao-block">
          </div>
        </div>
        
        <div class = "padding-block"/>

        <div class = "Insta-Ad-block">
          <div class = "Insta-block">
          </div>
          <div class = "Ad-block">
          </div>
        </div>
      
      </div>
    </div>
      <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'home',

  created () {

  },

  methods: {

  },

}
</script>


