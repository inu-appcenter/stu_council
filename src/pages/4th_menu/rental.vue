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
            <tr v-for="(item, index) in contents_list" :key="index">
              <td class="headTd" style="width:5%;">{{item.index}}</td>
              <td class="contentTd" style="width:50%;"><a href="" v-on:click="putParams(item.boardId)">{{item.title}}</a></td>
              <td style="width:10%;">{{item.author}}</td>
              <td style="width:10%;">{{item.date}}</td>
              <td style="width:10%;">{{item.viewTime}}</td>
            </tr>
          </table>
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
/* table {
  width: 100%;
  border-spacing: 0px;
}

tr,
td {
  text-align: center;
  padding: 10px 10px;
  border-bottom: 1px solid #111111;
}

#title.headTd {
  padding: 20px 0px;
}

.contentTd {
  font-size: 15px;
  text-align: left;
  color: #111111;
}

.headTd {
  font-size: 15px;
  font-weight: bold;
  color: #111111;
}

#rental.container {
  padding: 90px 128px;
}

.body_container {
  display: flex;
  width: 100%;
}

#notice_contents {
  margin-left: 7%;
  width: 100%;
}

#content_name {
  display: flex;
  height: 34px;
  width: 100%;
  font-size: 23px;
  font-weight: bold;
  color: #003e8f;
}

#content_body {
  width: 100%;
  margin-top: 7px;
  background-color: #ffffff;
  border-top: 3px solid #000000;
  border-bottom: 3px solid #000000;
} */
</style>


<script>
import customNavigation from '@/pages/4th_menu/custom_navigation'
import axios from 'axios'
import { global } from '@/global'
import detailPage from '@/pages/member/detail'
import router from '@/router'

export default {
  name: 'rental',

  created() {
    this.getContentsList();
  },

  components: {
        customNavigation,
        detailPage,
    },

  data: () => ({
    contents_list: [],
    notice_list: [],
    content_name: '물품대여',
    boardKind: 6,
    boardId: 'INUAPPCEN'
    }),

  methods: {
    getEnroll(){
      var self = this
      self.$router.push('enroll')
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
    getContentsList(){
          var self = this

          axios.post(`${global.base}/board/all`, {boardKind:6})
          .then(response =>{
            var rentalData = response.data[0]
            for(var item in rentalData){
              var content = new Object()

              content.index = parseInt(item) + 1
              content.title = rentalData[item].title
              content.author = rentalData[item].author
              content.date = self.getDate(rentalData[item].date)
              content.viewTime = rentalData[item].viewTime
              content.boardId = rentalData[item].boardId

              if(rentalData[item].notice){
                self.notice_list.push(content)
              }
              else{
                self.contents_list.push(content)
              }
            }
          })
          .catch(error => {
              console.error(error.response + "에러 발생, 게시판 리스트를 불러올 수 없음");
          })
      },
  },


}
</script>

