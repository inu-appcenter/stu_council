<template>
    <div>
        디테일 페이지
    </div>
</template>

<script>

export default {
  name: 'detail',

  created() {
      alert(this.$route.query.boardId)
      alert(this.$route.query.boardKind)
  },

  data: () => ({

    }),

}
</script>
