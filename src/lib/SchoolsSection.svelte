<script lang="ts">
	import { t } from 'svelte-i18n';
	import Section from './Section.svelte';
	import SchoolComponent from './School.svelte';
	import type { School } from '../types';
	export let list: School[] = [];
	export let title: string = '<title>';
	export let icon: string = '<icon>';
	export let translateTitle: boolean = false;
	export let showIssuer: boolean = true;
	$: hasData = Array.isArray(list) && list.length > 0;
</script>

{#if hasData}
	<Section title={$t(title)} icon={icon}>
		<ul>
			{#each list as school}
				<li>
					<SchoolComponent school={school} translateTitle={translateTitle} showIssuer={showIssuer} />
				</li>
			{/each}
		</ul>
	</Section>
{/if}