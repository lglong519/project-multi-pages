<template>
	<div class="app-header">
		<header>
			<span class="icon left"><router-link to="/user/bookshelf"><i class="fa fa-user"></i></router-link></span>
			<span class="center">{{title}}</span>
			<span class="icon right" @click="searchVisible=!searchVisible"><i class="fa fa-search"></i></span>
		</header>
		<div class="search" :style="searchVisible?'height: 2.3rem;':'height: 0;'">
			<button>书名</button>
			<input type="text" name="searchValue" placeholder="输入搜索词"/>
			<button class="search-btn"><i class="fa fa-search"></i></button>
		</div>
		<nav>
			<router-link to="/">首页</router-link>
			<router-link to="/classify">分类</router-link>
			<router-link to="/ranking-list">排行</router-link>
			<router-link to="/completed">完本</router-link>
		</nav>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class extends Vue {
  @Prop() private title!: string;
  searchVisible: boolean = false;
}
</script>
