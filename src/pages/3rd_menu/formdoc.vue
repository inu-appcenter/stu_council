<template>
  <div id="formdoc" class="container globalBoard">
    <div class="body_container">
      <custom-navigation></custom-navigation>
      <div id="notice_contents">
        <div id="content_name">
          <div>
            {{content_name}}
          </div>
          <div id="bt_write_div">
            <button type="button" id="bt_write" @click='getEnroll()'>글쓰기</button>
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
            <tr v-for="(item, index) in contents_list" :key="index">
              <td class="headTd" style="width:5%;">{{item.index}}</td>
              <td class="contentTd" style="width:50%;"><a href="" v-on:click="putParams(item.boardId)">{{item.title}}</a></td>
              <td style="width:10%;">{{item.author}}</td>
              <td style="width:10%;">{{item.date}}</td>
              <td style="width:10%;">{{item.viewTime}}</td>
            </tr>
          </table>
          <div class="customPagination">
            <pagination
          id="pagination"
          :contentsItem_list = "all_list"
          v-on:pageChanged="changePage"></pagination>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#bt_write_div {
  margin-left: auto;
}

#bt_write {
  width: 60px;
  height: 36px;
  border-radius: 10px;
  background-color: #003e8f;
  font-size: 13px;
  font-weight: 500;
  text-align: center;
  color: #ffffff;
}
</style>

<script>
import customNavigation from '@/pages/3rd_menu/custom_navigation'
import axios from 'axios'
import { global } from '@/global'
import pagination from '@/components/pagination'

export default {
  name: 'formdoc',

  created() {
    this.getContentsList();
  },

  components: {
        customNavigation,
        pagination
    },

  data: () => ({
    all_list: [1, 2],
    contents_list: [],
    notice_list: [],
    content_name: '자료실',
    boardKind: 5,
    boardId: 'INUAPPCEN',
    checkedPage: 1
    }),

  methods: {
    getEnroll(){
      var self = this
      self.$router.push({
        name: 'enroll',
        query: {
          boardKind: self.boardKind
        }
      })
        },
    putParams(id){
      var self = this
      self.boardId = id
      self.$router.push({
        name: 'detail',
        query: {
          boardKind: self.boardKind,
          boardId: self.boardId
          },
        })
      },
    getDate(date){
          var result = date.split(' ')
          return result[0]
    },
    setItemList(rentalData){
        var self = this
        var startItem = self.checkedPage*7 - 7
        var endItem = self.checkedPage*7 - 1
        for(var page = startItem; page <= endItem; page++){
              var content = {
              index: parseInt(page) + 1,
              title: rentalData[page].title,
              author: rentalData[page].author,
              date: self.getDate(rentalData[page].date),
              viewTime: rentalData[page].viewTime,
              boardId: rentalData[page].boardId
              }

              if(rentalData[page].notice){
                self.notice_list.push(content)
              }
              else{
                self.contents_list.push(content)
              }
        }
    },
    changePage(){
      var self = this
      self.contents_list.length = 0
      self.notice_list.length = 0
      self.checkedPage = self.$route.query.page
      self.getContentsList()
    },
    getContentsList(){
          var self = this

          axios.post(`${global.base}/board/all`, {boardKind:5})
          .then(response =>{
            var rentalData = response.data[0]
            self.all_list = rentalData
            self.setItemList(rentalData)
          })
          .catch(error => {
              console.error(error.response + "에러 발생, 게시판 리스트를 불러올 수 없음");
          })
      },
  },


}
</script>

