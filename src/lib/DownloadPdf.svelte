<script lang="ts">
	import { t } from 'svelte-i18n';

	export let url;
	export let position = "top";
</script>

<div class="download-link" class:top={position==="top"}  class:bottom={position==="bottom"}>
  <a href={url} target="_blank" rel="noopener noreferrer"
    >{$t('download')} <i class="pdf-icon"></i> <span class="here">{$t('here')}</span></a
  >
</div>

<style>

.download-link {
		position: absolute;
		width: 100%;
		text-align: center;
		font-size: 1.1rem;
		font-style: italic;
		background-color: #4a8cd2;
		line-height: 30px;
		text-transform: capitalize;
		z-index: 100;
	}

	.download-link.top {
		top: 0;
	}

	.download-link.bottom {
		bottom: 0;
	}

	.download-link a,
	.download-link a:hover,
	.download-link a:visited {
		color: transparent;
	}

	.download-link a .pdf-icon {
		display: inline-block;
		background-size: 16px 16px;
		width: 16px;
		height: 16px;
		transform: scale(1.5);
	}

	.download-link.bottom a .pdf-icon {
		transform: scale(1.5) translateY(2px);
	}

	.download-link a .here {
		text-decoration: underline;
		text-transform: lowercase;
	}

	@media screen {
		.download-link a,
		.download-link a:hover,
		.download-link a:visited {
			color: white;
		}
		.download-link a .pdf-icon {
			background-image: url("../assets/pdf-icon.png");
    }
  }
</style>