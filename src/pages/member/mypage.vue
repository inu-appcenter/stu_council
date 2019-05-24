<template>
  <div id="mypage">
    <div class="update_wrapper">
      <span class="update_wrapper-tile">개인정보수정</span>
      <label>
        <span>학번</span>
        <input class="update__wrapper-input" type="text" v-model.trim="update_id" disabled><br>
      </label>
      <label>
        <span>현재 비밀번호</span>
        <input class="update__wrapper-input" type="password" v-model.trim="sign_password"><br>
      </label>
      <label>
        <span>변경 비밀번호</span>
        <input class="update__wrapper-input" type="password" v-model.trim="update_password"><br>
      </label>
      <label>
        <span>비밀번호 확인</span>
        <input class="update__wrapper-input" type="password" v-model.trim="update_check_password"><br>
      </label>
      <label>
        <span>이름</span>
        <input class="update__wrapper-input" type="text" v-model.trim="update_name"><br>
      </label>
      <label>
        <span>핸드폰</span>
        <input class="update__wrapper-input" type="text" @keypress="isNum()" v-model.trim="update_phone"><br>
      </label>
      <label>
        <span>학과</span>
        <select class="select-css" v-model="update_major">
          <option value="정보통신공학과">정보통신공학과</option>
          <option value="">-----</option>
        </select><br>
      </label>
      <input class="update__wrapper-btn" @click="bt_listener()" type="submit" value="수정하기">
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import { global } from '@/global'

export default {
  name: 'mypage',

  computed: {
    ...mapState([
      'fail_access',
      // 'get_user_info',
    ]),
  },

  mounted() {
    this.fail_access(! this.$session.exists())
    this.bring_information()
    // this.get_user_info()
  },

  data: _=> ({
    update_id: '',
    sign_password: '',
    update_password: '',
    update_check_password: '',
    update_name: '',
    update_phone: '',
    update_major: '',
    update_agree: '',
    pw: '',
    num: '',
    eng: '',
    spe: '',
  }),

  methods: {
    isNum () {
      if (event.keyCode < 48 || event.keyCode > 57) {
        event.returnValue = false
        alert('휴대폰 번호는 숫자 11자리만 입력해주세요.')
      }
    },

    bt_listener () {
      let self = this
      self.pw = self.update_password
      self.num = self.pw.search(/[0-9]/g)
      self.eng = self.pw.search(/[a-z]/ig)
      self.spe = self.pw.search(/[!@#$%^&*?_~]/gi)

      if(! self.sign_password) {
        alert('비밀번호를 입력해주세요.')
      }
      else if(! self.update_name) {
        alert('이름을 입력해주세요.')
      }
      else if(! self.update_phone) {
        alert('휴대폰 번호를 입력해주세요.')
      }
      else if(self.update_phone.length != 11) {
        alert('휴대폰 번호는 11자리로 입력해주세요.')
      }
       else if(! self.update_major) {
        alert('학과를 선택해주세요.')
      }
      else if(self.update_password.length >0) {
        if(self.pw.search(/\s/)!=-1) {
          alert("비밀번호는 공백없이 입력해주세요.")
        }
        else if(self.update_password.length < 6 || self.update_password.length > 14) {
          alert('비밀번호는 6~14자로 입력해주세요.\n비밀번호 수정을 원하지 않는다면 빈칸으로 남겨주세요.')
        }
        else if(self.update_password != self.update_check_password) {
          alert('두 비밀번호가 동일해야합니다.')
        }
        else if(self.num<0||self.eng<0||self.spe<0) {
          alert("영문, 숫자, 특수문자를 혼합하여 입력해주세요.\n특수문자는 !@#$%^&>_~만 사용가능합니다.")
        }
        else {
          self.go_update()
        }
      }
      else {
        self.go_update()
      }
    },

    go_update() {
      let self = this
      let base = global.base

      axios.post(`${base}/account/changeInfo`, {
        
      })
    },



    bring_information () {
      let self = this
      let base = global.base

      axios.post(`${base}/account/myPage`,
      {
        token: self.$session.get('member_token')
      })
      .then(response => {
        self.update_id = response.data.id
        self.update_name = response.data.name
        self.update_phone = response.data.tel
        self.update_major = response.data.major
      })
    }

  }

}
</script>
