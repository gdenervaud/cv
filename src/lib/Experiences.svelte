<script lang="ts">
	import { t } from 'svelte-i18n';
	import { splitExperiences } from './experienceHelpers';
	import Section from './Section.svelte';
	import type { Experience, More } from '../types';
	import ExperienceComponent from './Experience.svelte';
	import ExperienceDescription from './ExperienceDescription.svelte';
	export let list: Experience[] = [];
	export let linkedin: string|undefined = undefined;
	export let yearsOnly = false;
	$: hasData = Array.isArray(list) && list.length > 0;
	$: groups = splitExperiences(list);
	$: more = linkedin?{
		before: `(${$t('more details on')} `,
		link: {
			name: linkedin,
			url: linkedin,
		},
		after: ')'
	}:undefined;
</script>

{#if hasData}
	<div class="experience">
		<Section title={$t('experience')} icon="fa-suitcase" more={more}>
			{#each groups as group}
					{#if Array.isArray(group)}
						<ul>
							{#each group as experience}
								{#if !experience.skip}
									<li class={experience.description?'':'small'}>
										<ExperienceComponent experience={experience} yearsOnly={yearsOnly} />
									</li>
								{/if}
							{/each}
						</ul>
					{:else}
						<ul class="group">
							<li class="group-title no-date">
								<ExperienceComponent experience={group} yearsOnly={yearsOnly} />
							</li>
								{#if group.sections}
									{#each group.sections.experiences as item}
										{#if !item.skip}
											<li class="group-section">
												<ExperienceComponent experience={item} yearsOnly={yearsOnly} />
											</li>
										{/if}
									{/each}
									<li class="no-date">
										<ExperienceDescription text={group.sections.description} />
									</li>
								{/if}
						</ul>
					{/if}
			{/each}
		</Section>
	</div>
{/if}

<style>
	.experience :global(section .content) {
    border-left: 2px solid #47343c;
    padding-left: 10px;
    margin-left: 14px;
    transform: translateY(-4px);
	}

	.experience :global(section .content .header){
		background-color: rgba(131, 157, 165, 0.2);
    padding: 5px 0;
	}

  .experience :global(section .content .header .period) {
    display: inline-block;
    min-width: 145px;
    padding: 0 6px;
  } 

	.experience :global(section .content>ul.group) {
    border-left: 3px solid rgba(131, 157, 165, 0.2);
	}

	.experience :global(section .content>ul>li) {
		margin-top: 4px;
	}

	.experience :global(section .content>ul>li.small) {
		padding-top: 0;
    padding-bottom: 0;
	}

	.experience :global(section .content>ul.group>li.no-date .header .title) {
    margin-left: -15px;
	}

	.experience :global(section .content>ul>li.small::before) {
		top: 0px;
	}

	.experience :global(section .content>ul>li.small::after) {
		top: 2px;
	}

	.experience :global(section .content>ul.group>li) {
		margin-top: 0;
	}

	.experience :global(section .content>ul.group>li .header) {
    padding: 2px 0;
	}
	
	.experience :global(section .content>ul>li.small .header) {
    padding: 0;
    font-size: 0.6rem;
	}

	.experience :global(section .content>ul.group>li.group-title .header) {
		padding: 3px 0;
	}

	.experience :global(section .content>ul.group>li .description) {
    padding-top: 1px;
	}

	.experience :global(section .content>ul.group>li.group-title .description) {
    padding-top: 4px;
    padding-bottom: 2px;
	}

	.experience :global(section .content>ul.group>li.group-section) {
		margin-left: 5px;
	}

	.experience :global(section .content>ul>li::before) {
    position: absolute;
    top: 7px;
    margin-left: -17px;
    border: 6px solid #47343c;
    border-radius: 6px;
    line-height: 0px;
    content: "";
	}

	.experience :global(section .content>ul.group>li.group-section::before) {
    margin-left: -25px;
	}

	.experience :global(section .content>ul.group>li+li::before) {
    top: 8px;
	}
	
	.experience :global(section .content>ul>li+li::before) {
    top: 12px;
	}

	.experience :global(section .content>ul>li::after) {
    position: absolute;
    top: 9px;
    margin-left: -15px;
    border: 4px solid white;
    border-radius: 4px;
    line-height: 0px;
    content: "";
	}

	.experience :global(section .content>ul.group>li.group-section::after) {
    margin-left: -23px;
	}

	.experience :global(section .content>ul.group>li::after) {
			top: 10px;
	}

	.experience :global(section .content>ul>li+li::after) {
    top: 14px;
	}

	.experience :global(section .content>ul.group>li.no-date::before),
	.experience :global(section .content>ul.group>li.no-date::after) {
    display: none;
	}

</style>
