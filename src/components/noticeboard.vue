<template>
    <div class="noticeboard_body" style="background: yellow; display: flex;">
        <div id="navigation_board">
            <table v-for="(item, index) in this.fix_notice_items" :key="index">
                <div>
                    {{item}}
                </div>
            </table>
        </div>
        <div id="contents_board">
            <table>
                {{contents_list_name}}
            </table>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
import { global } from '@/global'

export default {
    name: 'noticeboard',

    props: ['fix_notice_items'],

    created(){
        this.getContentsList()
    },

    data: () => ({
        contents_list_name: '',
        fix_notice_items: ['아이템1', '아이템2', '아이템3', '아이템4', '아이템5'],
    }),

  methods: {
      getContentsList(){
          var self = this
          axios.get(`${global.base}/board/all`)
          .then(response =>{
              self.contents_list_name = response.data.name
          })
          .catch(error => {
              console.error(error.response + "에러 발생, 게시판 리스트를 불러올 수 없음");
          })
      },
  },
}
</script>