<template>
	<div>
		<app-header :title="title||'MoFunc'"></app-header>
		<app-main/>
		<app-footer/>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { AppHeader, AppMain, AppFooter } from "./components";

@Component({
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
})
export default class Layout extends Vue {
  @Prop() private title!: string;
}
</script>
