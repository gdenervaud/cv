<script lang="ts">
	import { t, locale, isLoading } from 'svelte-i18n';
	import { setLocale, toLocale } from './i18n';
	import Aside from './lib/Aside.svelte';
	import Main from './lib/Main.svelte';
	import DownloadPdf from './lib/DownloadPdf.svelte';
	import LocaleSwitcher from './lib/LocaleSwitcher.svelte';
  import type { CV } from './types.ts';
  import data from './assets/cv.json';
  let cv: CV = data as unknown as CV;
	$: pdfUrl = $t(`data.${cv.pdf}`);
</script>

{#if $isLoading}
    <p>Loading</p>
{:else}
	<div class="page">
		<article>
			<Aside cv={cv} />
			<Main cv={cv} />
		</article>
		<DownloadPdf url={pdfUrl} position="top" />
		<DownloadPdf url={pdfUrl} position="bottom" />
		<LocaleSwitcher 
			value={toLocale($locale)}
			on:locale-changed={e => setLocale(e.detail) } />
	</div>
{/if}

<style>
	.page {
		display: block;
		position: relative;
		/* min-width: 21cm; */
		/* min-height: 29.7cm; */
		width: 832px;
		height: 1175px;
		margin: 0;
		padding: 0;
		background-image: url('./assets/paper.png');
		background-repeat: repeat;
	}
	article::before {
		display: none;
		position: absolute;
		top: 2px;
		left: 15px;
		color: rgba(255, 255, 255, 0.2);
		font-weight: 900;
		font-size: 1.4rem;
		letter-spacing: 0.7rem;
		content: 'https://www.linkedin.com/in/denervaud';
	}
	article::after {
		display: none;
		position: absolute;
		bottom: 2px;
		left: 15px;
		color: rgba(255, 255, 255, 0.2);
		font-weight: 900;
		font-size: 1.4rem;
		letter-spacing: 0.7rem;
		content: 'https://www.linkedin.com/in/denervaud';
	}
	article {
		display: block;
		box-sizing: content-box;
		padding: 30px 0;
		height: calc(100% - 60px);
	}

	/* xlink:href="data:image/png;base64," */

	:global(.hbp-logo)	{
    position: absolute;
    display: inline-block;
    margin-top: -3px;
    margin-left: 2px;
    width: 20px;
    /* 150px; */
    height: 20px;
    background-size: 95px 20px;
    background-image: url('./assets/HBP_logo.svg');
	}

	:global(.hbp-logo-float) {
    margin-right: 25px !important;
	}

	:global(.fis-logo) {
    position: absolute;
    display: inline-block;
    margin-top: -6px;
    margin-left: 5px;
    width: 50px;
    height: 25px;
    background-size: 50px 25px;
    background-image: url('./assets/fis_logo.svg');
	}

	:global(.fis-logo-float) {
    margin-right: 54px !important;
	}

	:global(.fnz-logo) {
    position: absolute;
    display: inline-block;
    margin-top: -2px;
    margin-left: 5px;
    width: 60px;
    height: 20px;
    background-size: 60px 20px;
    background-image: url('./assets/fnz_logo.svg');
	}

	:global(.fnz-logo-float) {
    margin-right: 67px !important;
	}

	:global(.thomson_reuters-logo) {
    position: absolute;
    display: inline-block;
    margin-top: -2px;
    margin-left: 5px;
    width: 22px;
    height: 20px;
    background-size: 22px 20px;
    background-image: url('./assets/thomson_reuters_logo.svg');
	}

	:global(.thomson_reuters-logo-float) {
    margin-right: 30px !important;
	}

	:global(.epfl-logo) {
    position: absolute;
    display: inline-block;
    margin-top: 1px;
    margin-left: 2px;
    width: 50px;
    height: 12px;
    background-size: 50px 12px;
    background-image: url('./assets/epfl_logo.svg');
	}

	:global(.epfl-logo-float) {
    margin-right: 50px !important;
	}

	:global(.ebrains-logo) {
    position: absolute;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-top: -2px;
    margin-left: 3px;
    background-size: 20px 20px;
    background-image: url('./assets/ebrains.svg');
	}

	:global(.ebrains-logo-float) {
    margin-right: 27px !important;
	}

</style>
