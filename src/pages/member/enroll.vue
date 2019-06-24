<template>
  <div id="rental" class="container globalBoard">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import customNavigation1 from '@/pages/2nd_menu/custom_navigation'
import customNavigation2 from '@/pages/3rd_menu/custom_navigation'
import customNavigation3 from '@/pages/4th_menu/custom_navigation'
import router from '@/router'
import axios from 'axios'
import { global } from '@/global'

export default {
    name: 'enroll',

    components:{
        customNavigation1,
        customNavigation2,
        customNavigation3
    },

    data: () => ({
        title: '',
        content: '',
        file: '',
        boardKind: 0,
        navigationKind: 0,
        content_name: '물품대여',
    }),

    mounted(){
        this.boardKind = this.$route.query.boardKind
        this.boardKindFilter(this.boardKind)
    },

    methods: {
        boardKindFilter(kind){
            var self = this
            if(kind == 1){
                self.content_name = '학생청원'
                self.navigationKind = 1
            }
            else if(kind == 2){
                self.content_name = '게시판'
                self.navigationKind = 1
            }
            else if(kind == 3){
                self.content_name = '회의보고'
                self.navigationKind = 2
            }
            else if(kind == 4){
                self.content_name = '재정보고'
                self.navigationKind = 2
            }
            else if(kind == 5){
                self.content_name = '서식자료실'
                self.navigationKind = 2
            }
            else if(kind == 6){
                self.content_name = '물품대여'
                self.navigationKind = 3
            }
            else if(kind == 7){
                self.content_name = '통학버스 및 귀향버스'
                self.navigationKind = 3
            }
        },
        handleFileUpload(){
        var self = this
        self.file = self.$refs.file.files[0];
        },
        submit(){
            var self = this

            let config = {
                headers: {
                'x-access-token': self.$session.get('member_token')
                }
            }

            const formData = new FormData()
            formData.append('boardKind', self.boardKind)
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
