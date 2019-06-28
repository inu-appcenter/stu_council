<template>
  <div id="custom_navigation" class="container">
    <left-navigation class="board" :fix_notice_items="fix_items" :page_name="page_name"></left-navigation>
  </div>
</template>

<style>
#custom_navigation {
  padding: 0px;
  margin: 0px;
}
</style>


<script>
import leftNavigation from "@/components/left_navigation";
import { global } from "@/global";

export default {
  name: "custom_navigation",

  created() {},

  methods: {},

  components: {
    leftNavigation
  },

  data: () => ({
    fix_items: global.thirdPageItems,
    page_name: "활동보고"
  })
};
</script>

