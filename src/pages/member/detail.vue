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
      content_name: '물품대여',
      boardId: '0',
      boardKind: 'INUAPPCEN',
      title: '',
      author: '',
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
