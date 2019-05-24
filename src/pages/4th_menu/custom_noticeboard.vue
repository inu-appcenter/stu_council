<template>
  <div id="conference" class="container">
    <notice-board
    class="board"
    :fix_notice_items = "fix_items"
    :page_name = "page_name"
    ></notice-board>
  </div>
</template>

<script>
import noticeBoard from '@/components/noticeboard'
import {global} from '@/global'

export default {
  name: 'conference',

  created() {
  },

  methods: {
  },

  components: {
        noticeBoard,
    },

  data: () => ({
    fix_items: global.fourthPageItems,
    page_name: '학생복지',
    }),


}
</script>

