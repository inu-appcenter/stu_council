<template lang="pug">
  <div id="signup" class="container">
    <div class="signup__wrapper">
      <span class="signup__wrapper-title">회원가입</span>

      //- label(
      //-   v-for="info in user_info"
      //- )
      //-   span {{ info.title }}
      //-   input(
      //-     class="signup__wrapper-input"
      //-     :type="info.type"
      //-     v-model.trim="info.value"
      //-   )

      <label>
        <span>학번</span>
        <input class="signup__wrapper-input" type="text" v-model.trim="sign_id"><br>
      </label>
      <label style="height:48px">
        <span>비밀번호</span>
        <input class="signup__wrapper-input" type="password" v-model.trim="sign_password" placeholder="영문,숫자,특수문자 혼합 6~14자"><br> 
      </label>
      <label>
        <span>비밀번호 확인</span>
        <input class="signup__wrapper-input" type="password" v-model.trim="sign_check_password"><br>
      </label>
      <label>
        <span>이름</span>
        <input class="signup__wrapper-input" type="text" v-model.trim="sign_name"><br>
      </label>
      <label>
        <span>핸드폰</span>
        <input class="signup__wrapper-input" type="tel" @keypress="isNum()" v-model.trim="sign_phone"><br>
      </label>
      <label>
        <span>학과</span>
        <select class="select-css" v-model="sign_major">
          <option value="정보통신공학과">정보통신공학과</option>
          <option value="">-----</option>
        </select><br>
      </label>
      <div class="signup__wrapper-checkbox">
        <label class="signup__wrapper-checkbox_input" for="checkbox">
          <input id="checkbox" type="checkbox" v-model="sign_agree" value="agree">이용약관, 개인정보취급방침에 동의합니다.
          <span class="checkmark"></span>
        </label>
      </div>
      <input class="signup__wrapper-btn" @click="bt_listener" type="submit" value="회원가입">
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapGetters } from 'vuex'
import { global } from '@/global'

export default {
  name: 'signup',

  // created() {
  //   let getInputTypeTel = document.querySelectorAll('input[type="tel"]')

  //   getInputTypeTel.forEach(tel => {
  //     tel.addEventListener('keydown', (e) => {
  //       if (event.keyCode < 48 || event.keyCode > 57) {
  //         event.returnValue = false
  //         alert('휴대폰 번호는 숫자 11자리만 입력해주세요.')
  //       }
  //     })
  //   })
  // },

  mounted() {
    this.check_session(this.$session.exists())
  },

  computed: {
    ...mapState([
      'check_session',
      'user_info',
    ]),

    // ...mapGetters([
    //   'get_user_value',
    // ]),

    // user_info: {
    //   get () {
    //     return this.$store.state.user_info
    //   },
    //   set (value) {
    //     this.$store.commit('USER_INFO', value)
    //   }
    // },
  },

  data: _ => ({
    sign_id: '',
    sign_password: '',
    sign_check_password: '',
    sign_name: '',
    sign_phone: '',
    sign_major: '',
    sign_agree: '',
    check_sign_success: 'success',
    check_sign_fail: 'Id',
    pw: '',
    num: '',
    eng: '',
    spe: '',
  }),

  methods: {
    bt_listener () {
      let self = this
      self.pw = self.sign_password
      self.num = self.pw.search(/[0-9]/g)
      self.eng = self.pw.search(/[a-z]/ig)
      self.spe = self.pw.search(/[!@#$%^&*?_~]/gi)
      if(! self.sign_id) {
        alert('학번을 입력해주세요.')
      }
      else if(! self.sign_password) {
        alert('비밀번호를 입력해주세요.')
      }
      else if(! self.sign_name) {
        alert('이름을 입력해주세요.')
      }
      else if(! self.sign_phone) {
        alert('휴대폰 번호를 입력해주세요.')
      }
      else if(self.sign_phone.length != 11) {
        alert('휴대폰 번호는 11자리로 입력해주세요.')
      }
      else if(! self.sign_major) {
        alert('학과를 선택해주세요.')
      }
      else if(self.sign_password != self.sign_check_password) {
        alert('두 비밀번호가 동일해야합니다.')
      }
      else if(self.sign_password.length < 6 || self.sign_password.length > 14) {
        alert('비밀번호는 6~14자로 입력해주세요.')
      }
      else if(self.pw.search(/\s/)!=-1) {
        alert("비밀번호는 공백없이 입력해주세요.")
      }
      else if(self.num<0||self.eng<0||self.spe<0) {
        alert("영문, 숫자, 특수문자를 혼합하여 입력해주세요.\n특수문자는 !@#$%^&>_~만 사용가능합니다.")
      }
      else if(! self.sign_agree) {
        alert('이용약관, 개인정보취급방침 동의에 체크해주세요.')
      }
      else {
        self.go_signup(self.sign_id, self.sign_password, self.sign_name, self.sign_phone, self.sign_major)
      }
    },

    isNum () {
      if (event.keyCode < 48 || event.keyCode > 57) {
        event.returnValue = false
        alert('휴대폰 번호는 숫자 11자리만 입력해주세요.')
      }
    },

    go_signup (sign_id, sign_password, sign_name, sign_phone, sign_major) {
      let self = this
      let base = global.base

      axios.post(`${base}/login/signUp`,
      {
        id: self.sign_id,
        passwd: self.sign_password,
        tel: self.sign_phone,
        major: self.sign_major,
        name: self.sign_name
      })
      .then(response => {
        if(response.data.ans == self.check_sign_success) {
          self.$router.push({name:'signupsuccess', params: {id: self.sign_id}})
          console.log(response)
        }
      })
      .catch(error => {
        if(error.response.data.ans == self.check_sign_fail) {
          alert('이미 회원가입된 학번입니다.')
        }
        else {
          alert('error')
        }
        console.log(error.response)
      })
    },
  },

}
</script>
