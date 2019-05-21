import router from '@/router'

const state = {
  token: 'logout',

  check_session: e => {
    if (e) {
      alert('로그인 상태로 접근할 수 없는 페이지입니다.')
      router.push('/')
    }
  },

  footer_info: {
    top: [
      '인천광역시 연수구 아카데미로 119 17호관 206호',
      'Email : 36inunb@gmail.com',
      'Tel : 032) 835 - 4400',
    ],
    bottom: [
      'Copyright 인천대학교 앱센터 All rights Reserved',
      '제작 : 인천대학교 앱센터',
      '기획 :  인천대학교 제 36대 총학생회 뉴바운스',
    ],
  },

  footer_terms: {
    termsOfService: [
      '이용약관',
      '/'
    ],
    privacyPolicy: [
      '개인정보처리방침',
      'http://www.inu.ac.kr/mbshome/mbs/inu/subview.do?id=inu_160300000000'
    ],
    optOutEmail: [
      '메일주소무단수집거부',
      'http://www.inu.ac.kr/mbshome/mbs/inu/subview.do?id=inu_170000000000'
    ],
  }

}

export default state
