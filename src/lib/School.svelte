<script lang="ts">
	import { t } from 'svelte-i18n';
	import ItemHeader from './ItemHeader.svelte';
	import type { School } from '../types';
	export let school: School;
	export let translateTitle: boolean = false;
	export let showIssuer: boolean = true;
	let { year, title, semesters, issuer } = school;
	$: more = semesters ? (semesters>1?`${semesters} ${$t('semesters')}`:`1 ${$t('semester')}`) : undefined;
</script>

<ItemHeader period={year.toString()} title={title} translateTitle={translateTitle} more={more} entity={showIssuer?issuer:undefined} />
