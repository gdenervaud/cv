<script lang="ts">
	import { t } from 'svelte-i18n';
	import Section from './Section.svelte';
	export let list: string[] = [];
	$: hasData = Array.isArray(list) && list.length > 0;
</script>

{#if hasData}
	<div class="interests">
		<Section title={$t('hobbies')} icon="fa-paper-plane">
			<ul>
				{#each list as name}
					<li>{$t(`data.${name}`)}</li>
				{/each}
			</ul>
		</Section>
	</div>
{/if}

<style>

	.interests ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
	}

	.interests ul li {
    display: block;
    box-sizing: content-box;
    position: relative;
	}

	.interests ul>li {
    display: inline;
    box-sizing: content-box;
    position: relative;
  }

	.interests ul>li+li:before {
    content: ", ";
	}
</style>
