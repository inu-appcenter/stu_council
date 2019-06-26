<template>
    <div>
        <table id="pagination_table">
            <tbody>
                <tr>
                <td id="pagination_td" v-for="(item, index) in pageNumList" :key="index"><button v-on:click="setCheckedPage(item)">{{item}}</button></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<style>
#pagination_table {
    width: 100%;
    border: 1px solid #444444;
    border-collapse: collapse;
  }
  #pagination_td {
    border: 1px solid #444444;
    padding: 0px 6px;
  }
</style>

<script>
import axios from 'axios'
import { global } from '@/global'
import router from '@/router'

export default {
name: 'rental',

  watch:{
      contentsItem_list: function(){
          this.getContentsList(this.contentsItem_list)
      },
  },

  mounted(){
      this.boardKind = this.$route.query.boardKind
  },

    props: {
        contentsItem_list: {
            type: Array,
            default: () =>(['아이템1', '아이템2', '아이템3', '아이템4', '아이템5'])
        },
        notice_list: {
            type: Array,
            default: () =>(['아이템1', '아이템2', '아이템3', '아이템4', '아이템5'])
        }
    },

  data: () => ({
    boardName: 'rental',
    checkedPage: 1,
    boardKind: 0,
    contentsAmount: 0,
    startPage: 0,
    endPage: 10,
    pageNumList: [],
    }),

  methods: {
    setBoardFilter(boardKind){
        var self = this
        if(boardKind == 1){
            self.boardName = 'petition'
        }
        else if(boardKind == 2){
            self.boardName = 'board'
        }
        else if(boardKind == 3){
            self.boardName = 'conference'
        }
        else if(boardKind == 4){
            self.boardName = 'financial'
        }
        else if(boardKind == 5){
            self.boardName = 'formdoc'
        }
        else if(boardKind == 6){
            self.boardName = 'rental'
        }
        else{
            self.boardName = 'bus'
        }
    },
    setCheckedPage(checkedPageNum){ 
        var self = this
        self.pageNumList.length = 0
        self.checkedPage = checkedPageNum
        self.boardKind = self.$route.query.boardKind
        self.setBoardFilter(self.boardKind)
        self.$router.push({
                  name: self.boardName,
                  query: {
                      boardKind: self.boardKind,
                      page: self.checkedPage
                  }
              })
        self.$emit('pageChanged')
    },
    getContentsList(){
          var self = this

            var itemLength = self.contentsItem_list.length
            console.log(itemLength)
            if(itemLength % 7 == 0){ //숫자 셋팅
            self.startPage = 1
            self.contentsAmount = parseInt(itemLength/7)
            self.endPage = self.contentsAmount
              }
              else if(itemLength/7 > 1){
                  self.startPage = 1
                  self.contentsAmount = parseInt(itemLength/7) + 1
                  self.endPage = self.contentsAmount
              }
              else{
                  self.startPage = 1
                  self.contentsAmount = 1
                  self.endPage = self.contentsAmount
              }


            for(var page = self.startPage; page <= self.endPage; page++){
                self.pageNumList.push(page)
            }
      },
  },


}
</script>
