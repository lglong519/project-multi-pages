<template>
	<block-list :blocks="blocks"></block-list>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import BlockList from "@/components/BlockList.vue";
@Component({
  components: {
    BlockList,
  },
})
export default class Top extends Vue {
  blocks: any = [
    {
      name: "日点击榜",
      path: "?top=dayvisit",
    },
    {
      name: "周点击榜",
      path: "?top=weekvisit",
    },
    {
      name: "月点击榜",
      path: "?top=monthvisit",
    },
    {
      name: "总点击榜",
      path: "?top=allvisit",
    },
    {
      name: "周推荐榜",
      path: "?top=weekvote",
    },
    {
      name: "月推荐榜",
      path: "?top=monthvote",
    },
    {
      name: "总推荐榜",
      path: "?top=allvote",
    },
    {
      name: "总收藏榜",
      path: "?top=allFavor",
    },
    {
      name: "字数排行",
      path: "?top=size",
    },
    {
      name: "最新入库",
      path: "?top=createdAt",
    },
    {
      name: "最近更新",
      path: "?top=updatedAt",
    },
    {
      name: "新书榜单",
      path: "?top=new",
    },
  ];
}
</script>
