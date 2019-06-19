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
      }
  },

    props: {
        contentsItem_list: {
            type: Array,
            default: () =>(['아이템1', '아이템2', '아이템3', '아이템4', '아이템5'])
        },
        notice_list: {
            type: Array,
            default: () =>(['아이템1', '아이템2', '아이템3', '아이템4', '아이템5'])
        },
        checkedPage: {
            type: Number,
            default: () => 1
        }
    },

  data: () => ({
    contentsAmount: 0,
    startPage: 0,
    endPage: 10,
    pageNumList: []
    }),

  methods: {
    setCheckedPage(checkedPageNum){
        var self = this
        self.checkedPage = checkedPageNum
        self.$emit("clickcPageNum", self.checkedPage)
        alert(checkedPageNum)
    },
    getContentsList(){
          var self = this

            var itemLength = self.contentsItem_list.length
            console.log(itemLength)
            if(itemLength % 7 == 0){
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