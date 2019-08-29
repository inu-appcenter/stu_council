<template>
  <div id="petition" class="container globalBoard">
    <div class="body_container">
      <custom-navigation></custom-navigation>
      <div id="notice_contents">
        <div id="content_name">
          <div>{{content_name}}</div>
        </div>
        <div id="content_body">
          <table>
            <tr>
              <td id="title" class="headTd">번호</td>
              <td id="title" class="headTd">제목</td>
              <td id="title" class="headTd">글쓴이</td>
              <td id="title" class="headTd">날짜</td>
              <td id="title" class="headTd">조회</td>
            </tr>
            <tr v-for="(item, index) in contents_list" :key="index">
              <td class="headTd" style="width:5%;">{{item.index}}</td>
              <td class="contentTd" style="width:50%;">
                <a href v-on:click="putParams(item.boardId)">{{item.title}}</a>
              </td>
              <td style="width:10%;">{{item.author}}</td>
              <td style="width:10%;">{{getDate(item.date)}}</td>
              <td style="width:10%;">{{item.viewTime}}</td>
            </tr>
          </table>
          <div class="customPagination"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import customNavigation from "@/pages/2nd_menu/custom_navigation";
import axios from "axios";
import { global } from "@/global";

export default {
  name: "petition",

  created() {
    //this.go_back();
    this.getContentsList();
  },

  components: {
    customNavigation
  },

  data: () => ({
    all_list: [],
    contents_list: [],
    content_name: "학생회 소식",
    boardKind: 1,
    boardId: "INUAPPCEN"
  }),

  methods: {
    go_back() {
      alert("추후 서비스 제공될 예정입니다.");
      this.$router.push({ name: "home" });
    },
    putParams(id) {
      var self = this;
      self.boardId = id;
      self.$router.push({
        name: "detail",
        query: {
          boardKind: self.boardKind,
          boardId: self.boardId
        }
      });
    },
    getDate(date) {
      var result = date.split(" ");
      return result[0];
    },
    setItemList(rentalData) {
      var self = this;
      var pageNum = 1;
      var startItem = pageNum * 7 - 7;
      var endItem = pageNum * 7 - 1;
      for (var page = startItem; page <= endItem; page++) {
        var content = {
          index: parseInt(page) + 1,
          title: rentalData[page].title,
          author: rentalData[page].author,
          date: self.getDate(rentalData[page].date),
          viewTime: rentalData[page].viewTime,
          boardId: rentalData[page].boardId
        };

        if (rentalData[page].notice) {
          self.notice_list.push(content);
        } else {
          self.contents_list.push(content);
        }
      }
    },
    getContentsList() {
      var self = this;

      axios
        .post(`${global.base}/board/all`, { boardKind: 1 })
        .then(response => {
          var rentalData = response.data[0];
          for (var item in rentalData) {
            if (rentalData[item].notice) {
              self.notice_list.push(rentalData[item]);
            } else {
              self.contents_list.push(rentalData[item]);
            }
          }
          self.setItemList(self.contents_list);
        })
        .catch(error => {
          console.error(
            error.response + "에러 발생, 게시판 리스트를 불러올 수 없음"
          );
        });
    }
  }
};
</script>

