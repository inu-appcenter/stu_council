<template>
    <div id="find_pw" class="container">
        <div class="find_pw__wrapper">
            <span class="find_pw__wrapper-title">비밀번호 찾기</span>
            <label>
                <input placeholder="학번" class="find_pw__wrapper-input-1" type="text" v-model.trim="find_id">
                <span class="url">@inu.ac.kr</span><br>
            </label>
            <label>
                <input placeholder="이름" class="find_pw__wrapper-input-2" type="text" v-model.trim="find_name"><br>
            </label>
            <input class="find_pw__wrapper-btn" @click="bt_listener()" type="submit" value="임시비밀번호 전송">
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import { global } from '@/global'

export default {
    name: "findpw",

    mounted () {
        this.check_session(this.$session.exists())
    },

    computed: {
        ...mapState([
            'check_session',
        ]),
    },

    data: _=> ({
        find_id: '',
        find_name: '',
    }),

    methods: {
        bt_listener() {
            if(! this.find_id) {
                alert("학번을 입력해주세요.")
            }
            else if(! this.find_name) {
                alert("이름을 입력해주세요")
            }
            else {
                this.go_find()
            }
        },

        go_find() {
            let self = this
            let base = global.base
            axios.post(`${base}/account/tmpPasswd`,
            {
                id: self.find_id,
                name: self.find_name
            })
            .then(response =>{
                self.$router.push({name:'findsuccess', params: {id: self.find_id}})
                console.log(response)
            })
            .catch(error => {
                alert('정확한 학번과 이름을 입력해주세요.\n회원가입을 하지 않으셨다면 회원가입을 해주세요.')
            })
        }
    },
}
</script>

<style>

</style>
