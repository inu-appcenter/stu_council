<template>
  <div id=detail class="container">
    <div class="body_container">
      <custom-navigation1 v-if="navigationKind === 1"></custom-navigation1>
      <custom-navigation2 v-else-if="navigationKind === 2"></custom-navigation2>
      <custom-navigation3 v-else-if="navigationKind === 3"></custom-navigation3>
      <div id="notice_contents">
        <div id="content_name">
          <div>
            {{content_name}}
          </div>
        </div>
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
                        <p class="flexComponent">{{authorName}}</p>
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
          <div>
            <button v-if="files != null" style="width: 100%; background: #EAEAEA; text-align: left;">{{files}}</button>
          </div>
            <div class="detailComponent" id="content">
                <p>{{body}}</p>
            </div>
        </div>
            </table>
        </div>
        <div class="button_left" v-if="owner">
          <button type="button" @click="update_detail()">수정</button>
          <button type="button" @click="delete_detail()">삭제</button>
        </div>
        <div class="button_right">
          <button type="button" @click="go_back()">목록보기</button>
        </div>


      </div>
    </div>
  </div>
</template>
<style> 

</style>


<script>
import customNavigation1 from "@/pages/2nd_menu/custom_navigation";
import customNavigation2 from "@/pages/3rd_menu/custom_navigation";
import customNavigation3 from "@/pages/4th_menu/custom_navigation";
import axios from 'axios'
import { global } from '@/global'
import { mapState } from 'vuex'

export default {
  name: 'detail',

  components:{
customNavigation1,
    customNavigation2,
    customNavigation3
  },

  computed: {
    ...mapState([
      'fail_access',
    ]),
  },

  created() {
      this.fail_access(! this.$session.exists())
  },

  mounted() {
    this.boardId = this.$route.query.boardId
    this.boardKind = this.$route.query.boardKind
    this.getData()
    this.setBoardFilter(this.boardKind)
  },

  data: () => ({
    navigationKind: 0,
      boardName: '',
      content_name: '물품대여',
      boardId: '0',
      boardKind: 'INUAPPCEN',
      title: '',
      author: '',
      authorName: '',
      date: '',
      viewCount: '',
      body: '',
      files: '',
      owner: false,
    }),

    watch:{
      author: function(){
        this.boardOwner()
      }
    },

    methods: {
      boardOwner(){
        if(this.author == this.$session.get('member_id')){
          this.owner = true
        }
        else{
          this.owner = false
        }
      },
        getDate(date){
          var result = date.split(' ');
          return result[0] + " " +  result[1]
        },
        getData(){
            var self = this
            let config = {
                headers: {
                'x-access-token': self.$session.get('member_token')
                }
            }
            console.log(self.$session.get('member_token'))
            axios.post(`${global.base}/board/one`, {boardKind: self.boardKind, boardId: self.boardId}, config)
            .then(response =>{
                var detailData = response.data
                self.title = detailData.title
                self.author = detailData.author
                self.authorName = detailData.authorName
                self.date = self.getDate(detailData.date)
                self.viewCount = detailData.viewTime
                self.body = detailData.content
                self.files = detailData.file[0]
                console.log(response)
            })
            .catch(error => {
                console.error(error.response + "에러 발생, 게시판 리스트를 불러올 수 없음!!");
            })
        },
        update_detail(){
          var self = this
          self.$router.push({
          name: 'enroll',
          query: {
          boardKind: self.boardKind,
          update: 1
        },
        params: {
          pre_boardKind: self.boardKind,
          pre_boardId: self.boardId,
          pre_title: self.title,
          pre_content: self.body,
        }
      })

        },
        delete_detail() {
          var self = this
          let _confirm = confirm("해당 게시물을 삭제하시겠습니까?")
          if(_confirm) {
            if(self.author == self.$session.get('member_id')) {
              axios.post(`${global.base}/board/delete`,
              {
                token: self.$session.get('member_token'),
                boardKind: self.boardKind,
                boardId: self.boardId
              })
              .then(response => {
                alert("게시물이 삭제되었습니다.")
                self.go_back()
                console.log(response)
              })
              .catch(error => {
                console.error(error.response)
              })
            }
            else {
              alert("해당 게시물 삭제에 대한 권한이 없습니다.")
            }
          }
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
        else{
          self.content_name = "통학버스 및 귀향버스";
            self.boardName = 'bus'
            self.navigationKind = 3;
        }
    },
        go_back() {
          var self = this
          self.boardKind = self.$route.query.boardKind
          self.setBoardFilter(self.boardKind)
          self.$router.push({
                  name: self.boardName,
                  query: {
                      boardKind: self.boardKind,
                      page: 1
                  }
              })
        }
    }
}
</script>