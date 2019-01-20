<template>
  <div class="home">
    <div class="recommend" v-if="hotData.length">
		<div class="title">本站推荐</div>
		<div class="content">
			<ul>
				<li v-for="(item,i) of hotData.slice(0,3)" :key="i">
					<a v-book="item.id">
						<div class="img" :style="'background-image:url('+item.cover+')'">
						</div>
						<span>{{item.title}}</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
	<card-list title="热门推荐" :list="hotData" v-if="hotData.length"></card-list>
    <div class="recent-update" v-if="newData.length">
		<div class="title">最近更新</div>
		<div class="content">
			<ul>
				<li v-for="(item,i) of newData" :key="i">
					<div v-book="item.id">
						{{i+1}}.<span class="title">{{item.title}}</span> - 
						<span class="author">{{item.author}}</span>
						<span class="createdAt"><i>{{item.updatedAt | dateTime("MM-DD HH:mm")}}</i></span>
					</div>
					<p class="summary">{{item.info}}</p>
				</li>
			</ul>
		</div>
	</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop } from "vue-property-decorator";
import CardList from "@/components/CardList.vue";
import Vue from "@/types";

@Component({
  components: {
    CardList,
  },
})
export default class Home extends Vue {
  hotData: any = [];
  newData: any = [];
  async getHot() {
    this.hotData = await this.get("books/");
  }
  async getRecent() {
    this.newData = await this.get("books/?sort=-updatedAt");
  }
  async created() {
    await this.getHot();
    await this.getRecent();
  }
}
</script>
<style lang="scss" src="./index.scss" scoped>
</style>
