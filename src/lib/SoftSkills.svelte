<script lang="ts">
	import { t } from 'svelte-i18n';
	import Section from './Section.svelte';
	import SkillGroup from './SkillsGroup.svelte';
	import type { Skill } from '../types';
	export let list: Skill[] = [];
	$: hasData = Array.isArray(list) && list.length > 0;
</script>

{#if hasData}
	<div class="softSkills">
		<Section title={$t('strengths')} icon="fa-magic">
			<SkillGroup list={list} translate={true} />
		</Section>
	</div>
{/if}
