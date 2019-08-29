<template>
  <div id="mypage" class="container">
    <div class="update__wrapper">
      <span class="update__wrapper-title">개인정보수정</span>
      <label>
        <span>학번</span>
        <input class="update__wrapper-input" type="text" v-model.trim="update_id" disabled>
        <br>
      </label>
      <label>
        <span>현재 비밀번호</span>
        <input class="update__wrapper-input" type="password" v-model.trim="sign_password">
        <br>
      </label>
      <label>
        <span>변경 비밀번호</span>
        <input
          style="font-size:14px"
          class="update__wrapper-input"
          type="password"
          v-model.trim="update_password"
        >
        <br>
      </label>
      <label>
        <span>비밀번호 확인</span>
        <input
          style="font-size:14px"
          class="update__wrapper-input"
          type="password"
          v-model.trim="update_check_password"
        >
        <br>
      </label>
      <label>
        <span>이름</span>
        <input class="update__wrapper-input" type="text" v-model.trim="update_name">
        <br>
      </label>
      <label>
        <span>핸드폰</span>
        <input
          class="update__wrapper-input"
          type="text"
          @keypress="isNum()"
          v-model.trim="update_phone"
        >
        <br>
      </label>
      <label>
        <span>학과</span>
        <select class="select-css" v-model="update_major">
          <option value disabled>---------학과선택---------</option>
          <option value="교직원">교직원</option>
          <option value disabled>------------ㄱ------------</option>
          <option value="건설환경공학부">건설환경공학부</option>
          <option value="경영학부">경영학부</option>
          <option value="경제학과">경제학과</option>
          <option value="공연예술학과">공연예술학과</option>
          <option value="국어교육과">국어교육과</option>
          <option value="국어국문학과">국어국문학과</option>
          <option value="글로벌물류학과">글로벌물류학과</option>
          <option value="기계공학과">기계공학과</option>
          <option value disabled>------------ㄷ------------</option>
          <option value="도시건축학부">도시건축학부</option>
          <option value="도시공학과">도시공학과</option>
          <option value="도시시설관리공학과">도시시설관리공학과</option>
          <option value="도시행정학과">도시행정학과</option>
          <option value="독어독문학과">독어독문학과</option>
          <option value="디자인학부">디자인학부</option>
          <option value disabled>------------ㄹ------------</option>
          <option value="러시아통상학과">러시아통상학과</option>
          <option value disabled>------------ㅁ------------</option>
          <option value="메카트로닉스공학과">메카트로닉스공학과</option>
          <option value="무역학부">무역학부</option>
          <option value="문헌정보학과">문헌정보학과</option>
          <option value="물리학과">물리학과</option>
          <option value="미국통상학과">미국통상학과</option>
          <option value disabled>------------ㅂ------------</option>
          <option value="바이오경영학과">바이오경영학과</option>
          <option value="법학부">법학부</option>
          <option value="불어불문학과">불어불문학과</option>
          <option value disabled>------------ㄹ------------</option>
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
          <option value disabled>------------ㅇ------------</option>
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
          <option value disabled>------------ㅈ------------</option>
          <option value="전기공학과">전기공학과</option>
          <option value="전자공학과">전자공학과</option>
          <option value="정보전자공학과">정보전자공학과</option>
          <option value="정보통신공학과">정보통신공학과</option>
          <option value="정치외교학과">정치외교학과</option>
          <option value="조형예술학부">조형예술학부</option>
          <option value="중국통상학과">중국통상학과</option>
          <option value="중어중국학과">중어중국학과</option>
          <option value disabled>------------ㅊ------------</option>
          <option value="창의인재개발학과">창의인재개발학과</option>
          <option value="체육교육과">체육교육과</option>
          <option value="체육학부">체육학부</option>
          <option value disabled>------------ㅋ------------</option>
          <option value="컴퓨터공학부">컴퓨터공학부</option>
          <option value disabled>------------ㅍ------------</option>
          <option value="패션산업학과">패션산업학과</option>
          <option value disabled>------------ㅎ------------</option>
          <option value="해양학과">해양학과</option>
          <option value="행정학과">행정학과</option>
          <option value="화학과">화학과</option>
        </select>
        <br>
      </label>
      <input class="update__wrapper-btn" @click="bt_listener()" type="submit" value="수정하기">
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import { global } from "@/global";

export default {
  name: "mypage",

  computed: {
    ...mapState([
      "fail_access"
      // 'get_user_info',
    ])
  },

  mounted() {
    this.fail_access(!this.$session.exists());
    this.bring_information();
    // this.get_user_info()
  },

  data: _ => ({
    update_id: "",
    sign_password: "",
    update_password: "",
    update_check_password: "",
    update_name: "",
    update_phone: "",
    update_major: "",
    update_agree: "",
    pw: "",
    num: "",
    eng: "",
    spe: ""
  }),

  methods: {
    isNum() {
      if (event.keyCode < 48 || event.keyCode > 57) {
        event.returnValue = false;
        alert("휴대폰 번호는 숫자 11자리만 입력해주세요.");
      }
    },

    bt_listener() {
      let self = this;
      self.pw = self.update_password;
      self.num = self.pw.search(/[0-9]/g);
      self.eng = self.pw.search(/[a-z]/gi);
      self.spe = self.pw.search(/[!@#$%^&*?_~]/gi);

      if (!self.sign_password) {
        alert("비밀번호를 입력해주세요.");
      } else if (!self.update_name) {
        alert("이름을 입력해주세요.");
      } else if (!self.update_phone) {
        alert("휴대폰 번호를 입력해주세요.");
      } else if (self.update_phone.length != 11) {
        alert("휴대폰 번호는 11자리로 입력해주세요.");
      } else if (!self.update_major) {
        alert("학과를 선택해주세요.");
      } else if (self.update_password.length > 0) {
        if (self.pw.search(/\s/) != -1) {
          alert("비밀번호는 공백없이 입력해주세요.");
        } else if (
          self.update_password.length < 6 ||
          self.update_password.length > 14
        ) {
          alert(
            "비밀번호는 6~14자로 입력해주세요.\n비밀번호 수정을 원하지 않는다면 빈칸으로 남겨주세요."
          );
        } else if (self.update_password != self.update_check_password) {
          alert("두 비밀번호가 동일해야합니다.");
        } else if (self.num < 0 || self.eng < 0 || self.spe < 0) {
          alert(
            "영문, 숫자, 특수문자를 혼합하여 입력해주세요.\n특수문자는 !@#$%^&>_~만 사용가능합니다."
          );
        } else {
          self.go_update(
            self.sign_password,
            self.update_password,
            self.update_name,
            self.update_phone,
            self.update_major
          );
        }
      } else {
        self.go_update(
          self.sign_password,
          self.update_password,
          self.update_name,
          self.update_phone,
          self.update_major
        );
      }
    },

    go_update(sign_id, sign_password, sign_name, sign_phone, sign_major) {
      let self = this;
      let base = global.base;

      axios
        .post(`${base}/account/changeInfo`, {
          token: self.$session.get("member_token"),
          passwd: self.sign_password,
          newPasswd: self.update_password,
          tel: self.update_phone,
          major: self.update_major,
          name: self.update_name
        })
        .then(response => {
          console.log(response);
          let check = confirm("다음과 같이 수정하시겠습니까?");
          if (check) {
            self.$session.clear();
            self.$session.destroy();
            alert("수정되었습니다.\n다시 로그인 하시기 바랍니다.");
            self.$router.push("/login");
          }
        })
        .catch(error => {
          console.error(error.response);
        });
    },

    bring_information() {
      let self = this;
      let base = global.base;

      axios
        .post(`${base}/account/myPage`, {
          token: self.$session.get("member_token")
        })
        .then(response => {
          self.update_id = response.data.id;
          self.update_name = response.data.name;
          self.update_phone = response.data.tel;
          self.update_major = response.data.major;
        });
    }
  }
};
</script>
