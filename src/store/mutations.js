// 여기서 내보낸 mutations들을 index.js 에서 선언하고 전역으로 씁니다
// (다른것들 getters, state, actions 모두 동일합니다!)

export default {

  USER_INFO: value => {
    for (let info in state.user_info) {
      info.value = value
    }
  },

}
