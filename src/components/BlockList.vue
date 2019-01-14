<template>
	<ul class="block">
		<li v-for="(item,i) of blocks" :key="i"><div>
			<router-link :to="item.path">{{item.name}}</router-link>
		</div></li>
	</ul>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class Home extends Vue {
  @Prop() blocks: any;
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
      & a:hover {
        color: $color_red;
      }
    }
  }
}
</style>
