<template>
    <div id="filteredlist" class="container globalBoard">
        <div class="body_container">
            <custom-navigation1 v-if="navigationKind === 1"></custom-navigation1>
            <custom-navigation2 v-else-if="navigationKind === 2"></custom-navigation2>
            <custom-navigation3 v-else-if="navigationKind === 3"></custom-navigation3>
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
                    <tr v-for="item in notice_list" style="background: #EAEAEA;">
                        <td class="headTd" style="width:5%;">공지</td>
                        <td class="contentTd" style="width:50%;"><a href="" v-on:click="putParams(item.boardId)">{{item.title}}</a></td>
                        <td style="width:10%;">{{item.authorName}}</td>
                        <td style="width:10%;">{{getDate(item.date)}}</td>
                        <td style="width:10%;">{{item.viewTime}}</td>
                    </tr>
                    <tr v-for="item in current_list">
                        <td class="headTd" style="width:5%;">{{item.index}}</td>
                        <td class="contentTd" style="width:50%;"><a href="" v-on:click="putParams(item.boardId)">{{item.title}}</a></td>
                        <td style="width:10%;">{{item.authorName}}</td>
                        <td style="width:10%;">{{item.date}}</td>
                        <td style="width:10%;">{{item.viewTime}}</td>
                    </tr>
                </table>
                    <div class="customPagination">
                        <div id="pagination">
                        {{checkedPage}} Pages
                        </div>
                        <div id="pagination">
                            <pagination
                        :contentsItem_list = "contents_list"
                        v-on:pageChanged="changePage"></pagination>
                        </div>
                        
                        <div class="filtering">
                            <select class="filtering-option" v-model="filter_option">
                            <option value="search">제목</option>
                            <option value="name">작성자</option>
                            </select>
                            <input type="text" v-model="filter_content"/>
                            <button class="bt_submit" type="button" @click="putParams2()">검색</button>
                        </div>
                
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import customNavigation1 from "@/pages/2nd_menu/custom_navigation";
import customNavigation2 from "@/pages/3rd_menu/custom_navigation";
import customNavigation3 from "@/pages/4th_menu/custom_navigation";
import { global } from '@/global'
import pagination from '@/components/pagination'
import axios from 'axios'


export default {
    name: 'filteredlist',

    components:{
        customNavigation1,
        customNavigation2,
        customNavigation3,
        pagination
    },

    created() {
        this.boardKind = this.$route.query.boardKind
        this.filter_content = this.$route.query.filter_content
        this.setBoardFilter(this.boardKind)
    },

    mounted() {
        this.getfilteredData()
    },

    data: () => ({
        navigationKind: '',
        boardKind: '',
        filter_content: '',
        filter_option: '',
        content_name: '',
        contents_list: [],
        notice_list: [],
        current_list: [],
        checkedPage: 1,
    }),

    methods: {
        getEnroll(){
      var self = this
      self.boardKind = self.$route.query.boardKind
      self.$router.push({
        name: 'enroll',
        query: {
          boardKind: self.boardKind
        }
      })
        },
        putParams(id){
      var self = this
      self.boardId = id
      self.boardKind = self.$route.query.boardKind
      self.$router.push({
        name: 'detail',
        query: {
          boardKind: self.boardKind,
          content_name: self.content_name,
          boardId: self.boardId
          },
        })
      },
      putParams2(filter_content){
      var self = this
      self.$router.push({
        name:'filteredlist',
        query: {
          boardKind: self.boardKind,
          filter_content: self.filter_content
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
              date: self.getDate(rentalData[page].date),
              viewTime: rentalData[page].viewTime,
              boardId: rentalData[page].boardId
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
      self.getfilteredData()
    },
    setBoardFilter(boardKind){
        var self = this
        if(boardKind == 1){
                self.content_name = "학생청원";
                self.boardName = 'petition';
                self.navigationKind = 1;
            }
            else if(boardKind == 2){
                self.content_name = "게시판";
                self.boardName = 'board';
                self.navigationKind = 1;
            }
            else if(boardKind == 3){
                self.content_name = "회의보고";
                self.boardName = 'conference'
                self.navigationKind = 2;
            }
            else if(boardKind == 4){
                self.content_name = "재정보고";
                self.boardName = 'financial'
                self.navigationKind = 2;
            }
            else if(boardKind == 5){
                self.content_name = "서식자료실";
                self.boardName = 'formdoc'
                self.navigationKind = 2;
            }
            else if(boardKind == 6){
                self.content_name = "물품대여";
                self.boardName = 'rental'
                self.navigationKind = 3;
            }
            else if(boardKind == 7){
                self.content_name = "통학버스 및 귀향버스";
                self.boardName = 'bus'
                self.navigationKind = 3;
            }
        },
        getfilteredData() {
            var self = this

            axios.post(`${global.base}/board/search`, {boardKind: self.boardKind, search: self.filter_content})
            .then(response => {
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
                console.log(response)
            })
            
        },
    }

}
</script>

<style>
#bt_write_div {
  margin-left: auto;
}

#pagination{
  width: 100%;
  text-align: center;
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