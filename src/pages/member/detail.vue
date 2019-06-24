<template>
  <div id=detail class="container">
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
            <div class="detailComponent" id="content">
                <p>{{body}}</p>
            </div>
        </div>
            </table>
        </div>
        <div class="button_left">
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
import customNavigation from '@/pages/4th_menu/custom_navigation'
import axios from 'axios'
import { global } from '@/global'
import { mapState } from 'vuex'

export default {
  name: 'detail',

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
  },

  components: {
      customNavigation,
  },

  data: () => ({
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
                'x-access-token': self.$session.get('member_token')
                }
            }
            axios.post(`${global.base}/board/one`, {boardKind: self.boardKind, boardId: self.boardId}, config)
            .then(response =>{
                var detailData = response.data
                self.title = detailData.title
                self.author = detailData.author
                self.authorName = detailData.authorName
                self.date = self.getDate(detailData.date)
                self.viewCount = detailData.viewTime
                self.body = detailData.content
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
        go_back() {
          var self = this
          self.boardKind = self.$route.query.boardKind
          self.setBoardFilter(self.boardKind)
          self.$router.push({
                  name: 'rental',
                  query: {
                      boardKind: self.boardName,
                      page: 1
                  }
              })
        }
    }
}
</script>