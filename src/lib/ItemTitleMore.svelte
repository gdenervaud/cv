<script lang="ts">
	export let text: string|undefined;
</script>

{#if !!text}
  <span class="more">{text}</span>
{/if}

<style>
	.more {
    padding-left: 4px;
    font-weight: 200;
    color: #333;
	}

</style>