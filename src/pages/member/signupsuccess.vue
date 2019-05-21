<template>
    <div id="signupsuccess">
        <h1>회원가입이 완료되었습니다</h1>
        <h2>{{userId}}@inu.ac.kr로</h2>
        <h3>임시비밀번호가 발송되었습니다.</h3>
        <button><a href="https://portal.inu.ac.kr">인천대학교 포털사이트</a></button>
        <h3>메일 인증후 로그인이 가능합니다.</h3>
        <button><router-link to="/">home</router-link></button>
    </div>
</template>

<script>
export default {
    name: 'signupsuccess',

    computed: {
        userId() {
            return this.$route.params.id
        }
    },

    created() {
        this.check_session()       
    },

    data: function() {
        return {
            
        }
    },
    methods: {
        check_session() {
            if(this.$session.exists()) {
            alert("로그인 상태로 접근할 수 없는 페이지입니다.")
            this.$router.push({name:'home'}) // 위와 마찬가지, signup.vue에도 똑같은 함수 존재
            }
        }   
    }

}
</script>

<style>

</style>
