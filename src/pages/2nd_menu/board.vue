<template>
  <div id="board" class="container">
    <custom-notice-board></custom-notice-board>
  </div>
</template>

<script>
import customNoticeBoard from '@/pages/2nd_menu/custom_noticeboard'

export default {
  name: 'board',

  created() {
  },

  methods: {
  },

  components: {
        customNoticeBoard,
    },

  data: () => ({
    }),


}
</script>

