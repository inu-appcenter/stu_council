<template>
  <div>
    <table id="pagination_table">
      <tbody>
        <tr>
          <vue-ads-pagination
            :total-items="totalItems"
            :max-visible-pages="maxVisiblePages"
            :page="page"
            :loading="loading"
            :items-per-page="itemsPerPage"
            @range-change="rangeChange"
            @page-change="pageChange"
          />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
import { global } from "@/global";
import router from "@/router";
import VueAdsPagination from "vue-ads-pagination";

export default {
  name: "rental",

  watch: {
    contentsItem_list: function() {
      this.getContentsList(this.contentsItem_list);
    }
  },

  props: {
    contentsItem_list: {
      type: Array,
      default: () => ["아이템1", "아이템2", "아이템3", "아이템4", "아이템5"]
    },
    notice_list: {
      type: Array,
      default: () => ["아이템1", "아이템2", "아이템3", "아이템4", "아이템5"]
    }
  },
  mounted() {
    this.boardKind = this.$route.query.boardKind;
    console.log(this.$route.query.page);
  },

  components: { VueAdsPagination },

  data: () => ({
    boardName: "rental",
    filter_content: "",
    checkedPage: 1,
    boardKind: 0,
    contentsAmount: 0,
    startPage: 0,
    endPage: 10,
    pageNumList: [],
    add_pageNum: 0,

    start: null,
    end: null,
    page: 0,
    maxVisiblePages: 4,
    totalItems: 0,
    loading: false,
    itemsPerPage: 7
  }),

  methods: {
    setBoardFilter(boardKind) {
      var self = this;
      if (boardKind == 1) {
        self.boardName = "petition";
      } else if (boardKind == 2) {
        self.boardName = "board";
      } else if (boardKind == 3) {
        self.boardName = "conference";
      } else if (boardKind == 4) {
        self.boardName = "financial";
      } else if (boardKind == 5) {
        self.boardName = "formdoc";
      } else if (boardKind == 6) {
        self.boardName = "rental";
      } else {
        self.boardName = "bus";
      }
    },
    setCheckedPage(checkedPageNum) {
      var self = this;
      self.page = checkedPageNum - 1;
      self.pageNumList.length = 0;
      self.checkedPage = checkedPageNum;
      self.boardKind = self.$route.query.boardKind;
      self.filter_content = self.$route.query.filter_content;
      self.setBoardFilter(self.boardKind);
      self.$router.push({
        name: self.boardName,
        query: {
          boardKind: self.boardKind,
          page: self.checkedPage,
          filter_content: self.filter_content
        }
      });
      self.$emit("pageChanged");
    },
    getContentsList() {
      var self = this;
      var itemLength = self.contentsItem_list.length;
      self.totalItems = self.contentsItem_list.length;
      if (itemLength % 7 == 0) {
        //숫자 셋팅
        self.startPage = 1;
        self.contentsAmount = parseInt(itemLength / 7);
        self.endPage = self.contentsAmount;
      } else if (itemLength / 7 > 1) {
        self.startPage = 1;
        self.contentsAmount = parseInt(itemLength / 7) + 1;
        self.endPage = self.contentsAmount;
      } else {
        self.startPage = 1;
        self.contentsAmount = 1;
        self.endPage = self.contentsAmount;
      }

      self.lastpage = Math.floor((self.contentsItem_list.length - 0.1) / 7) + 1;
      for (var page = self.startPage; page <= self.endPage; page++) {
        self.pageNumList.push(page);
      }
    },
    pageChange(page) {
      this.page = page;
      this.setCheckedPage(page + 1);
    },
    rangeChange(start, end) {
      this.start = start;
      this.end = end;
    }
  }
};
</script>
