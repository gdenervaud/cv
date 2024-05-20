 
<script lang="ts">
	import ItemPeriod from './ItemPeriod.svelte';
	import ItemTitle from './ItemTitle.svelte';
	import ItemEntity from './ItemEntity.svelte';
	import type { Entity } from '../types.ts';
	export let period: string;
	export let title: string;
	export let translateTitle: boolean = false;
	export let more: string|undefined = undefined;
	export let entity: Entity|undefined = undefined;
	export let entityFloat = false;
</script>

<div class="header">
	<ItemPeriod period={period} />
	<ItemTitle title={title} more={more} translate={translateTitle} />
	{#if entity}<ItemEntity entity={entity} float={entityFloat} />{/if}	
</div>

<style>

	.header {
    padding-top: 4px;
    font-size: 0.9rem;
	}

</style>