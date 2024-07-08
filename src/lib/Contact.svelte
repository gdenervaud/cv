<script lang="ts">
	import { t } from 'svelte-i18n';
	//import { calculateAgeToDate } from './durationHelpers';
	import Section from './Section.svelte';
	import type { Contact } from '../types.ts';
	export let contact: Partial<Contact> = {};
	let {
		email,
		phone,
		address,
		locationUrl,
		nationality,
		birthday,
		maritalStatus,
		nbOfChildren,
		linkedin,
		github
	}: Partial<Contact> = {
		email: '<email>',
		address: '<address>',
		locationUrl: '<locationUrl>',
		nationality: 'nationality',
		maritalStatus: '<maritalStatus>',
		linkedin: '<linkedin>',
		github: '<github>',
		...contact
	};
	// const age = birthday
	// 	? calculateAgeToDate(new Date(birthday), new Date()).toString()
	// 	: '<birthday>';
</script>

<div class="contact">
	<Section title={$t('contact')} icon="fa-user">
		<div class="tel">
			<i class="fa fa-phone" aria-hidden="true"></i><span style="font-style: italic;"
				>{phone ? phone : $t('available upon request')}</span
			>
		</div>
		<div class="email">
			<a href={`mailto:${email}`} 
				><i class="fa fa-envelope" aria-hidden="true"></i><span>{email}</span></a
			>
		</div>
		<div class="linkedin">
			<a href={linkedin} target="_blank" rel="noopener noreferrer"
				><i class="fa fa-linkedin" aria-hidden="true"></i><span>{linkedin}</span></a
			>
		</div>
		<div class="github">
			<a href={github} target="_blank" rel="noopener noreferrer"
				><i class="fa fa-github" aria-hidden="true"></i><span>{github}</span></a
			>
		</div>
		<!-- <div class="address"><i class="fa fa-home" aria-hidden="true"></i><span alt="rue des Charmilles 10, 1203 Genève"><span>rue des Charmilles 10, 1203 Genève</span></span></div> -->
		<div class="location">
			<a href={locationUrl} target="_blank" rel="noopener noreferrer"
				><i class="fa fa-map-marker" aria-hidden="true"></i><span>{$t(`data.${address}`)}</span></a
			>
		</div>
		<div class="info">
			<div class="nationality"><span class="label">{$t('nationality')}</span> <span>{$t(`data.${nationality}`)}</span></div>
			<!-- <div class="age">
				<span class="label">{$t('age')}</span><span
					><span>{age}</span>, <span>{$t(`data.${maritalStatus}`)}</span>,
					<span
						>{nbOfChildren ? (nbOfChildren > 1 ? `${nbOfChildren} ${$t('children')}` : `1 ${$t('child')}`) : ''}</span
					></span
				>
			</div> -->
		</div>
		<div>
			<div class="references">
				<span class="label">{$t('references')}</span><span style="font-style: italic;"
				>{$t('available upon request')}</span
			>
		</div>
	</div>
	</Section>
</div>

<style>

	.contact :global(section .title) {
		display: none;
	}

	.contact :global(section .content) {
		margin-top: 2px;
	}

	.contact :global(section .content > div + div) {
		padding-top: 5px;
	}

	.contact :global(section .content .info) {
		margin-top: 3px;
	}

	.contact :global(section .content .info > div + div) {
		padding-top: 2px;
	}

	.contact :global(section .content div span),
	.contact :global(section .content div a) {
		white-space: nowrap;
	}

	.contact :global(section .content div.linkedin span) {
		font-weight: 500;
	}

	.contact :global(section .content div.github span) {
		font-weight: 500;
	}

	.contact :global(section .content div .label) {
		display: inline-block;
		font-weight: bold;
		white-space: nowrap;
	}

	.contact :global(section .content div .label:first-letter) {
		text-transform: capitalize;
	}

	.contact :global(section .content div i + span),
	.contact :global(section .content div .label + span) {
		padding-left: 10px;
	}

	.contact :global(section .content .email i + span) {
		padding-left: 8px;
		font-weight: 500;
	}

	.contact :global(section .content .location i) {
		padding-left: 3px;
	}

	.contact :global(section .content .info .nationality .label + span) {
		display: inline-block;
		padding-left: 6px;
	}

	.contact :global(section .content .info .nationality .label + span:first-letter) {
		text-transform: capitalize;
	}

	.contact :global(section .content div .references .label + span) {
		display: inline-block;
		padding-left: 6px;
	}

</style>
