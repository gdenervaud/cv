<script lang="ts">
	import Name from './Name.svelte';
	import PhotoBadge from './PhotoBadge.svelte';
	import Contact from './Contact.svelte';
	import Skills from './Skills.svelte';
	import SoftSkills from './SoftSkills.svelte';
	import Languages from './Languages.svelte';
	import Interests from './Interests.svelte';
  import type { CV } from '../types';
	export let cv: CV;
</script>

<aside>
	<header>
		<Name name={cv} />
		<PhotoBadge />
	</header>
	<div class="body">
		<Contact contact={cv} />
		<Skills list={cv.skills} />
		<SoftSkills list={cv.softSkills} />
		<Languages list={cv.languages} />
		<Interests list={cv.interests} />
	</div>
</aside>

<style>
	aside {
		display: block;
		float: left;
		box-sizing: border-box;
		width: 255px;
		padding: 11px 15px 25px 25px;
		/* background-color: rgba(64, 64, 64, .4); */
		background-color: rgba(16, 147, 184, 0.05);
		/* background-color: rgba(64, 64, 64, 0.15); */
	}

	aside > .body :global(> div + div) {
		margin-top: 11px;
	}

	aside > .body :global(section) {
		display: block;
    font-size: 0.66rem;
	}

	aside > .body :global(section .title) {
    margin-bottom: 8px;
	}

	aside > .body :global(section .content) {
			display: block;
			margin-left: 2px;
			margin-right: -6px;
	}

</style>
