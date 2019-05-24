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
            <table v-for="(item, index) in contents_list" :key="index">
                <div>
                    {{item}}
                </div>
            </table>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
import { global } from '@/global'

export default {
    name: 'noticeboard',

    props: {
        fix_notice_items: {
        type: Array,
        default: () =>(['아이템1', '아이템2', '아이템3', '아이템4', '아이템5'])
        },
    },

    created(){
        this.getContentsList()
    },

    data: () => ({
        contents_list: [],
    }),

  methods: {
      getContentsList(){
          var self = this
          axios.get(`${global.base}/board/all`)
          .then(response =>{
              var dataIndex = 0
              for(var item in response.data){
                self.contents_list.push(response.data[item].title)
                dataIndex += 1
              }
          })
          .catch(error => {
              console.error(error.response + "에러 발생, 게시판 리스트를 불러올 수 없음");
          })
      },
  },
}
</script>