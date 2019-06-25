<template>
  <div id="rental" class="container globalBoard">
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
              <td class="contentTd" style="width:50%;">
                <div id="div_secret">
                  <div v-if="item.boardSecret" id="div_secret_text">
                    [비밀글]&nbsp &nbsp
                  </div>
                  <div>
                    <a href="" v-on:click="certificateUser(item)">{{item.title}}</a>
                  </div>
                </div>
                </td>
              <td style="width:10%;">{{item.authorName}}</td>
              <td style="width:10%;">{{getDate(item.date)}}</td>
              <td style="width:10%;">{{item.viewTime}}</td>
            </tr>
            <tr v-for="item in current_list">
              <td class="headTd" style="width:5%;">{{item.index}}</td>
              <td class="contentTd" style="width:50%;">
                <div id="div_secret">
                  <div v-if="item.boardSecret" id="div_secret_text">
                    [비밀글]&nbsp &nbsp
                  </div>
                  <div>
                    <a href="" v-on:click="certificateUser(item)">{{item.title}}</a>
                  </div>
                </div>
              </td>
              <td style="width:10%;">{{item.authorName}}</td>
              <td style="width:10%;">{{item.date}}</td>
              <td style="width:10%;">{{item.viewTime}}</td>
            </tr>
          </table>
        </div>
        <div class="customPagination">
            <div style="margin-top:15px;">
            {{checkedPage}} Pages
          </div>
          <div style="margin-top:25px;">
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

#div_secret{
  display: flex;
}

#div_secret_text{
  color: gray;
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
  name: 'rental',

  created() {
    this.getContentsList()
  },

  mounted(){
    this.checkedPage = this.$route.query.page
  },

  components: {
        customNavigation,
        pagination,
    },

  data: () => ({
    contents_list: [],
    notice_list: [],
    current_list: [],
    content_name: '물품대여',
    boardKind: 6,
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
          boardKind: self.boardKind,
        }
      })
        },
    certificateUser(item){
      var self = this
      if(item.boardSecret){
        if(item.author == self.$session.get('member_id')){
                  self.putParams(item.boardId)
                }
                else{
                  alert('해당 게시글에 접근 권한이 없습니다')
                }
      }
      else{
        self.putParams(item.boardId)
      }
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
              author: rentalData[page].author,
              date: self.getDate(rentalData[page].date),
              viewTime: rentalData[page].viewTime,
              boardId: rentalData[page].boardId,
              boardSecret: rentalData[page].boardSecret
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

          axios.post(`${global.base}/board/all`, {boardKind:6})
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

