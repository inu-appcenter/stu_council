<template>
  <div id="login" class="container">
    <div class="login__wrapper">
      <span class="login__wrapper-title">로그인</span>
      <input class="login__wrapper-input" v-on:keyup.enter="bt_listener()" type="text" v-model.trim="id" placeholder="학번">
      <input class="login__wrapper-input" v-on:keyup.enter="bt_listener()" type="password" v-model.trim="password" placeholder="비밀번호">
      <input class="login__wrapper-btn" @click="bt_listener()" type="submit" value="로그인">
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import { global } from '@/global'

export default {
  name: 'login',

  mounted () {
    this.check_session(this.$session.exists())
  },

  computed: {
    ...mapState([
      'check_session',
    ]),
  },

  data: _ => ({
    id: '',
    password: '',
    password_error : 'password',
    certification_error : 'certification',
  }),

  methods: {
    bt_listener () {
      let self = this
      if (! self.id || ! self.password) {
        alert('학번과 패스워드를 입력해주세요.')
      }
      else {
        self.go_login(self.id, self.password)
      }
    },

    go_login (id, password) {
      let self = this
      let base = global.base

      axios.post(`${base}/login/signIn`,
      {id: self.id, passwd: self.password})
      .then(response => {
        self.store_token = response.data.token
        self.$session.start()
        self.$session.set('member_token', self.store_token)
        window.location.href = '/'  // 로그인 전으로 이동하면 더 좋을 것 같음, self.$router.go(-1)로 할 경우 로그아웃 후 바로 로그인 했을시 바로 로그아웃 되버리는 현상 존재
        console.log(response)
      })
      .catch(error => {
        if (error.response.data.ans == self.password_error) {
          alert('학번과 비밀번호를 확인해주세요.')
        }
        else if (error.response.data.ans == self.certification_error) {
          alert('인천대학교 포털 웹메일에서 인증 후 로그인 가능합니다.')
        }
        else {
          alert(`${error}`)
        }
        console.log(error.response)
      })
    },
  },
}
</script>
