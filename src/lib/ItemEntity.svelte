 
<script lang="ts">
	import type { Entity } from '../types.ts';
  export let float = false;
	export let entity: Entity;
	let {name, url, logo} = entity;
	$: companyClass = 'company' + (float?' company-float':'') + (float&&logo?` ${logo}-float`:'');
</script>

<span class={companyClass}>{#if !!url}<a rel="noopener noreferrer" href={url} target="_blank">{name}<i class={logo}></i></a>{:else}{name}{/if}</span>	

<style>

	.company,
	.company a,
	.company a:hover,
	.company a:visited {
		color: #1093b8;
		font-weight: 500;
	}

	.company-float {
		float: right;
		margin-right: 5px;
	}

</style>