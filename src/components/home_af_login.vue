<template>
    <div class= "home_mypage_section">
        <div class="mypage-top">
            <div class= "grade-oval">
                <span class= "grade-text">15</span>
            </div>
            <div class= "info-sec">
                <div class= "info-top">
                    <div class="info-id">201503092님</div>
                    <button class="info-logout">로그아웃</button>
                </div>
                <div class= "info-bottom">
                    <span>개인정보 변경</span>
                    <span>|</span>
                    <span>비밀번호 변경</span>
                </div>
            </div>
        </div>
        
        <div class= "mypage-bottom">
            <div class= "my-content my-text-box">
                <span class="my-text">내가 쓴 글</span>
            </div>
            <div class= "my-support my-text-box">
                <span class="my-text">내가 지지한 청원</span>
            </div>
        </div>
    </div>
</template>

<style>
    .home_mypage_section{
        width: 100%;
    }

    .mypage-top{
        padding-left: 25px;
        padding-right: 27px;
        padding-top: 25px;
    }

    .grade-oval{
        width: 76px;
        height: 76px;
        background-color: #ffffff;
        border-radius: 50%;
        text-align: center;
        display: table;
        float: left;
    }
    .grade-text{
        /* font-family: NotoSansCJKkr; */
        font-size: 30px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: var(--brand-blue);
        display: table-cell;
        vertical-align: middle;
    }

    .info-sec{
        padding-left: 19px;
        float: left;
    }

    .info-id{
        font-size: 22px;
        font-weight: bold;
        font-stretch: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #111111;
        float: left;
    }

    .info-logout{
        width:67px;
        height: 26px;
        border-radius: 3px;
        border: solid 1px #979797;
        margin-left: 36px;
        float: left;
        text-align: center;
        padding: 0;
    }

    .info-bottom{
        display: inline-block;
        font-size: 15px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #333333;
        text-align:start;
        margin-top: 23px;
        float: left;
    }

    .mypage-bottom{
        margin-top: 30px;
        width:100%;
        display: inline-block;
    }

    .my-content{
       height: 52px;
       width: 49.9%;
       background-color: #4a90e2; 
       float: left;
    }

    .my-support{
        height: 52px;
        width: 49.9%;
        background-color: #4a90e2;
        float: right;
    }

    .my-text-box{
        display: table;
    }

    .my-text{
        text-align: center;
        display: table-cell;
        vertical-align: middle;
        font-size: 15px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #ffffff;
    }
</style>
