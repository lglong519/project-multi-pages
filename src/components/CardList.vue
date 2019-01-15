<template>
    <div class="card-list">
		<div class="title">{{title}}</div>
		<div class="content">
			<ul>
				<li v-for="(item,i) of list" :key="i">
					<div class="cover">
						<img :src="item.cover" :onerror="global.defaultImg">
					</div>
					<div>
						<h3>{{item.title}}<span class="views">
							<slot :data="item"><i>{{item.views}}</i>人在看</slot>
						</span></h3>
						<div class="author">作者: {{item.author}}</div>
						<p class="summary">{{item.summary}}</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class Home extends Vue {
  @Prop() title!: string;
  @Prop() list: any;
}
</script>
