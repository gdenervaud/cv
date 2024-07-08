<script lang="ts">
	import { locale } from 'svelte-i18n';
	import type { Experience, Project } from '../types';
	import ItemHeader from './ItemHeader.svelte';
	import ExperienceDescription from './ExperienceDescription.svelte';	
	import { isJob, experienceHasSections } from './experienceHelpers';
	export let experience: Experience;
	export let yearsOnly = false;
	let loc = 'en-US';
	
	locale.subscribe(value => value && (loc = value));

	function toLocalDate(date: string|undefined, loc: string, yearsOnly?: boolean): string|undefined {
		if (!date) {
			return undefined;
		}
		if (yearsOnly) {
			return (new Date(date)).toLocaleDateString(loc,  { year: 'numeric' });
		}
		return (new Date(date)).toLocaleDateString(loc,  { year: 'numeric', month: 'short' });
	}
	$: translateTitle = !isJob(experience) && !experienceHasSections(experience);
	$: startDate = toLocalDate(experience.startDate, loc, yearsOnly);
	$: endDate = toLocalDate(experience.endDate, loc, yearsOnly);
	$: period = startDate && endDate?`${startDate} - ${endDate}`:'';
	$: entity = isJob(experience) ? experience.company : (experience as Project).link;
</script>

<ItemHeader period={period} title={experience.title} entity={entity} translateTitle={translateTitle} entityFloat={true} />
<ExperienceDescription text={experience.description} />
