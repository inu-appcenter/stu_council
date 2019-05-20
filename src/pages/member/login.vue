<template>
  <div id="login">
    <input v-on:keyup.enter="bt_listener()" type="text" v-model="id" placeholder="학번">
    <input v-on:keyup.enter="bt_listener()" type="password" v-model="password" placeholder="비밀번호">
    <input @click="bt_listener()" type="submit" value="로그인">
    <p>{{token}}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "login",

  created(){

  },

  data: function() {
    return{
      id: '',
      password: '',
      password_error : 'password',
      certification_error : 'certification',
      token: '',
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
          axios.post('http://117.16.231.66:1337/signIn',
          {id: self.id, passwd: self.password})
          .then(function(response) {
              
            
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
  },

  computed: {

  },
}
</script>
