<script lang="ts">
	import { t } from 'svelte-i18n';
	import Markdown from './Markdown.svelte';
	const titlePlaceholder = '<job title>';
	const descriptionPlaceholder = '<job description>';
	export let jobTitle: string|undefined= undefined;
	export let jobDescription: string|undefined= undefined;
	$: localizedTitle = !jobTitle?titlePlaceholder:$t(`data.${jobTitle}`);
	$: localizedDescription = !jobDescription?descriptionPlaceholder:$t(`data.${jobDescription}`);
</script>

<div class="text">
	<span class="title">{#key localizedTitle}<Markdown text={localizedTitle}/>{/key}</span><span class="description">{#key localizedDescription}<Markdown text={localizedDescription}/>{/key}</span>
</div>

<style>
  .text {
    text-align: center;
  }
  
	.text .title {
		display: inline-block;
		font-size: 2.6rem;
		font-weight: 300;
	}

	.text .description {
		font-size: 1.3rem;
		font-weight: 300;
	}
</style>
