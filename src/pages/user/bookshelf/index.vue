<template>
	<div class="app-container">
		<div v-if="!bookList||!bookList.length" class="empty">
			<div>还木有任何书籍( ˙﹏˙ )</div>
		</div>
		<div v-else class="book-list" v-for="(item,i) of bookList" :key="i">
			<div>书名: <a v-book="item.id">{{item.title}}</a></div>
			<div>最新: <a v-section="123">{{item.lastSection}}</a></div>
			<div>书签: <a v-if="item.mark" v-section="123">{{item.mark}}</a>
			<span v-else>无书签</span>
			</div>
			<div class="clr-red" @click="remove(item,i)">删除本书</div>
		</div>
	</div>
</template>
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

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Bookshelf extends Vue {
  bookList: any = [
    {
      id: 9377,
      cover: "https://www.biquke.com/files/article/image/27/27317/27317s.jpg",
      title: "飞剑问道",
      author: "author",
      views: 4399,
      lastSection: "第十九篇 第五章 丹药",
      mark: "",
      summary: "",
      createdAt: new Date(),
    },
    {
      id: 9377,
      cover: "https://www.biquke.com/files/article/image/27/27317/27317s.jpg",
      title: "无行天",
      author: "author",
      lastSection: "第十九篇 第五章 丹药",
      views: 4399,
      mark: "第十九篇 第五章 丹药",
      summary: "",
      createdAt: new Date(),
    },
    {
      id: 9377,
      cover: "https://www.biquke.com/files/article/image/27/27317/27317s.jpg",
      title: "圣墟",
      author: "author",
      lastSection: "第十九篇 第五章 丹药",
      views: 4399,
      mark: "",
      summary: "",
      createdAt: new Date(),
    },
    {
      id: 9377,
      cover: "https://www.biquke.com/files/article/image/27/27317/27317s.jpg",
      title: "贼猫",
      lastSection: "第十九篇 第五章 丹药",
      author: "author",
      mark: "第十九篇 第五章 丹药",
      views: 4399,
      summary: "",
      createdAt: new Date(),
    },
  ];
  remove(item: any, index: number) {
    if (item && item.id) {
      confirm(`确定要删除 ${item.title}?`) && this.bookList.splice(index, 1);
    }
  }
}
</script>
