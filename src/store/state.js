import router from '@/router'

const state = {
  token: 'logout',

  check_session: e => {
    if (e) {
      alert('로그인 상태로 접근할 수 없는 페이지입니다.')
      router.push('/')
    }
  },

}

export default state
