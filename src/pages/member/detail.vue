<template>
    <div>
        <div>제목</div>
        <div>
            <p>{{title}}</p>
            <p>{{author}}</p>
            <p>{{date}}</p>
            <p>{{viewCount}}</p>
            <p>{{body}}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { global } from '@/global'

export default {
  name: 'detail',

  created() {
      this.boardId = this.$route.query.boardId
      this.boardKind = this.$route.query.boardKind
      this.getData()
  },

  data: () => ({
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
                self.date = detailData.date
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
