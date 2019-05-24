<template>
    <div id="find_pw">
        <span class="find_wrapper-title">비밀번호 찾기</span><br>
        <label>
            <input placeholder="학번" class="find__wrapper-input" type="text" v-model.trim="find_id">
            <span>@inu.ac.kr</span><br>
        </label>
        <label>
            <input placeholder="이름" class="find__wrapper-input" type="text" v-model.trim="find_name"><br>
        </label>
        <input class="find__wrapper-btn" @click="bt_listener()" type="submit" value="수정하기">
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
                alert('학번과 이름이 일치하지 않습니다.')
            })
        }
    },
}
</script>

<style>

</style>
