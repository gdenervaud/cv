<script lang="ts">
	import { t } from 'svelte-i18n';
	export let keywords: string[];
	export let level: number;
	export let translate: boolean = false;
	$: label = (Array.isArray(keywords)?(translate?keywords.map(w => `data.${w}`).map(w => $t(w)):keywords):[]).join(' / ')
</script>

<span class="label">{label}</span>
<span class="stars" value={level}>
	<span class="star"></span>
	<span class="star"></span>
	<span class="star"></span>
	<span class="star"></span>
	<span class="star"></span>
</span>

<style>
	
	.label {
		display: inline-block;
	}
	
	.label:first-letter {
		text-transform: capitalize;
	}

	.stars {
			font-size: 0;
			float: right;
	}

	.star {
			display: inline-block;
			width: 12px;
			height: 12px;
			margin: 0 1px;
			background-size: 12px 12px;
			background-image: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="utf-8"?><svg width="220" height="220" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="110" r="100" fill="transparent" stroke="%23999999" stroke-width="20" /></svg>');
	}

	.stars[value="1"] .star:nth-child(1),
	.stars[value="1.5"] .star:nth-child(1),
	.stars[value="2"] .star:nth-child(1),
	.stars[value="2.5"] .star:nth-child(1),
	.stars[value="3"] .star:nth-child(1),
	.stars[value="3.5"] .star:nth-child(1),
	.stars[value="4"] .star:nth-child(1),
	.stars[value="4.5"] .star:nth-child(1),
	.stars[value="5"] .star:nth-child(1),
	.stars[value="2"] .star:nth-child(2),
	.stars[value="2.5"] .star:nth-child(2),
	.stars[value="3"] .star:nth-child(2),
	.stars[value="3.5"] .star:nth-child(2),
	.stars[value="4"] .star:nth-child(2),
	.stars[value="4.5"] .star:nth-child(2),
	.stars[value="5"] .star:nth-child(2),
	.stars[value="3"] .star:nth-child(3),
	.stars[value="3.5"] .star:nth-child(3),
	.stars[value="4"] .star:nth-child(3),
	.stars[value="4.5"] .star:nth-child(3),
	.stars[value="5"] .star:nth-child(3),
	.stars[value="4"] .star:nth-child(4),
	.stars[value="4.5"] .star:nth-child(4),
	.stars[value="5"] .star:nth-child(4),
	.stars[value="5"] .star:nth-child(5) {
			background-image: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="utf-8"?><svg width="220" height="220" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="110" r="100" fill="transparent" stroke="%23999999" stroke-width="20" /><circle cx="110" cy="110" r="75" fill="%23333333" /></svg>');
	}

	.stars[value="0.5"] .star:nth-child(1),
	.stars[value="1.5"] .star:nth-child(2),
	.stars[value="2.5"] .star:nth-child(3),
	.stars[value="3.5"] .star:nth-child(4),
	.stars[value="4.5"] .star:nth-child(5) {
			background-image: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="utf-8"?><svg width="220" height="220" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="110" r="100" fill="transparent" stroke="%23999999" stroke-width="20" /><path d="M 110 35 A 75 75 0 0 0 110 185" fill="%23333333"/></svg>');
	}

</style>
