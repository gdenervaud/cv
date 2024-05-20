<script lang="ts">
	import { t } from 'svelte-i18n';
	import { calculateDuration } from './durationHelpers';
	import Markdown from './Markdown.svelte';
	const placeholder = '<summary>';
	export let text: string|undefined = undefined;
	export let careerStartDate: string;
	$: localizedText = !text?placeholder:$t(`data.${text}`);
	$: years = calculateDuration(new Date(careerStartDate), new Date()).years;
	$: summary = localizedText.replace(/<years_of_experience>/g, years.toString());
</script>

<div class="summary">
	<i class="fa fa-quote-left"></i>{#key summary}<Markdown text={summary}/>{/key}<i
		class="fa fa-quote-right"
		style="position: absolute; margin-top: -6px;"
	></i>
</div>

<style>
	.summary {
		margin: 0 10px;
		padding-bottom: 6px;
		text-align: justify;
		font-size: 0.75rem;
		line-height: 0.99rem;
    white-space: pre-line;
	}

	.summary i {
		color: #1093b8;
		line-height: 26px;
		font-size: 24px;
		transform: scale(0.8) translateY(2px);
	}
</style>
