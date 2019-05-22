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
      <input class="update__wrapper-btn" type="submit" value="수정하기">
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'

export default {
  name: 'mypage',

  computed: {
    ...mapState([
      'fail_access',
    ]),   
  },

  created() {
    this.fail_access(! this.$session.getAll())
    this.bring_information()
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
  }),

  methods: {
    isNum () {
      if(event.keyCode < 48 || event.keyCode > 57) {
        event.returnValue = false
        alert('휴대폰 번호는 숫자 11자리만 입력해주세요.')
      }
    },

    bt_listener() {
      var self = this
      
    },

    bring_information() {
      var self = this
      axios.post('http://117.16.231.66:7003/login/myPage',
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
