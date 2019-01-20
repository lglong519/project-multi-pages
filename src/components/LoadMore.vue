<template>
	<div>
		<div class="no-more" v-if="loading"><i class="fa fa-spinner"></i> 内容加载中...</div>
		<div class="no-more" v-if="!loading&&pages-currentPage<=1">没有更多内容了</div>
		<div class="no-more" v-if="!loading&&pages-currentPage>1">滚动加载更多</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class CardList extends Vue {
  @Prop() loading!: boolean;
  @Prop() currentPage!: number;
  @Prop() pages!: number;
}
</script>
