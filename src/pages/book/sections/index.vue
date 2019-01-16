<template>
	<div id="app">
		<layout>
			<div class="app-main">
				<div class="book">
					<div class="cover">
						<img :src="book.cover" :onerror="global.defaultImg">
					</div>
					<div class="book-items">
						<h3>{{book.title}}</h3>
						<div class="book-item">作者: {{book.author}}</div>
						<div class="book-item">分类: <a class="em">{{book.sort}}</a></div>
						<div class="book-item">状态: {{book.status}}</div>
						<div class="book-item ">更新: {{book.updateDate | dateTime}}</div>
						<div class="book-item">最新: <a class="em">{{book.lastSection}}</a></div>
					</div>
				</div>
				<div class="btn-group">
					<button type="button" @click="corfirm">开始阅读</button>
					<button type="button" @click="signup">加入书架</button>
				</div>
				<div class="tab">
					{{book.title}}小说简介
				</div>
				<div class="summary">
					{{book.summary}}
				</div>
				<div class="tab">
					{{book.title}}最新章节 更新时间: {{book.updateDate | dateTime}}
				</div>
				<ul class="sections">
					<li v-for="(item,i) of sections" :key="i">{{item.title}}</li>
				</ul>
				<div class="tab">
					全部章节列表
				</div>
				<ul class="sections">
					<li v-for="(item,i) of sections" :key="i">{{item.title}}</li>
				</ul>
			</div>
		</layout>
	</div>
</template>


<style lang="scss" scoped>
@import "../../../styles/variables.scss";

.app-main {
  padding: 0.1rem 0.1rem 2rem 0.1rem;
  background-color: #fff;
}
.book {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  padding: 0.3rem 0;
  margin: 0.5rem 0;
  h3 {
    font-weight: normal;
    line-height: 1.5;
  }

  .cover {
    width: 5.5rem;
    padding: 0.15rem;
    margin: 0 0.2rem 0 0.8rem;
    border: 0.05rem solid $color_border_light;
    font-size: 0;
    img {
      width: 100%;
      border: 0;
    }
  }

  .book-items {
    flex: 1;
    padding-left: 0.5rem;
    overflow: hidden;

    .book-item {
      padding: 0.1rem 0;
      margin: 0.2rem 0;
      color: $color_font_light;
      font-size: 0.7rem;
      .em {
        font-size: 0.7rem;
        color: $color_font_std;
      }
    }
  }
}
.btn-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
button {
  padding: 0;
  height: 2.2rem;
  width: 48%;
  border: none;
  color: #fff;
  background-color: $color_cyan;
  border-radius: 0.2rem;
}
.tab {
  margin: 0.5rem 0;
  padding-left: 0.3rem;
  line-height: 2.2;
  overflow: hidden;
  white-space: nowrap;
  word-break: all;
  text-overflow: ellipsis;
  color: $color_font_std;
  border-bottom: 0.05rem solid $color_cyan;
  background-color: $color_bg;
}
.summary {
  padding: 0 0.6rem;
  color: $color_font_light;
  line-height: 1.8;
  font-size: 0.8rem;
  letter-spacing: 0.03rem;
}
.sections {
  padding-bottom: 0.5rem;
  li {
    padding-left: 0.7rem;
    line-height: 2.2;
    border-bottom: 0.05rem solid $color_border_light;
  }
}
</style>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import Layout from "@/components/layout/Layout.vue";

@Component({
  components: {
    Layout,
  },
})
export default class Sections extends Vue {
  book: any = {
    id: 9377,
    cover: "https://www.biquke.com/files/article/image/27/27317/27317s.jpg",
    title: "飞剑问道",
    author: "番茄",
    views: 4399,
    lastSection: "第十九篇 第五章 丹药",
    mark: "",
    sections: 375,
    upDate: new Date(),
    updateDate: new Date(),
    status: "连载中",
    sort: "修真小说",
    createdAt: new Date(),
    summary:
      "今天爱就爱叫佛法缴费机安检哦啊哦安静挂机挂机爱啦啦去哦去哦俺姥阿帕奇安静挂机挂机爱啦啦去哦去哦哦贴哦安排在苹果奥法哦哦去领取",
  };
  sections: any = [
    {
      book: 9377,
      title: "第1章",
    },
    {
      book: 9377,
      title: "第2章",
    },
    {
      book: 9377,
      title: "第3章",
    },
    {
      book: 9377,
      title: "第4章",
    },
    {
      book: 9377,
      title: "第5章",
    },
    {
      book: 9377,
      title: "第6章",
    },
  ];
  @Provide("title")
  get title() {
    return `${this.book.title} 目录(共${this.book.sections}章)`;
  }
  created() {
    this.$route.path = "sections";
  }
}
</script>
