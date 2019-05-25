<template>
  <div id="rental" class="container">
    <div class="body_container">
      <custom-navigation></custom-navigation>
      <div id="notice_contents">
        <div id="content_name">{{content_name}}</div>
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
              <td class="headTd" style="width:5%;">{{index+1}}</td>
              <td class="contentTd" style="width:50%;">{{item.title}}</td>
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

    table{
    border-spacing: 0px;
  }

  tr, td{
    text-align: center;
    padding: 1px 5px;
    border-bottom: 1px solid #111111;
  }

  #title.headTd{
    padding: 20px 0px;
  }

  .contentTd{
    font-family: NotoSansCJKkr;
    font-size: 15px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.47;
    letter-spacing: normal;
    text-align: left;
    color: #111111;
  }

  .headTd{
    font-family: NotoSansCJKkr;
    font-size: 15px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.47;
    letter-spacing: normal;
    color: #111111;
  }

  #rental.container{
    padding: 70px 128px;
  }

  .body_container{
    display: flex;
    width: 100%;
  }

  #notice_contents{
    margin-left: 7%;
    width: 100%;
  }

  #content_name{
    height: 34px;
    font-family: NotoSansCJKkr;
    font-size: 23px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.48;
    letter-spacing: normal;
    color: #003e8f;
  }

  #content_body{
    width: 100%;
    margin-top: 7px;
    background-color: #ffffff;
    border-top: 3px solid #000000;
    border-bottom: 3px solid #000000;
  }
</style>


<script>
import customNavigation from '@/pages/4th_menu/custom_navigation'
import axios from 'axios'
import { global } from '@/global'

export default {
  name: 'rental',

  created() {
    this.getContentsList();
  },

  components: {
        customNavigation,
    },

  data: () => ({
    contents_list: [],
    content_name: '물품대여',
    }),

  methods: {
    getContentsList(){
          var self = this
          axios.post(`${global.base}/board/all`, {boardKind: 5})
          .then(response =>{
            var rentalData = response.data[0]
              for(var item in rentalData){
                self.contents_list.push(rentalData[item])
              }
          })
          .catch(error => {
              console.error(error.response + "에러 발생, 게시판 리스트를 불러올 수 없음");
          })
      },
  },


}
</script>

