<template>
    <div class="noticeboard_body">
        <div class="notice_board_title">
            <div id="left_notice_board_title">{{page_name}}</div>
            <div id="right_notice_board_title">{{page_name}}</div>
        </div>
        <div class="notice_board_contents">
            <div id="navigation_board">
                <table id="fix_table" v-for="(item, index) in this.fix_notice_items" :key="index">
                    <button type="button" class="btn_fix">{{item}}</button>
                </table>
            </div>
            <div id="contents_board">
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
    #conference.container, #petition.container, #rental.container{
        padding: 0px;
    }

    .noticeboard_body{
        width: 100%;
        padding: 100px 128px;
    }

    .notice_board_title{
        display: flex;
    }

    #left_notice_board_title, #right_notice_board_title{
        width: 250px;
        height: 34px;
        font-family: NotoSansCJKkr;
        font-size: 23px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.48;
        letter-spacing: normal;
        color: #111111;
    }

    #right_notice_board_title{
        margin-left: 7%;
    }

    .notice_board_contents{
        display: flex;
        margin-top: 7px;
        border: 1px solid red;
    }
    .btn_fix{
        display: inline-block;
        height: 50px;
        width: 100%;
        font-family: NotoSansCJKkr;
        font-size: 18px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        letter-spacing: normal;
        text-align: left;
        color: #111111;
        padding-left: 30px;
        padding-top: 0px;
        padding-bottom: 0px;
    }

    #fix_table{
        border-bottom: 1.5px solid #f5f5f5;
        width: 95%;
    }

    #navigation_board{
        width: 250px;
        height: 10%;
        background-color: #ffffff;
        border-top: 3px solid #000000;
        border-bottom: 3px solid #000000;
    }

    #contents_board{
        margin-left: 7%;
    }
</style>


<script>

import axios from 'axios'
import { global } from '@/global'

export default {
    name: 'noticeboard',

    props: {
        fix_notice_items: {
            type: Array,
            default: () =>(['아이템1', '아이템2', '아이템3', '아이템4', '아이템5'])
        },
        page_name:{
            type: String,
            default: () => ("대표 페이지")
        },
    },

    created(){
        this.getContentsList()
    },

    data: () => ({
        contents_list: [],
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