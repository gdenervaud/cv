<script lang="ts">
	export let list: string[] = [];
</script>

<div class="other-skills">
	<ul>
		{#each list as skill}
			<li>{skill}</li>
		{/each}
	</ul>
</div>

<style>
	.other-skills {
		display: inline;
		position: absolute;
		bottom: 30px;
		left: 0;
		padding: 30px 0 0 250px;
		color: rgba(255, 255, 255, 0.1);
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		pointer-events: none;
		font-size: 0.1rem;
	}

	.other-skills > ul {
		display: flex;
		flex-wrap: wrap;
		list-style-type: none;
		margin: 0;
		padding: 0;
	}

	.other-skills > ul > li + li::before {
		content: ', ';
	}

	@media screen {
		.other-skills {
			transform: translateY(-10000px);
		}
	}
</style>
