<script lang="ts">
	import profilePicture from '../assets/profile.jpg';
</script>

<div class="photo-badge">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		width="200px"
		height="200px"
		viewBox="0 0 400 400"
	>
		<circle cx="200" cy="200" r="198" style="stroke-width: 3; fill: none;" />
		<defs>
			<clipPath id="profile_clipping">
				<circle cx="200" cy="185" r="125" />
			</clipPath>
		</defs>
		<image
			href="{profilePicture}"
			width="400"
			height="400"
			clip-path="url(#profile_clipping)"
			transform="translate(-100, -78) scale(1.5)"
		></image>
	</svg>
</div>

<style>
	.photo-badge {
		text-align: center;
		transform: scale(0.9);
	}

	.photo-badge svg circle {
		stroke: #404040;
	}
</style>
