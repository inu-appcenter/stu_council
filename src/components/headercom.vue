<template>
  <div id="headercom">
    <div class="above_link">
      <router-link to="/login" v-if="check_login" class="above_first">로그인</router-link>
      <span v-else class="above_first" @click="_logout">로그아웃</span>
      <router-link to="/signup" v-if="check_login" class="above_second">회원가입</router-link>
      <router-link to="/mypage" v-else class="above_second">마이페이지</router-link>
    </div>
    <div class="container">
      <div class="below_link">
        <div class="home_logo">
          <router-link to="/">
            <img src="../assets/header_logo.png" />
          </router-link>
          <!--src/assets/header_logo.png-->
        </div>
        <div class="menubar">
          <li>
            <router-link to="/introduce">총학생회</router-link>
            <ul>
              <router-link to="/introduce">
                <li>총학생회 소개</li>
              </router-link>
              <router-link to="/location">
                <li>총학생회 지도</li>
              </router-link>
            </ul>
          </li>
          <li>
            <router-link to="/petition?boardKind=1&page=1">소통창구</router-link>
            <ul>
              <router-link to="/petition?boardKind=1&page=1">
                <li>학생청원</li>
              </router-link>
              <router-link to="/board?boardKind=2&page=1">
                <li>학생회 소식</li>
              </router-link>
            </ul>
          </li>
          <li>
            <router-link to="/conference?boardKind=3&page=1">활동보고</router-link>
            <ul>
              <router-link to="/conference?boardKind=3&page=1">
                <li>회의보고</li>
              </router-link>
              <router-link to="/financial?boardKind=4&page=1">
                <li>재정보고</li>
              </router-link>
              <router-link to="/formdoc?boardKind=5&page=1">
                <li>서식자료실</li>
              </router-link>
            </ul>
          </li>
          <li>
            <router-link to="/rental?boardKind=6&page=1">학생복지</router-link>
            <ul>
              <router-link to="/rental?boardKind=6&page=1">
                <li>물품대여</li>
              </router-link>
              <router-link to="/bus??boardKind=7&page=1">
                <li>통학버스 및 귀향버스</li>
              </router-link>
            </ul>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "headercom",

  data: _ => ({
    check_login: true
  }),

  computed: {
    logout() {
      return this.$store.state.logout;
    }
  },

  created() {
    this.check_session();
  },

  methods: {
    check_session() {
      if (this.$session.exists()) {
        this.check_login = false;
      }
    },

    _logout() {
      this.logout(this.$session);
    }
  }
};
</script>


