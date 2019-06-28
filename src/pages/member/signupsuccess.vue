<template>
  <div id="signupsuccess" class="container">
    <div class="signupsuccess__wrapper">
      <span class="signupsuccess__wrapper-title">회원가입이 완료되었습니다</span>
      <span class="signupsuccess__wrapper_content-1">{{ userId }}@inu.ac.kr로</span>
      <br>
      <span class="signupsuccess__wrapper_content-2">임시비밀번호가 발송되었습니다</span>
      <br>
      <button>
        <a href="http://portal.inu.ac.kr/enview/" target="blank">인천대학교 포털사이트</a>
      </button>
      <span class="signupsuccess__wrapper-content-2">메일 인증후 로그인이 가능합니다</span>
      <button>
        <router-link to="/">메인으로</router-link>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "signupsuccess",

  computed: {
    ...mapState(["check_session"]),

    userId() {
      return this.$route.params.id;
    }
  },

  mounted() {
    this.check_session(this.$session.exists());
  }
};
</script>
