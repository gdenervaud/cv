<script lang="ts">
	import type { More } from '../types.ts';
	export let title: string = '';
	export let icon: string = '';
	export let more: More|undefined = undefined;
</script>

<section>
	<div class="title">
		<span class="badge">
			<i class="icon fa {icon}"></i>
		</span>
		<span class="text">{title}</span>
		{#if more}<span class="more">{more.before}<a href={more.link.url} target="_blank" rel="noopener noreferrer">{more.link.name}</a>{more.after}</span>{/if}
	</div>
	<div class="content">
		<slot />
	</div>
</section>

<style>
	section > .title {
		position: relative;
		margin-bottom: 4px;
	}

	section > .title .badge {
		display: inline-block;
		position: absolute;
		border-radius: 30px;
		text-align: center;
		/* border: 15px solid #404040; */
		/* border: 15px solid #013b7b; */
		border: 15px solid #1093b8;
	}

	section > .title .badge .icon {
		line-height: 26px;
		font-size: 24px;
		/* color: #1093b8; */
		/* color: #b3b3b3; */
		/* color: #cccccc; */
		color: #efefff;
		transform: scale(0.8) translateY(2px);
		position: absolute;
		margin-left: -15px;
		margin-top: -15px;
		width: 30px;
	}

	section >.title .text {
		display: inline-block;
		position: relative;
		margin-left: 36px;
		line-height: 32px;
		font-size: 24px;
		font-weight: 500;
		letter-spacing: 0.3rem;
    white-space: nowrap;
		/* color: #014b9c; */
		color: #1093b8;
		/* color: #404040; */
	}

	section >.title .text:first-letter {
		text-transform: capitalize;
	}

	section >.title .more {
		transform: translateY(-2px);
    display: inline-block;
	}

	section >.title .more,
	section >.title .more a,
	section >.title .more a:hover,
	section >.title .more a:visited {
		color: #333;
	}

</style>
