<script lang="ts">
	import type { Name } from '../types.ts';
	export let name: Name = {firstname: '<firstname>', lastname: '<lastname>'};
	let {firstname, lastname} = name;
	
	import profilePicture from '../assets/profile.jpg';

</script>

<div class="name"><span class="first">{firstname}</span> <span class="last">{lastname}</span></div>

<style>
	.first {
		display: inline-block;
		text-transform: capitalize;
		font-size: 3.6rem;
		letter-spacing: 0.6rem;
		transform: scaleY(0.8);
	}

	.last {
		display: block;
		text-transform: uppercase;
		font-size: 1.8rem;
		margin-top: -16px;
		padding-left: 4px;
		letter-spacing: 0.16rem;
	}
</style>
