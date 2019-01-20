<template>
	<div>
		<ul class="block">
			<li v-for="(item,i) of blocks" :key="i">
				<div :class="{active:active(item)}">
					<router-link :to="item.path">{{item.name}}</router-link>
				</div>
			</li>
		</ul>
		<card-list :title="title" :list="books" v-if="books.length">
			<span slot-scope="{ data }">
				<i>{{filter=='sort'?data.status:data.views}}</i>{{filter=='sort'?"":"人在看"}}
			</span>
		</card-list>
	</div>
</template>
<script lang="ts">
import { Component, Prop, Watch } from "vue-property-decorator";
import CardList from "@/components/CardList.vue";
import Vue from "@/types";

@Component({
  components: {
    CardList,
  },
})
export default class BlockList extends Vue {
  @Prop() blocks: any;
  @Prop() filter!: string;
  title: string = "";
  books: any = [];
  @Watch("$route")
  handle() {
    this.queryBooks();
  }
  active(item: any) {
    let { type } = this.$route.query;
    return item.path.includes(type);
  }
  async queryBooks() {
    let { type } = this.$route.query;
    if (type) {
      let url = `books/?q={"sort":"${type}"}&sort=-updateDate`;
      if (this.filter != "sort") {
        url = `books/?sort=-${type}`;
      }
      this.books = await this.get(url);
      if (this.books.length) {
        this.blocks.some(
          (item: any) => item.path.includes(type) && (this.title = item.name)
        );
      }
    }
  }
  created() {
    this.queryBooks();
  }
}
</script>
<style lang="scss" scoped>
@import "@/styles/_variables.scss";
.block {
  display: flex;
  justify-items: space-around;
  flex-wrap: wrap;
  font-size: 0.8rem;
  margin: 0.5rem 0;
  li {
    flex-basis: 33.33%;
    flex-shrink: 0;
    flex-flow: 1;
    padding: 0.5rem 0.5rem 0;
    box-sizing: border-box;
    div {
      background-color: #fff;
      padding: 0.7rem 1rem;
      text-align: center;
      border-radius: 0.15rem;
      & a:hover {
        color: $color_red;
      }
      &.active {
        background-color: $color_bg_dark;
      }
    }
  }
}
</style>
