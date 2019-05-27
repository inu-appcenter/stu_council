<template>
    <div>
        <div>
            <p>제목</p>
            <input type="text" v-model="title">
        </div>
        <div>
            <p>내용</p>
            <input type="text" v-model="content" >
        </div>
        <div>
            <input type="file" ref="file" v-on:change="handleFileUpload()">
        </div>
        <div>
            <button type="button" @click="submit()">게시하기</button>
        </div>
    </div>
</template>

<script>
import router from '@/router'
import axios from 'axios'
import { global } from '@/global'

export default {
    name: 'enroll',

    data: () => ({
        title: '',
        content: '',
        file: '',
        testKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIwMTMwMTQ4NCIsIm5hbWUiOiLsnoTrj5nsmYQiLCJtYWpvciI6ImNvbXB1dGVyU2NpZW5jZSIsInRlbCI6IjAxMDEyMzQ1Njc4IiwidHlwZSI6MSwiaWF0IjoxNTU4ODczMTM1LCJleHAiOjE1NjE0NjUxMzUsInN1YiI6InVzZXJJbmZvIn0.7Fjsj_sJm6P_wlOBFNOjgVdISEfZ9k7oZyrZoAXCA_I'
    }),

    methods: {
        handleFileUpload(){
        var self = this
        self.file = self.$refs.file.files[0];
        },
        submit(){
            var self = this

            let config = {
                headers: {
                'x-access-token': self.testKey
                }
            }

            const formData = new FormData()
            formData.append('boardKind', 6)
            formData.append('title', self.title)
            formData.append('content', self.content)
            formData.append('userFile', self.file)

            axios.post(`${global.base}/board/create`, formData, config)
           .then(response =>{
            if(response.data.ans == 'success'){
                self.$router.push('rental')
            }
          })
          .catch(error => {
              console.error(error.response + "에러 발생, 게시판 리스트를 불러올 수 없음");
          })

        }
    },
}
</script>
