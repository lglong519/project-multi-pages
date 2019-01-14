<template>
  <div class="home">
    <div class="recommend">
		<div class="title">本站推荐</div>
		<div class="content">
			<ul>
				<li>
					<router-link to="/details">
						<img src="https://www.biquke.com/files/article/image/3/3714/3714s.jpg" alt="">
						<span>123</span>
					</router-link>
				</li>
				<li>
					<router-link to="/details">
						<img src="https://www.biquke.com/files/article/image/3/3714/3714s.jpg" alt="">
						<span>456</span>
					</router-link>
				</li>
				<li>
					<router-link to="/details">
						<img src="https://www.biquke.com/files/article/image/3/3714/3714s.jpg" alt="">
						<span>789</span>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
    <div class="hot">
		<div class="title">热门推荐</div>
		<div class="content">
			<ul>
				<li v-for="(item,i) of fictions" :key="i">
					<div class="cover">
						<img :src="item.cover" onerror="this.src='nocover.jpg'">
					</div>
					<div>
						<h3>{{item.title}}<span class="views"><i>{{item.views}}</i> 在看</span></h3>
						<div class="author">作者:{{item.author}}</div>
						<p class="summary">{{item.summary}}</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
    <div class="recent-update">
		<div class="title">最近更新</div>
		<div class="content">
			<ul>
				<li v-for="(item,i) of fictions" :key="i">
					<div>
						{{i+1}}.<span class="title">{{item.title}}</span> - 
						<span class="author">{{item.author}}</span>
						<span class="createdAt"><i>{{item.createdAt | dateTime("MM-DD HH:mm")}}</i></span>
					</div>
					<p class="summary">{{item.summary}}</p>
				</li>
			</ul>
		</div>
	</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class Home extends Vue {
  fictions: any = [
    {
      cover: "https://www.biquke.com/files/article/image/27/27317/27317s.jpg",
      title: "title",
      author: "author",
      views: 4399,
      summary:
        "今天爱就爱叫佛法缴费机安检哦啊哦安静挂机挂机爱啦啦去哦去哦俺姥阿帕奇;安静挂机挂机爱啦啦去哦去哦哦贴哦安排在苹果奥法哦哦去领取",
      createdAt: new Date(),
    },
    {
      cover: "https://www.biquke.com/files/article/image/27/27317/27317s.jpg",
      title: "title",
      author: "author",
      views: 4399,
      summary:
        "今天爱就爱叫佛法缴费机安检哦啊哦俺姥阿帕奇;安静挂机挂机爱啦啦去哦啊哦俺姥阿哦去哦哦贴哦安排在苹果奥法哦哦去领取",
      createdAt: new Date(),
    },
    {
      cover: "https://www.biquke.com/files/article/image/27/27317/27317s.jpg",
      title: "title",
      author: "author",
      views: 4399,
      summary:
        "今天爱就爱叫佛法缴费机安检哦啊哦俺姥阿帕奇;安静挂机挂机爱啦哦啊哦俺姥阿啦去哦去哦哦贴哦安排在苹果奥法哦哦去领取",
      createdAt: new Date(),
    },
    {
      cover: "https://www.biquke.com/files/article/image/27/27317/27317s.jpg",
      title: "title",
      author: "author",
      views: 4399,
      summary:
        "今天爱就爱叫佛法缴费机安检哦啊哦俺姥阿帕奇;安静挂机挂机爱啦啦哦啊哦俺姥阿去哦去哦哦贴哦安排在苹果奥法哦哦去领取",
      createdAt: new Date(),
    },
  ];
}
</script>
<style lang="scss" src="./index.scss" scoped>
</style>
