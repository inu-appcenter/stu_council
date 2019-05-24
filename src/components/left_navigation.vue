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

<style>
    .navigation_body{
        padding-top: 100px;
    }

    #navigation_title{
        width: 250px;
        height: 34px;
        font-family: NotoSansCJKkr;
        font-size: 23px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.48;
        letter-spacing: normal;
        color: #111111;
    }

    .btn_fix{
        display: inline-block;
        height: 50px;
        width: 100%;
        font-family: NotoSansCJKkr;
        font-size: 18px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        letter-spacing: normal;
        text-align: left;
        color: #111111;
        padding-left: 30px;
        padding-top: 0px;
        padding-bottom: 0px;
    }

    #fix_table{
        border-bottom: 1.5px solid #f5f5f5;
        width: 95%;
    }

    #navigation_board{
        width: 250px;
        background-color: #ffffff;
        border-top: 3px solid #000000;
        border-bottom: 3px solid #000000;
        margin-top: 7px;
    }
</style>


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

    data: () => ({
    }),

  methods: {
      btnEvent(itemName){
          var self = this
          if(itemName == '회의보고'){
              self.$router.push('conference')
          }
          else if(itemName == '재정보고'){
              self.$router.push('financial')
          }
          else if(itemName == '자료실'){
              self.$router.push('formdoc')
          }
          else if(itemName == '학생청원'){
              self.$router.push('petition')
          }
          else if(itemName == '게시판'){
              self.$router.push('board')
          }
          else if(itemName == '물품대여'){
              self.$router.push('rental')
          }
          else if(itemName == '통학버스 및 귀향버스'){
              self.$router.push('bus')
          }
          else{
              console.error("경로가 잘못 되었습니다")
          }
      }
  },
}
</script>