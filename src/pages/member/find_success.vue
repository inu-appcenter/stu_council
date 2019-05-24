<template>
    <div id="find_success">
        <span class="find_success__wrapper">비밀번호 찾기</span>
        <span class="find_success__wrapper_content">{{ userId }}로</span><br>
        <span class="find_success__wrapper_content">임시비밀번호가 발송되었습니다</span><br>
        <button><router-link to="/login">로그인하기</router-link></button>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'findsuccess',

    computed: {
    ...mapState([
      'check_session',
    ]),

        userId () {
        return this.$route.params.id
        },
    },

    mounted () {
        this.check_session(this.$session.exists())
    },

}
</script>

<style>

</style>
