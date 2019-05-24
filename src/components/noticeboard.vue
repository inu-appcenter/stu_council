<template>
    <div class="noticeboard_body">
        <div id="navigation_board">
        </div>
        <div id="contents_board">
            <div id="fix_noticeboard">
                <table v-for="(item, index) in this.fix_notice_items" :key="index">
                    {{item}}
                </table>
            </div>
            <div id="flex_noticeboard">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'noticeboard',

    props: ['fix_notice_items'],

    data: () => ({
    fix_notice_items: ['아이템1', '아이템2', '아이템3'],
  }),

  methods: {
  },
}
</script>