<template>
  <div id="formdoc" class="container globalBoard">
    <div class="body_container">
      <custom-navigation></custom-navigation>
      <div id="notice_contents">
        <div id="content_name">
          <div>
            {{content_name}}
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

<script>
import customNavigation from '@/pages/3rd_menu/custom_navigation'
import axios from 'axios'
import { global } from '@/global'

export default {
  name: 'formdoc',

  created() {
    this.getContentsList();
  },

  components: {
        customNavigation,
    },

  data: () => ({
    contents_list: [],
    content_name: '자료실',
    boardKind: 5,
    boardId: 'INUAPPCEN'
    }),

  methods: {
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
          axios.post(`${global.base}/board/all`, {boardKind: 5})
          .then(response =>{
            var formdocData = response.data[0] //임시데이터
            console.log(formdocData)
              for(var item in formdocData){
                var content = new Object()

                content.index = parseInt(item) + 1
                content.title = formdocData[item].title
                content.author = formdocData[item].author
                content.date = self.getDate(formdocData[item].date)
                content.viewTime = formdocData[item].viewTime
                content.boardId = formdocData[item].boardId

                self.contents_list.push(content)
              }
          })
          .catch(error => {
              console.error(error.response + "에러 발생, 게시판 리스트를 불러올 수 없음");
          })
      },
  },


}
</script>

