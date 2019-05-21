<template>
    <div id="signup">
            <h1>회원가입</h1>
            학번 <input type="text" v-model="sign_id"><br>
            비밀번호 <input type="password" v-model="sign_password"><br>
            비밀번호 확인<input type="password" v-model="sign_check_password"><br>
            이름 <input type="text" v-model="sign_name"><br>
            핸드폰 <input type="text" @keypress="isNum()" v-model="sign_phone"><br>
            학과 <select v-model="sign_major">
                <option value="정보통신공학과">정보통신공학과</option>
                <option value="">-----</option>
            </select><br>
            <input type="checkbox" v-model="sign_agree" value="agree">
            <label>이용약관, 개인정보취급방침에 동의합니다.</label>
            <input @click="bt_listener" type="submit" value="회원가입">
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'signup',

    created() {
        this.check_session()
    },

    data: function() {
        return {
            sign_id: '',
            sign_password: '',
            sign_check_password: '',
            sign_name: '',
            sign_phone: '',
            sign_major: '',
            sign_agree: '',
            check_sign_success: 'success',
            check_sign_fail: 'Id',
        }
    },

    methods: {
        check_session() {
            if(this.$session.exists()) {
            alert("로그인 상태로 접근할 수 없는 페이지입니다.")
            this.$router.push({name:'home'}) // 고쳤으면함
            }
        },

        bt_listener() {
            var self = this
            if(self.sign_id == '') {
                alert("학번을 입력해주세요.")
            }
            else if(self.sign_password == '') {
                alert("비밀번호를 입력해주세요.")
            }
            else if(self.sign_name == '') {
                alert("이름을 입력해주세요.")
            }
            else if(self.sign_phone == '') {
                alert("휴대폰 번호를 입력해주세요.")
            }
            else if(!(self.sign_phone.length == 11)) {
                alert("휴대폰 번호는 11자리로 입력해주세요.")
            }
            else if(self.sign_major == '') {
                alert("학과를 선택해주세요.")
            }
            else if(!(self.sign_password == self.sign_check_password)) {
                alert("두 비밀번호가 동일해야합니다.")
            }
            else if(self.sign_password.length < 6 || self.sign_password.length >14) {
                alert("비밀번호는 6~14자로 입력해주세요.")
            }
            else if(self.sign_agree == '') {
                alert("이용약관, 개인정보취급방침 동의에 체크해주세요.")
            }
            else {
                self.go_signup(self.sign_id, self.sign_password, self.sign_name, self.sign_phone, self.sign_major)
            }
        },

        isNum() {
            if(event.keyCode<48 || event.keyCode>57) {
                event.returnValue=false
                alert("휴대폰 번호는 숫자 11자리만 입력해주세요.")
            }
        },

        go_signup(sign_id, sign_password, sign_name, sign_phone, sign_major) {
            var self = this
            axios.post('http://117.16.231.66:7003/login/signUp',
            {
                id: self.sign_id,
                passwd: self.sign_password,
                tel: self.sign_phone,
                major: self.sign_major,
                name: self.sign_name
            })
            .then(function(response) {
                if(response.data.ans == self.check_sign_success) {
                    self.$router.push({name:'signupsuccess', params: {id: self.sign_id}})
                    console.log(response)
                }
            })
            .catch(function(error) {
                if(error.response.data.ans == self.check_sign_fail) {
                    alert("이미 회원가입된 학번입니다.")
                }
                else {
                    alert("error")
                }
                console.log(error.response)
            })            
        }

    },

}
</script>

<style>

</style>
