import Vue from "vue"

export const global = new Vue({
  data: {
    base: "http://18.224.228.37:7004",
    firstPageItems: ["총학생회 소개", "총학생회 위치"],
    secondPageItems: ["학생회 소식", "학생청원"],
    thirdPageItems: ["회의보고", "재정보고", "자료실"],
    fourthPageItems: ["물품대여", "통학버스 및 귀향버스"]
  }
})
