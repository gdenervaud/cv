 <script lang="ts">
	import { t } from 'svelte-i18n';
	import Markdown from './Markdown.svelte';
	export let text: string[]|undefined;
  $: lines = text?text.map(key => `data.${key}`).map(line => $t(line)):undefined;
</script>

{#if (Array.isArray(lines) && lines.length > 0)}
  <div class={`description ${lines.length > 1 ? 'multiline' : ''}`}>
    <ul>
      {#each lines as line}
        <li>{#key line}<Markdown text={line}/>{/key}</li>
      {/each}
    </ul>
  </div>
{/if}

<style>

  .description {
    padding-top: 4px;
  } 

  .description > ul {
		margin: 0;
    padding: 0;
    padding-left: 15px;
		list-style-type: none;
	}

  .description.multiline > ul {
		list-style-type: disc;
	}

  .description.multiline ul li {
    line-height: 0.87rem;
  }

  .description ul li + li {
		padding-top: 2px;
	}

</style>