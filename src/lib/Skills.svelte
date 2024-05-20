<script lang="ts">
	import { t } from 'svelte-i18n';
	import Section from './Section.svelte';
	import SkillGroup from './SkillsGroup.svelte';
	import type { Skill } from '../types';
	export let list: Skill[][] = [];
	$: hasData = Array.isArray(list) && list.length > 0 && list.some(group => Array.isArray(group) && group.length > 0);
</script>

{#if hasData}
	<div class="skills">
		<Section title={$t('skills')} icon="fa-cogs">
			{#each list as group}
				<SkillGroup list={group} />
			{/each}
		</Section>
	</div>
{/if}

<style>

.skills :global(ul+ul) {
	margin-top: 6px;
	border-top: 1.5px dotted #505050;
	padding-top: 6px;
}

</style>