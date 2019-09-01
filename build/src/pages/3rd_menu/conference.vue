<template>
  <div id="conference" class="container globalBoard">
    <div class="body_container">
      <custom-navigation></custom-navigation>
      <div id="notice_contents">
        <div id="content_name">
          <div>{{content_name}}</div>
          <div id="bt_write_div">
            <button v-if="admin" type="button" id="bt_write" @click="getEnroll()">글쓰기</button>
          </div>
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
            <tr>
              <td id="table_intro" colspan="5">총학생회 {{content_name}}에 대한 게시판 입니다.</td>
            </tr>
            <tr v-for="item in notice_list" style="background: #EAEAEA;">
              <td class="headTd" style="width:5%;">공지</td>
              <td class="contentTd" style="width:50%;">
                <a href v-on:click="putParams(item.boardId)">{{item.title}}</a>
              </td>
              <td style="width:10%;">{{item.authorName}}</td>
              <td style="width:10%;">{{getDate(item.date)}}</td>
              <td style="width:10%;">{{item.viewTime}}</td>
            </tr>
            <tr v-for="item in current_list">
              <td class="headTd" style="width:5%;">{{item.index}}</td>
              <td class="contentTd" style="width:50%;">
                <a href v-on:click="putParams(item.boardId)">{{item.title}}</a>
              </td>
              <td style="width:10%;">{{item.authorName}}</td>
              <td style="width:10%;">{{item.date}}</td>
              <td style="width:10%;">{{item.viewTime}}</td>
            </tr>
          </table>
        </div>
        <div class="customPagination">
          <div style="margin-top:15px;">{{checkedPage}} Pages</div>
          <div style="margin-top:25px;">
            <pagination :contentsItem_list="contents_list" v-on:pageChanged="changePage"></pagination>
          </div>
          <div class="filtering">
            <select class="filtering-option" v-model="filter_option">
              <option value="search">제목</option>
              <option value="name">작성자</option>
            </select>
            <input type="text" v-model="filter_content" />
            <button class="bt_submit" type="button" v-on:click="putParams2()">검색</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
import customNavigation from "@/pages/3rd_menu/custom_navigation";
import axios from "axios";
import { global } from "@/global";
import pagination from "@/components/pagination";
import { mapState } from "vuex";

export default {
  name: "conference",
  computed: {
    ...mapState(["check_admin"])
  },
  mounted() {
    this.checkedPage = this.$route.query.page;
    //새로고쳐졌을 때 불러올 데이터
    var filter_data = this.$route.query.filter_content;
    if (filter_data == null) {
      this.getContentsList();
    } else {
      this.getfilteredData();
    }
    this.admin = this.check_admin();
  },
  components: {
    customNavigation,
    pagination
  },

  data: () => ({
    admin: 0,
    contents_list: [],
    notice_list: [],
    current_list: [],
    content_name: "회의보고",
    boardKind: 3,
    boardId: "INUAPPCEN",
    checkedPage: 1,
    filter_option: "search",
    filter_content: ""
  }),

  methods: {
    getEnroll() {
      var self = this;
      self.boardKind = self.$route.query.boardKind;
      self.$router.push({
        name: "enroll",
        query: {
          boardKind: self.boardKind
        }
      });
    },
    putParams(id) {
      var self = this;
      self.boardId = id;
      self.boardKind = self.$route.query.boardKind;
      self.$router.push({
        name: "detail",
        query: {
          boardKind: self.boardKind,
          boardId: self.boardId
        }
      });
    },
    putParams2() {
      var self = this;
      self.$router.push({
        name: "conference",
        query: {
          boardKind: self.boardKind,
          filter_content: self.filter_content,
          page: 1
        }
      });
      self.searchContent();
      window.location.reload(true);
    },
    getDate(date) {
      var result = date.split(" ");
      return result[0];
    },
    setItemList(rentalData) {
      var self = this;
      var startItem = self.checkedPage * 7 - 7;
      var endItem = self.checkedPage * 7 - 1;
      for (var page = startItem; page <= endItem; page++) {
        if (rentalData[page] != null) {
          var content = {
            index: parseInt(page) + 1,
            title: rentalData[page].title,
            authorName: rentalData[page].authorName,
            date: self.getDate(rentalData[page].date),
            viewTime: rentalData[page].viewTime,
            boardId: rentalData[page].boardId
          };

          self.current_list.push(content);
        }
      }
    },
    changePage() {
      var self = this;
      self.current_list.length = 0;
      self.contents_list.length = 0;
      self.notice_list.length = 0;
      self.checkedPage = self.$route.query.page;
      var search_word = self.$route.query.filter_content;
      if (search_word == null) {
        self.getContentsList();
      } else {
        self.getfilteredData();
      }
    },
    searchContent() {
      var self = this;
      self.current_list.length = 0;
      self.contents_list.length = 0;
      self.notice_list.length = 0;
      self.getfilteredData();
    },
    getContentsList() {
      var self = this;

      axios
        .post(`${global.base}/board/all`, { boardKind: 3 })
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
    },
    getfilteredData() {
      var self = this;
      self.filter_content = self.$route.query.filter_content;
      axios
        .post(`${global.base}/board/search`, {
          boardKind: self.boardKind,
          search: self.filter_content
        })
        .then(response => {
          var rentalData = response.data;
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

