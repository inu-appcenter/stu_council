<template lang="pug">
  <div id="signup" class="container">
    <div class="signup__wrapper">
      <span class="signup__wrapper-title">회원가입</span>

      //- label(
      //-   v-for="info in user_info"
      //- )
      //-   span {{ info.title }}
      //-   input(
      //-     class="signup__wrapper-input"
      //-     :type="info.type"
      //-     v-model.trim="info.value"
      //-   )

      <label>
        <span>학번</span>
        <input class="signup__wrapper-input" type="text" v-model.trim="sign_id"><br>
      </label>
      <label style="height:48px">
        <span>비밀번호</span>
        <input style="font-size:14px" class="signup__wrapper-input" type="password" v-model.trim="sign_password" placeholder="영문,숫자,특수문자 혼합 6~14자"><br>
      </label>
      <label>
        <span>비밀번호 확인</span>
        <input class="signup__wrapper-input" style="font-size:14px" type="password" v-model.trim="sign_check_password"><br>
      </label>
      <label>
        <span>이름</span>
        <input class="signup__wrapper-input" type="text" v-model.trim="sign_name"><br>
      </label>
      <label>
        <span>핸드폰</span>
        <input class="signup__wrapper-input" type="tel" @keypress="isNum()" v-model.trim="sign_phone"><br>
      </label>
      <label>
        <span>학과</span>
        <select class="select-css" v-model="sign_major" >
          <option value="" disabled>---------학과선택---------</option>
          <option value="교직원">교직원</option>
          <option value="" disabled>------------ㄱ------------</option>
          <option value="건설환경공학부">건설환경공학부</option>
          <option value="경영학부">경영학부</option>
          <option value="경제학과">경제학과</option>
          <option value="공연예술학과">공연예술학과</option>
          <option value="국어교육과">국어교육과</option>
          <option value="국어국문학과">국어국문학과</option>
          <option value="글로벌물류학과">글로벌물류학과</option>
          <option value="기계공학과">기계공학과</option>
          <option value="" disabled>------------ㄷ------------</option>
          <option value="도시건축학부">도시건축학부</option>
          <option value="도시공학과">도시공학과</option>
          <option value="도시시설관리공학과">도시시설관리공학과</option>
          <option value="도시행정학과">도시행정학과</option>
          <option value="독어독문학과">독어독문학과</option>
          <option value="디자인학부">디자인학부</option>
          <option value="" disabled>------------ㄹ------------</option>
          <option value="러시아통상학과">러시아통상학과</option>
          <option value="" disabled>------------ㅁ------------</option>
          <option value="메카트로닉스공학과">메카트로닉스공학과</option>
          <option value="무역학부">무역학부</option>
          <option value="문헌정보학과">문헌정보학과</option>
          <option value="물리학과">물리학과</option>
          <option value="미국통상학과">미국통상학과</option>
          <option value="" disabled>------------ㅂ------------</option>
          <option value="바이오경영학과">바이오경영학과</option>
          <option value="법학부">법학부</option>
          <option value="불어불문학과">불어불문학과</option>
          <option value="" disabled>------------ㄹ------------</option>
          <option value="사회복지학과">사회복지학과</option>
          <option value="산업경영공학과">산업경영공학과</option>
          <option value="생명공학부">생명공학부</option>
          <option value="생명과학부">생명과학부</option>
          <option value="세무회계학과">세무회계학과</option>
          <option value="소비자·아동학과">소비자·아동학과</option>
          <option value="수학과">수학과</option>
          <option value="수학교육과">수학교육과</option>
          <option value="신문방송학과">신문방송학과</option>
          <option value="신소재공학과">신소재공학과</option>
          <option value="" disabled>------------ㅇ------------</option>
          <option value="안전공학과">안전공학과</option>
          <option value="에너지화학공학과">에너지화학공학과</option>
          <option value="역사교육과">역사교육과</option>
          <option value="영어교육과">영어교육과</option>
          <option value="영어영문학과">영어영문학과</option>
          <option value="운동건강과학부">운동건강과학부</option>
          <option value="유아교육과">유아교육과</option>
          <option value="영어교육과">영어교육과</option>
          <option value="영어영문학과">영어영문학과</option>
          <option value="유아교육과">유아교육과</option>
          <option value="윤리교육과">윤리교육과</option>
          <option value="융합시스템공학과">융합시스템공학과</option>
          <option value="일본통상학과">일본통상학과</option>
          <option value="일어교육과">일어교육과</option>
          <option value="일어일문학과">일어일문학과</option>
          <option value="임베디드시스템공학과">임베디드시스템공학과</option>
          <option value="일본통상학과">일본통상학과</option>
          <option value="" disabled>------------ㅈ------------</option>
          <option value="전기공학과">전기공학과</option>
          <option value="전자공학과">전자공학과</option>
          <option value="정보전자공학과">정보전자공학과</option>
          <option value="정보통신공학과">정보통신공학과</option>
          <option value="정치외교학과">정치외교학과</option>
          <option value="조형예술학부">조형예술학부</option>
          <option value="중국통상학과">중국통상학과</option>
          <option value="중어중국학과">중어중국학과</option>
          <option value="" disabled>------------ㅊ------------</option>
          <option value="창의인재개발학과">창의인재개발학과</option>
          <option value="체육교육과">체육교육과</option>
          <option value="체육학부">체육학부</option>
          <option value="" disabled>------------ㅋ------------</option>
          <option value="컴퓨터공학부">컴퓨터공학부</option>
          <option value="" disabled>------------ㅍ------------</option>
          <option value="패션산업학과">패션산업학과</option>
          <option value="" disabled>------------ㅎ------------</option>
          <option value="해양학과">해양학과</option>
          <option value="행정학과">행정학과</option>
          <option value="화학과">화학과</option>
        </select><br>
      </label>
      <div class="signup__wrapper-checkbox">
        <label class="signup__wrapper-checkbox_input" for="checkbox">
          <input id="checkbox" type="checkbox" v-model="sign_agree" value="agree">이용약관, 개인정보취급방침에 동의합니다.
          <span class="checkmark"></span>
        </label>
      </div>
      <input class="signup__wrapper-btn" @click="bt_listener" type="submit" value="회원가입">
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapGetters } from "vuex";
import { global } from "@/global";

export default {
  name: "signup",

  // created() {
  //   let getInputTypeTel = document.querySelectorAll('input[type="tel"]')

  //   getInputTypeTel.forEach(tel => {
  //     tel.addEventListener('keydown', (e) => {
  //       if (event.keyCode < 48 || event.keyCode > 57) {
  //         event.returnValue = false
  //         alert('휴대폰 번호는 숫자 11자리만 입력해주세요.')
  //       }
  //     })
  //   })
  // },

  mounted() {
    this.check_session(this.$session.exists());
  },

  computed: {
    ...mapState(["check_session", "user_info"])

    // ...mapGetters([
    //   'get_user_value',
    // ]),

    // user_info: {
    //   get () {
    //     return this.$store.state.user_info
    //   },
    //   set (value) {
    //     this.$store.commit('USER_INFO', value)
    //   }
    // },
  },

  data: _ => ({
    sign_id: "",
    sign_password: "",
    sign_check_password: "",
    sign_name: "",
    sign_phone: "",
    sign_major: "",
    sign_agree: "",
    check_sign_success: "success",
    check_sign_fail: "Id",
    pw: "",
    num: "",
    eng: "",
    spe: ""
  }),

  methods: {
    bt_listener() {
      let self = this;
      self.pw = self.sign_password;
      self.num = self.pw.search(/[0-9]/g);
      self.eng = self.pw.search(/[a-z]/gi);
      self.spe = self.pw.search(/[!@#$%^&*?_~]/gi);
      if (!self.sign_id) {
        alert("학번을 입력해주세요.");
      } else if (!self.sign_password) {
        alert("비밀번호를 입력해주세요.");
      } else if (!self.sign_name) {
        alert("이름을 입력해주세요.");
      } else if (!self.sign_phone) {
        alert("휴대폰 번호를 입력해주세요.");
      } else if (self.sign_phone.length != 11) {
        alert("휴대폰 번호는 11자리로 입력해주세요.");
      } else if (!self.sign_major) {
        alert("학과를 선택해주세요.");
      } else if (self.sign_password != self.sign_check_password) {
        alert("두 비밀번호가 동일해야합니다.");
      } else if (
        self.sign_password.length < 6 ||
        self.sign_password.length > 14
      ) {
        alert("비밀번호는 6~14자로 입력해주세요.");
      } else if (self.pw.search(/\s/) != -1) {
        alert("비밀번호는 공백없이 입력해주세요.");
      } else if (self.num < 0 || self.eng < 0 || self.spe < 0) {
        alert(
          "영문, 숫자, 특수문자를 혼합하여 입력해주세요.\n특수문자는 !@#$%^&>_~만 사용가능합니다."
        );
      } else if (!self.sign_agree) {
        alert("이용약관, 개인정보취급방침 동의에 체크해주세요.");
      } else {
        self.go_signup(
          self.sign_id,
          self.sign_password,
          self.sign_name,
          self.sign_phone,
          self.sign_major
        );
      }
    },

    isNum() {
      if (event.keyCode < 48 || event.keyCode > 57) {
        event.returnValue = false;
        alert("휴대폰 번호는 숫자 11자리만 입력해주세요.");
      }
    },

    go_signup(sign_id, sign_password, sign_name, sign_phone, sign_major) {
      let self = this;
      let base = global.base;

      axios
        .post(`${base}/login/signUp`, {
          id: sign_id,
          passwd: sign_password,
          tel: sign_phone,
          major: sign_major,
          name: sign_name
        })
        .then(response => {
          if (response.data.ans == self.check_sign_success) {
            self.$router.push({
              name: "signupsuccess",
              params: { id: self.sign_id }
            });
            console.log(response);
          }
        })
        .catch(error => {
          if (error.response.data.ans == self.check_sign_fail) {
            alert("이미 회원가입된 학번입니다.");
          } else {
            alert("error");
          }
          console.log(error.response);
        });
    }
  }
};
</script>
