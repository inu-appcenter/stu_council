<template>
  <div id="bus" class="container globalBoard">
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
            <tr>
              <td id="table_intro" colspan="5">총학생회 {{content_name}}에 대한 게시판 입니다.</td>
            </tr>
            <tr v-for="item in notice_list" style="background: #EAEAEA;">
              <td class="headTd" style="width:5%;">공지</td>
              <td class="contentTd" style="width:50%;"><a href="" v-on:click="putParams(item.boardId)">{{item.title}}</a></td>
              <td style="width:10%;">{{item.authorName}}</td>
              <td style="width:10%;">{{getDate(item.date)}}</td>
              <td style="width:10%;">{{item.viewTime}}</td>
            </tr>
            <tr v-for="item in current_list">
              <td class="headTd" style="width:5%;">{{item.index}}</td>
              <td class="contentTd" style="width:50%;"><a href="" v-on:click="putParams(item.boardId)">{{item.title}}</a></td>
              <td style="width:10%;">{{item.authorName}}</td>
              <td style="width:10%;">{{item.date}}</td>
              <td style="width:10%;">{{item.viewTime}}</td>
            </tr>
          </table>
        </div>
        <div class="customPagination">
            <div>
            {{checkedPage}} Pages
          </div>
          <div>
            <pagination
          :contentsItem_list = "contents_list"
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

.customPagination{
  display: flex;
  flex-direction: column;
  align-items: center;
}

#table_intro{
  color: #003e8f;
  background-color: #EAEAEA;
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
import customNavigation from '@/pages/4th_menu/custom_navigation'
import axios from 'axios'
import { global } from '@/global'
import pagination from '@/components/pagination'

export default {
  name: 'bus',

  created() {
    this.getContentsList();
  },

  components: {
        customNavigation,
        pagination,
      
    },

  data: () => ({
    contents_list: [],
    notice_list: [],
    current_list: [],
    content_name: '통학버스 및 귀향버스',
    boardKind: 7,
    boardId: 'INUAPPCEN',
    checkedPage: 1
    }),

  methods: {
    getEnroll(){
      var self = this
      self.boardKind = self.$route.query.boardKind
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
      self.boardKind = self.$route.query.boardKind
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
              if(rentalData[page] != null){
              var content = {
              index: parseInt(page) + 1,
              title: rentalData[page].title,
              authorName: rentalData[page].authorName,
              date: self.getDate(rentalData[page].date),
              viewTime: rentalData[page].viewTime,
              boardId: rentalData[page].boardId
              }

              self.current_list.push(content)
              }

            }
    },
    changePage(){
      var self = this
      self.current_list.length = 0
      self.contents_list.length = 0
      self.notice_list.length = 0
      self.checkedPage = self.$route.query.page
      self.getContentsList()
    },
    getContentsList(){
          var self = this

          axios.post(`${global.base}/board/all`, {boardKind:7})
          .then(response =>{
            var rentalData = response.data[0]
            for(var item in rentalData){
              if(rentalData[item].notice){
                self.notice_list.push(rentalData[item])
              }
              else{
                self.contents_list.push(rentalData[item])
              }
            }
            self.setItemList(self.contents_list)
          })
          .catch(error => {
              console.error(error.response + "에러 발생, 게시판 리스트를 불러올 수 없음");
          })
      },
  },


}
</script>

