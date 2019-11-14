import axios from "axios"
import router from "@/router"
import VueSession from "vue-session"
import { global } from "@/global"

const state = {
  check_session: e => {
    if (e) {
      alert("로그인 상태로 접근할 수 없는 페이지입니다.")
      router.push("/")
    }
  },

  fail_access: e => {
    if (e) {
      alert("로그인 하신 후 이용해주세요.")
      router.push("/login")
    }
  },

  logout(session) {
    let _confirm = confirm("로그아웃 하시겠습니까?")
    if (_confirm) {
      session.clear()
      session.destroy()
      router.push("/login")
      this.check_login = true
    }
  },
  check_admin() {
    if (this.$session.get("member_id") == "admin") {
      return true
    } else {
      return false
    }
  },
  modalState: true,
  imageFile: [],
  check_Modal: (modal, imgfile) => {
    state.modalState = modal
    state.imageFile = imgfile
  },

  // get_user_info() {
  //   let base = global.base

  //   axios.post(`${base}/login/myPage`, {
  //       token: this.$session.get('member_token')
  //     })
  //     .then(response => {
  //       let update_id = response.data.id
  //       let update_name = response.data.name
  //       let update_phone = response.data.tel
  //       let update_major = response.data.major
  //     })

  //   console.log(`ID: ${this.update_id}`)
  // },

  user_info: {
    id: {
      value: "",
      title: "학번",
      type: "text"
    },
    pw: {
      value: "",
      title: "비밀번호",
      type: "password"
    },
    pw_confirm: {
      value: "",
      title: "비밀번호 확인",
      type: "password"
    },
    name: {
      value: "",
      title: "이름",
      type: "text"
    },
    phone: {
      value: "",
      title: "핸드폰",
      type: "tel"
    }
  },

  footer_info: {
    top: [
      "인천광역시 연수구 아카데미로 119 17호관 206호",
      "Email: 36inunb@gmail.com",
      "Tel: 032) 835 - 4400"
    ],
    bottom: [
      "Copyright 인천대학교 앱센터 All rights Reserved",
      "제작: 인천대학교 앱센터",
      "기획: 인천대학교 제 36대 총학생회 뉴바운스"
    ]
  },

  footer_terms: {
    termsOfService: ["이용약관", "/"],
    privacyPolicy: [
      "개인정보처리방침",
      "http://www.inu.ac.kr/mbshome/mbs/inu/subview.do?id=inu_160300000000"
    ],
    optOutEmail: [
      "메일주소무단수집거부",
      "http://www.inu.ac.kr/mbshome/mbs/inu/subview.do?id=inu_170000000000"
    ]
  }
}

export default state
