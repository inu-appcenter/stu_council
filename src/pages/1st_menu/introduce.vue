<template>
  <div id="introduce" class="container">
    <div class="body_container">
      <custom-navigation></custom-navigation>
      <div id="notice_contents">
        <div id="content_name">{{content_name}}</div>
        <div id="content_body">
          <div class="introduce__wrapper">
            <span class="introduce__wrapper-title-1">2019 인천대학교 제 36대 총학생회</span>
            <span class="introduce__wrapper-title-2">인천대의 새로운 움직임 New Bounce</span>

            <div class="introduce__wrapper-label">
              <span class="introduce__wrapper-title-3">총학생회</span>
              <label>
                <span class="introduce__wrapper-role">총학생회장</span>
                <span>최재봉</span>
              </label>
              <label>
                <span class="introduce__wrapper-role">부총학회장</span>
                <span>최동혁</span>
              </label>
              <label>
                <span class="introduce__wrapper-role">사무국장</span>
                <span>이현종</span>
              </label>
              <label>
                <span class="introduce__wrapper-role">대외협력국장</span>
                <span>박한길</span>
              </label>
              <label>
                <span class="introduce__wrapper-role">교육정책국장</span>
                <span>신희성</span>
              </label>
              <label>
                <span class="introduce__wrapper-role">문화복지국장</span>
                <span>최수민</span>
              </label>
              <label>
                <span class="introduce__wrapper-role">홍보국장</span>
                <span>심소연</span>
              </label>
              <label>
                <span class="introduce__wrapper-role">기획국장</span>
                <span>김혜민</span>
              </label>
              <label>
                <span class="introduce__wrapper-role">회계국장</span>
                <span>김유진</span>
              </label>
              <label>
                <span class="introduce__wrapper-role">체육국장</span>
                <span>오승현</span>
              </label>
              <label>
                <span class="introduce__wrapper-role">교육정책부장</span>
                <span>안지완</span>
              </label>
              <label>
                <span class="introduce__wrapper-role">사무부장</span>
                <span>김보미</span>
              </label>
              <label>
                <span class="introduce__wrapper-role">홍보부장</span>
                <span>이승택</span>
              </label>
              <label>
                <span class="introduce__wrapper-role">운영차장</span>
                <span>이슬기</span>
              </label>
              <label>
                <span class="introduce__wrapper-role">운영차장</span>
                <span>이시헌</span>
              </label>
              <label>
                <span class="introduce__wrapper-role">운영차장</span>
                <span>이지민</span>
              </label>
              <label>
                <span class="introduce__wrapper-role">운영차장</span>
                <span>장민혁</span>
              </label>
              <label>
                <span class="introduce__wrapper-role">운영차장</span>
                <span>정은채</span>
              </label>
              <label>
                <span class="introduce__wrapper-role">운영차장</span>
                <span>정지수</span>
              </label>
            </div>

            <div class="introduce__wrapper-label">
              <span class="introduce__wrapper-title-3">총운영위원회</span>
              <label>
                <span class="introduce__wrapper-role">총학생회장</span>
                <span>최재봉</span>
              </label>
              <label>
                <span class="introduce__wrapper-role">부총학생회장</span>
                <span>최동혁</span>
              </label>
              <label>
                <span class="introduce__wrapper-role">경영대학 학생회장</span>
                <span>윤민석</span>
              </label>
              <label>
                <span class="introduce__wrapper-role">경제통상대학 학생회장</span>
                <span>지병준</span>
              </label>
              <label>
                <span class="introduce__wrapper-role">공과대학 학생회장</span>
                <span>백두진</span>
              </label>
              <label>
                <span class="introduce__wrapper-role">도시과학대학 학생회장</span>
                <span>황도영</span>
              </label>
              <label>
                <span class="introduce__wrapper-role">동북아국제통상학부 학생회장</span>
                <span>임채희</span>
              </label>
              <label>
                <span class="introduce__wrapper-role">동아리연합회 회장</span>
                <span>고경남</span>
              </label>
              <label>
                <span class="introduce__wrapper-role">법과대학 학생회장</span>
                <span>박충경</span>
              </label>
              <label>
                <span class="introduce__wrapper-role">사범대학 학생회장</span>
                <span>이환성</span>
              </label>
              <label>
                <span class="introduce__wrapper-role">사회과학대학 학생회장</span>
                <span>이영헌</span>
              </label>
              <label>
                <span class="introduce__wrapper-role">생명과학기술대학 부학생회장</span>
                <span>구희성</span>
              </label>
              <label>
                <span class="introduce__wrapper-role">야간강좌 학생회장</span>
                <span>진용택</span>
              </label>
              <label>
                <span class="introduce__wrapper-role">예술체육대학 학생회장</span>
                <span>조용훈</span>
              </label>
              <label>
                <span class="introduce__wrapper-role">인문대학 학생회장</span>
                <span>윤승호</span>
              </label>
              <label>
                <span class="introduce__wrapper-role">자연과학대학 학생회장</span>
                <span>김지원</span>
              </label>
              <label>
                <span class="introduce__wrapper-role">정보기술대학 학생회장</span>
                <span>강수미</span>
              </label>
            </div>

            <div class="introduce__wrapper-label">
              <span class="introduce__wrapper-title-3">학생복지위원회</span>
              <label>
                <span class="introduce__wrapper-role">학생복지위원회 위원장</span>
                <span>민태홍</span>
              </label>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#introduce.container {
  padding: 90px 128px;
}

.body_container {
  display: flex;
  width: 100%;
}

#notice_contents {
  margin-left: 7%;
  width: 100%;
}

#content_name {
  width: 250px;
  height: 34px;
  font-size: 23px;
  font-weight: bold;
  color: #003e8f;
}

#content_body {
  margin-top: 7px;
  width: 100%;
  background-color: #ffffff;
  border-top: 3px solid #000000;
  border-bottom: 3px solid #000000;
}
</style>


<script>
import customNavigation from '@/pages/1st_menu/custom_navigation'

export default {
  name: 'introduce',

  components: {
        customNavigation,
    },

  data: () => ({
    content_name: '총학생회 소개',
    }),

}
</script>

