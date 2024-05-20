 
<script lang="ts">
	import { t } from 'svelte-i18n';
	import Markdown from './Markdown.svelte';
	import ItemTitleMore from "./ItemTitleMore.svelte";
	export let title: string;
	export let more: string|undefined = undefined;
	export let translate: boolean = false;
  $: text = translate?$t(`data.${title}`):title;
</script>

<span class="title">{#key text}<Markdown text={text}/>{/key}<ItemTitleMore text={more} /></span>

<style>
  .title {
    position: relative;
    margin-bottom: 4px;
  }
</style>