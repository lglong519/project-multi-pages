<template>
	<div>
		<transition name="fade-transform" mode="out-in">
			<router-view/>
		</transition>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AppMain extends Vue {}
</script>
