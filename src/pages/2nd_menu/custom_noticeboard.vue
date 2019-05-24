<template>
  <div id="conference" class="container">
    <notice-board
    class="board"
    :fix_notice_items = "fix_items"
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
    fix_items: global.secondPageItems,
    }),


}
</script>

