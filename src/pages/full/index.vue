<template>
	<card-list title="完本小说" :list="fullData" v-if="fullData.length">
			<i slot-scope="{ data }">{{data.updateDate | dateTime("YYYY-MM-DD")}}完本</i>
	</card-list>
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
export default class Full extends Vue {
  fullData: any = [];
  async getFul() {
    this.fullData = await this.get(
      'books/?q={"status":"完本"}&sort=-updateDate'
    );
  }
  created() {
    this.getFul();
  }
}
</script>
