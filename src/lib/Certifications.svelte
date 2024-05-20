<script lang="ts">
	import SchoolsSection from './SchoolsSection.svelte';
	import type { School } from '../types';
	export let list: School[] = [];
</script>

<div class="certifications">
	<SchoolsSection title="certifications" icon="fa-certificate" list={list} showIssuer={false} />
</div>

<style>
	.certifications {
    margin-top: 2px !important;
	}
	.certifications :global(section .title) {
    margin-bottom: 0;
	}

	.certifications :global(section .content>ul) {
    margin-left: 36px !important;
	}

	.certifications :global(section .content .header) {
    padding-top: 0;
	}

</style>