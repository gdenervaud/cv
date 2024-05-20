<script lang="ts">
	import type { Experience, Project } from '../types';
	import ItemHeader from './ItemHeader.svelte';
	import ExperienceDescription from './ExperienceDescription.svelte';	
	import { isJob, experienceHasSections } from './experienceHelpers';
	export let experience: Experience;
	$: translateTitle = !isJob(experience) && !experienceHasSections(experience);
	$: period = experience.startDate && experience.endDate?`${experience.startDate} - ${experience.endDate}`:'';
	$: entity = isJob(experience) ? experience.company : (experience as Project).link;
</script>

<ItemHeader period={period} title={experience.title} entity={entity} translateTitle={translateTitle} entityFloat={true} />
<ExperienceDescription text={experience.description} />
