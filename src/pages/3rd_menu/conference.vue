<template>
  <div id="conference" class="container">
    <custom-notice-board></custom-notice-board>
  </div>
</template>

<script>
import customNoticeBoard from '@/pages/3rd_menu/custom_noticeboard'

export default {
  name: 'conference',

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

