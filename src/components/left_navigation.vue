<template>
    <div class="navigation_body">
        <div id="navigation_title">{{page_name}}</div>
        <div id="navigation_board">
            <table id="fix_table" v-for="(item, index) in this.fix_notice_items" :key="index">
                <button type="button" class="btn_fix" @click="btnEvent(item)">{{item}}</button>
            </table>
        </div>
    </div>
</template>

<script>
import router from '@/router'

export default {
    name: 'noticeboard',

    props: {
        fix_notice_items: {
            type: Array,
            default: () =>(['아이템1', '아이템2', '아이템3', '아이템4', '아이템5'])
        },
        page_name:{
            type: String,
            default: () => ("대표 페이지")
        },
    },

    created(){
    },

    mounted(){
    },

    data: () => ({
        selected: true,
        boardKind: 0,
    }),

  methods: {
      btnEvent(itemName){
          var self = this
          if(itemName == '총학생회 소개'){
              self.$router.push('introduce')
          }
          else if(itemName == '총학생회 위치'){
              self.$router.push('location')
          }
          else if(itemName == '회의보고'){
              self.$router.push({
                  name: 'conference',
                  query: {
                      boardKind: 3,
                      page: 1
                  }
              })
              window.location.reload(true)
          }
          else if(itemName == '재정보고'){
              self.$router.push({
                  name: 'financial',
                  query: {
                      boardKind: 4,
                      page: 1
                  }
              })
              window.location.reload(true)
          }
          else if(itemName == '자료실'){
              self.$router.push({
                  name: 'formdoc',
                  query: {
                      boardKind: 5,
                      page: 1
                  }
              })
              window.location.reload(true)
          }
          else if(itemName == '학생청원'){
              self.$router.push({
                  name: 'petition',
                  query: {
                      boardKind: 1,
                      page: 1
                  }
              })
              window.location.reload(true)
          }
          else if(itemName == '게시판'){
              self.$router.push({
                  name: 'board',
                  query: {
                      boardKind: 2,
                      page: 1
                  }
              })
              window.location.reload(true)
          }
          else if(itemName == '물품대여'){
              self.$router.push({
                  name: 'rental',
                  query: {
                      boardKind: 6,
                      page: 1
                  }
              })
              window.location.reload(true)
          }
          else if(itemName == '통학버스 및 귀향버스'){
              self.$router.push({
                  name: 'bus',
                  query: {
                      boardKind: 7,
                      page: 1
                  }
              })
              window.location.reload(true)
          }
          else{
              console.error("경로가 잘못 되었습니다")
          }

          self.boardKind = this.$route.query.boardKind
      },
  },
}
</script>
