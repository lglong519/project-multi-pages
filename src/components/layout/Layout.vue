<template>
	<div>
		<app-header title="MoFunc"/>
		<app-main>
			<slot></slot>
		</app-main>
		<app-footer/>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { AppHeader, AppMain, AppFooter } from "./components";

@Component({
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
})
export default class Layout extends Vue {}
</script>
