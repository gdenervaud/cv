<script lang="ts">
	import SchoolsSection from './SchoolsSection.svelte';
	import type { School } from '../types';
	export let list: School[] = [];
</script>

<div class="education">
	<SchoolsSection title="education" icon="fa-graduation-cap" translateTitle={true} list={list} />
</div>

<style>

	.education {
    margin-top: 0 !important;
	}

	.education :global(section .title) {
    margin-bottom: 0;
	}

	.education :global(section .content>ul) {
		margin-left: 36px !important;
	}

	.education :global(section .content .header) {
    padding-top: 0;
	}
	
</style>