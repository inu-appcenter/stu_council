<template>
    <div class = "home_login_section">
        <button class = "home_login_button"><router-link to="/login">로그인</router-link></button>
        <div class="find_and_join">
            <router-link to="/findpw">비밀번호 찾기</router-link><br/>
            <router-link to="/signup">회원가입</router-link>
        </div>
    </div>
</template>

<style>
    .home_login_section{
        display: inline-block;
    }
    .home_login_button{
        width: 183px;
        height: 70px;
        border-radius: 3px;
        background-color: #4a90e2;
        margin-top: 35px;
        font-size: 20px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: rgba(255, 255, 255, 0.87);
    }
    .find_and_join{
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.64;
        letter-spacing: normal;
        text-align: center;
        color: #666666;
        padding-top: 10px;
    }
</style>
