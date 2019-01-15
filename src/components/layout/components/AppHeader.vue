<template>
	<div class="app-header">
		<header>
			<template v-if="headerType=='index'">
				<span class="icon left">
					<a href="user/bookshelf.html"><i class="fa fa-user"></i></a>
				</span>
				<span>{{title}}</span>
				<span class="icon right" @click="searchVisible=!searchVisible"><i class="fa fa-search"></i></span>
			</template>
			<template v-if="headerType=='main'">
				<span class="icon left">
					<a href="index"><i class="fa fa-home"></i></a>
				</span>
				<span>{{title}}</span>
				<span class="icon right">
					<a href="user/bookshelf.html"><i class="fa fa-user"></i></a>
				</span>
			</template>
			<template v-if="$slots.title">
				<span></span>
				<slot name="title"></slot>
				<span></span>
			</template>
		</header>
		<div class="search" :style="searchVisible?'height: 2.3rem;':'height: 0;'">
			<button>书名</button>
			<input type="text" name="searchValue" placeholder="输入搜索词"/>
			<button class="search-btn"><i class="fa fa-search"></i></button>
		</div>
		<nav>
			<a href="index">首页</a>
			<a href="sort.html">分类</a>
			<a href="top.html">排行</a>
			<a href="full.html">完本</a>
		</nav>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class extends Vue {
  @Prop() private title!: string;
  private type: string = "index";
  searchVisible: boolean = false;
  get headerType() {
    if (this.$route.path.includes("contents")) {
      return "contents";
    }
    if (this.$route.path.includes("sections")) {
      return "sections";
    }
    if (this.$route.path.includes("bookshelf")) {
      return "bookshelf";
    }
    if (this.$route.path.includes(".html")) {
      return "main";
    }
    return "index";
  }
}
</script>
