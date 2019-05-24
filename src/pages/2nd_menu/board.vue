<template>
  <div id="board" class="container">
    <custom-navigation></custom-navigation>
    <div id="notice_contents">
      <div id="content_name">{{content_name}}</div>
      <div id="content_body">
        <table v-for="(item, index) in contents_list" :key="index">
          <div>
              {{item}}
          </div>
      </table>
      </div>
    </div>
  </div>
</template>

<style>
  #board.container{
    display: flex;
    width: 100%;
    padding: 0px 128px;
    margin: 0px;
  }

  #notice_contents{
    margin-top: 100px;
    margin-left: 7%;
  }

  #content_name{
    width: 250px;
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
    margin-top: 7px;
    width: 250px;
    background-color: #ffffff;
    border-top: 3px solid #000000;
    border-bottom: 3px solid #000000;
  }
</style>

<script>
import customNavigation from '@/pages/2nd_menu/custom_navigation'
import axios from 'axios'
import { global } from '@/global'

export default {
  name: 'board',

  created() {
    this.getContentsList();
  },

  components: {
        customNavigation,
    },

  data: () => ({
    contents_list: [],
    content_name: '게시판',
    }),

  methods: {
    getContentsList(){
          var self = this
          axios.get(`${global.base}/board/all`)
          .then(response =>{
              var dataIndex = 0
              for(var item in response.data){
                self.contents_list.push(response.data[item].title)
                dataIndex += 1
              }
          })
          .catch(error => {
              console.error(error.response + "에러 발생, 게시판 리스트를 불러올 수 없음");
          })
      },
  },


}
</script>

