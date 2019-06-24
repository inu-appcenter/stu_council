<template>
    <div>
        <tbody>
            <tr>
                <td v-for="(item, index) in pageNumList" :key="index"><button v-on:click="setCheckedPage(item)">{{item}}</button></td>
            </tr>
        </tbody>
    </div>
</template>

<style>
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
                    self.contentsAmount = parseInt(itemLength/7)+1
                    if(self.contentsAmount < 7){
                        self.startPage = 1
                    }
                    else{
                        self.startPage = self.contentsAmount - 6
                    }
                    self.endPage = self.contentsAmount
              }
              else{
                  self.contentsAmount = parseInt(itemLength/7)
                  if(self.contentsAmount < 7){
                    self.startPage = 1
                  }
                  else{
                    self.startPage = self.contentsAmount - 6
                  }
                  self.endPage = self.contentsAmount+1
              }


            for(var page = self.startPage; page <= self.endPage; page++){
                self.pageNumList.push(page)
            }
      },
  },


}
</script>
