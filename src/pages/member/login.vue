<template>
  <div id="login">
    <input v-on:keyup.enter="bt_listener()" type="text" v-model="id" placeholder="학번">
    <input v-on:keyup.enter="bt_listener()" type="password" v-model="password" placeholder="비밀번호">
    <input @click="bt_listener()" type="submit" value="로그인">
  </div>
</template>

<script>
import axios from 'axios'
//import VueSession from 'vue-session'
export default {
  name: "login",

  created(){
    this.check_session()
  },

  data: function() {
    return{
      id: '',
      password: '',
      password_error : 'password',
      certification_error : 'certification',
    }
  },

  methods: {
      bt_listener(){
        var self = this
        if(self.id=='' || self.password=='') {
          alert("학번과 패스워드를 입력해주세요.")
        }
        else {
          self.go_login(self.id, self.password)
        }
      },

      go_login(id, password) {
        var self = this
          axios.post('http://117.16.231.66:7003/login/signIn',
          {id: self.id, passwd: self.password})
          .then(function(response) {
              self.store_token = response.data.token
              self.$session.start()
              self.$session.set('member_token', self.store_token)
              window.location.href ='/'  // 로그인 전으로 이동하면 더 좋을 것 같음, self.$router.go(-1)로 할 경우 로그아웃 후 바로 로그인 했을시 바로 로그아웃 되버리는 현상 존재
              console.log(response)
            })
            .catch(function(error) {
              if(error.response.data.ans == self.password_error) {
                alert("학번과 비밀번호를 확인해주세요.")
              }
              else if(error.response.data.ans = self.certification_error) {
                alert("인천대학교 포털 웹메일에서 인증 후 로그인 가능합니다.")  
              }
              else {
                alert("error")
              }
              console.log(error.response)
            })
          
      },

      check_session() {
        if(this.$session.exists()) {
          alert("로그인 상태로 접근할 수 없는 페이지입니다.")
          this.$router.push({name:'home'}) // 위와 마찬가지, signup.vue에도 똑같은 함수 존재
        }
      }
  },

  computed: {

  },
}
</script>
