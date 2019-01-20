<template>
	<div class="app-container">
		<div v-if="!bookList||!bookList.length" class="empty">
			<div>还木有任何书籍( ˙﹏˙ )</div>
		</div>
		<div v-else class="book-list" v-for="(item,i) of bookList" :key="i">
			<div>书名: <a v-book="item.book">{{item.btitle}}</a></div>
			<div>最新: <a v-section="item.sid">{{item.stitle}}</a></div>
			<div>书签: <a v-if="item.mid" v-section="item.mid">{{item.mtitle}}</a>
			<span v-else>无书签</span>
			</div>
			<div class="clr-red" @click="remove(item,i)">删除本书</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import Vue from "@/types";

@Component
export default class Bookshelf extends Vue {
  bookList: any = [];
  bookshelf: any;
  async getData() {
    this.bookshelf = await this.get("dis/me/bookshelf");
    this.bookList = this.bookshelf.books;
  }
  async remove(item: any, index: number) {
    if (item && item.id && confirm(`确定要删除 ${item.btitle}?`)) {
      await this.del(`dis/me/bookshelf/books/${item.book}`);
      this.getData();
    }
  }
  created() {
    this.getData();
  }
}
</script>

<style lang="scss" scoped>
@import "../../../styles/variables.scss";

.app-container {
  padding: 0.5rem;
  a:hover {
    color: $color_red;
  }
  .book-list {
    border-bottom: 0.05rem solid $color_green;
    > div {
      margin: 0.55rem 0;
    }
  }
  .empty {
    margin: 0 auto;
    display: table;
    height: 8rem;
    > div {
      display: table-cell;
      vertical-align: middle;
    }
  }
}
</style>
