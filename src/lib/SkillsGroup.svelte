<script lang="ts">
	import SkillComponent from './Skill.svelte';
	import type { Skill } from '../types';
	export let list: Skill[] = [];
	export let translate: boolean = false;
	$: hasData = Array.isArray(list) && list.length > 0;
</script>

{#if hasData}
	<ul>
		{#each list as { keywords, level }}
			<li>
				<SkillComponent keywords={keywords} level={level} translate={translate} />
			</li>
		{/each}
	</ul>
{/if}

<style>
	
 ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
	}

	ul li {
    display: block;
    box-sizing: content-box;
    position: relative;
	}

	ul li :global(+ li)	{
		margin-top: 4px;
	}

</style>