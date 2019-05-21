<template>
  <div id="headercom">
    <div class="home_logo">
      <router-link to="/">home</router-link>
      <router-link to="/signup" v-if="check_login">회원가입</router-link>
      <router-link to="/mypage" v-else>마이페이지</router-link>
      <router-link to="/login" v-if="check_login">로그인</router-link>
      <router-link to="/logout" v-else>로그아웃</router-link>

    </div>
    <div class="menubar">
      <li><router-link to="/introduce">총학생회</router-link>
        <ul>
          <li><router-link to="/introduce">총학생회 소개</router-link></li>
          <li><router-link to="/location">총학생회 지도</router-link></li>
        </ul>
      </li>
      <li><router-link to="/petition">소통창구</router-link>
        <ul>
          <li><router-link to="/petition">학생청원</router-link></li>
          <li><router-link to="/board">게시판</router-link></li>
        </ul>
      </li>
      <li><router-link to="/conference">자료실</router-link>
        <ul>
          <li><router-link to="/conference">회의보고</router-link></li>
          <li><router-link to="/financial">재정보고</router-link></li>
          <li><router-link to="/formdoc">서식자료실</router-link></li>
        </ul>
      </li>
      <li><router-link to="/rental">학생복지</router-link>
        <ul>
          <li><router-link to="/rental">물품대여</router-link></li>
          <li><router-link to="/bus">통학버스 및 귀향버스</router-link></li>
        </ul>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headercom',

  created() {
    this.check_session()
  },


  data: function() {
    return {
      check_login: true,
    }
  },

  methods: {
    check_session() {
      if(this.$session.exists()) {
        this.check_login = false
      }
    }

  },

  computed: {

  },

  

}
</script>


