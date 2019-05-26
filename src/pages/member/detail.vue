<template>
  <div id=detail class="container">
    <div class="body_container">
      <custom-navigation></custom-navigation>
      <div id="notice_contents">
        <div id="content_name">{{content_name}}</div>
        <div id="content_body">
            <table>
                <div>
                    <div class="detailComponent" id="titleDiv">
                        <p class="fixComponent">제목</p>
                        <p class="flexComponent">{{title}}</p>
                    </div>
                </div>
                <div id="secondDiv">
                    <div class="detailComponent">
                        <p class="fixComponent">작성자</p>
                        <p class="flexComponent">{{author}}</p>
                    </div>
                    <div class="detailComponent">
                        <p class="fixComponent">작성일</p>
                        <p class="flexComponent">{{date}}</p>
                    </div>
                    <div class="detailComponent">
                        <p class="fixComponent">조회수</p>
                        <p class="flexComponent">{{viewCount}}</p>
                    </div>
                </div>

        <div>
            <div class="detailComponent" id="content">
                <p>{{body}}</p>
            </div>
        </div>
            </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  table{
    width: 100%;
    border-spacing: 0px;
  }
    .detailComponent{
        display: flex;
        width: 100%;
        padding: 5px 30px;
    }

    .detailComponent#content{
        min-height: 150px;
        padding: 35px 30px;
    }

    #secondDiv{
        display: flex;
        margin-top: 7px;
        width: 100%;
        background-color: #ffffff;
        border-bottom: 1px solid #f5f5f5;
    }
    .fixComponent{
        width: 41px;
        height: 22px;
        font-family: NotoSansCJKkr;
        font-size: 15px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.47;
        letter-spacing: normal;
        text-align: left;
        color: #111111;
    }
    .flexComponent{
        margin-left: 54px;
        font-family: NotoSansCJKkr;
        font-size: 15px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.47;
        letter-spacing: normal;
        text-align: left;
        color: #000000;
    }
    .detailComponent#titleDiv{
        margin-top: 7px;
        width: 100%;
        background-color: #ffffff;
        border-bottom: 3px solid #f5f5f5;
    }

    #detail.container{
    padding: 90px 128px;
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
  name: 'detail',

  created() {
      this.boardId = this.$route.query.boardId
      this.boardKind = this.$route.query.boardKind
      this.getData()
  },

  components: {
      customNavigation,
  },

  data: () => ({
      content_name: '물품대여',
      boardId: '0',
      boardKind: 'INUAPPCEN',
      title: '',
      author: '',
      date: '',
      viewCount: '',
      body: '',
      files: '',
      testKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIwMTMwMTQ4NCIsIm5hbWUiOiLsnoTrj5nsmYQiLCJtYWpvciI6ImNvbXB1dGVyU2NpZW5jZSIsInRlbCI6IjAxMDEyMzQ1Njc4IiwidHlwZSI6MSwiaWF0IjoxNTU4ODczMTM1LCJleHAiOjE1NjE0NjUxMzUsInN1YiI6InVzZXJJbmZvIn0.7Fjsj_sJm6P_wlOBFNOjgVdISEfZ9k7oZyrZoAXCA_I'
    }),

    methods: {
        getDate(date){
          var result = date.split(' ')
          return result[0]
        },
        getData(){
            var self = this
            let config = {
                headers: {
                'x-access-token': self.testKey
                }
            }
            axios.post(`${global.base}/board/one`, {boardKind: self.boardKind, boardId: self.boardId}, config)
            .then(response =>{
                var detailData = response.data
                self.title = detailData.title
                self.author = detailData.author
                self.date = self.getDate(detailData.date)
                self.viewCount = detailData.viewTime
                self.body = detailData.content
            })
            .catch(error => {
                console.error(error.response + "에러 발생, 게시판 리스트를 불러올 수 없음!!");
            })
        }
    }
}
</script>
