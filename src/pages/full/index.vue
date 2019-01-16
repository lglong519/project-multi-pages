<template>
	<card-list title="完本小说" :list="fictions">
			<i slot-scope="{ data }">{{data.updatedAt | dateTime("YYYY-MM-DD")}}完本</i>
	</card-list>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import CardList from "@/components/CardList.vue";

@Component({
  components: {
    CardList,
  },
})
export default class Full extends Vue {
  fictions: any = [
    {
      cover: "https://www.biquke.com/files/article/image/27/27317/27317s.jpg",
      title: "title",
      author: "author",
      views: 4399,
      summary:
        "今天爱就爱叫佛法缴费机安检哦啊哦安静挂机挂机爱啦啦去哦去哦俺姥阿帕奇;安静挂机挂机爱啦啦去哦去哦哦贴哦安排在苹果奥法哦哦去领取",
      updatedAt: new Date(),
    },
    {
      cover: "https://www.biquke.com/files/article/image/27/27317/27317s.jpg",
      title: "title",
      author: "author",
      views: 4399,
      summary:
        "今天爱就爱叫佛法缴费机安检哦啊哦俺姥阿帕奇;安静挂机挂机爱啦啦去哦啊哦俺姥阿哦去哦哦贴哦安排在苹果奥法哦哦去领取",
      updatedAt: new Date(),
    },
    {
      cover: "https://www.biquke.com/files/article/image/27/27317/27317s.jpg",
      title: "title",
      author: "author",
      views: 4399,
      summary:
        "今天爱就爱叫佛法缴费机安检哦啊哦俺姥阿帕奇;安静挂机挂机爱啦哦啊哦俺姥阿啦去哦去哦哦贴哦安排在苹果奥法哦哦去领取",
      updatedAt: new Date(),
    },
    {
      cover: "https://www.biquke.com/files/article/image/27/27317/27317s.jpg",
      title: "title",
      author: "author",
      views: 4399,
      summary:
        "今天爱就爱叫佛法缴费机安检哦啊哦俺姥阿帕奇;安静挂机挂机爱啦啦哦啊哦俺姥阿去哦去哦哦贴哦安排在苹果奥法哦哦去领取",
      updatedAt: new Date(),
    },
  ];
}
</script>
