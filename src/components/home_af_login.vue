<template>
    <div class= "home_mypage_section">
        <div class="mypage-top">
            <div class= "info-sec">
                <span class="info-id">{{get_id}} 님</span><br>
                <button class="info-logout" @click="_logout">로그아웃</button>
                <span>|</span>
                <button class="info-logout"><router-link to="/mypage">정보변경</router-link></button>
            </div>
        </div>
        
        <div class= "mypage-bottom">
                <router-link to="/petition">내가 지지한 청원</router-link>
        </div>
    </div>
</template>

<script>
export default {
  created() {
    
  },

  computed: {
    logout () {
      return this.$store.state.logout
    },
    
  },

  data: _ => ({
    get_id: '',
  }),

  methods: {
    _logout () {
      this.logout(this.$session)
    },
    
  }
}
</script>


<style>
    
</style>
