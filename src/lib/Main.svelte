<script lang="ts">
	//import { getCareerStartDate } from './experienceHelpers'
	import Title from './Title.svelte';
	import Summary from './Summary.svelte';
	import OtherSkills from './OtherSkills.svelte';
	import Experiences from './Experiences.svelte';
	import Education from './Education.svelte';
	import Certifications from './Certifications.svelte';
  import type { CV } from '../types.ts';
	export let cv: CV;
	//let careerStartDate = getCareerStartDate(cv.experience);
</script>

<div class="main">
	<header>
		<Title jobTitle={cv.jobTitle} jobDescription={cv.jobDescription} />
		<Summary text={cv.summary} /> <!-- careerStartDate={careerStartDate} -->
	</header>
	<div class="body">
		<Experiences list={cv.experience} linkedin={cv.linkedin} yearsOnly={true} />
		<Education list={cv.education} />
		<Certifications list={cv.certifications} />
	</div>
	<OtherSkills list={cv.otherSkills} />
</div>

<style>
	.main {
		z-index: 1;
		float: left;
		box-sizing: border-box;
		width: calc(100% - 255px);
		height: 100%;
		padding: 16px 15px 25px 5px;
		font-size: 0.7rem;
	}
	
	.main > .body :global(> div + div) {
		margin-top: 12px;
	}

	.main > .body :global(section .content>ul) {
    list-style-type: none;
    margin: 0;
    padding: 0;
	}

	.main > .body :global(section .content > ul) {
		list-style-type: none;
    margin: 0;
    padding: 0;
	}

	.main > .body :global(section .content > ul > li) {
		position: relative;
	}

	.main > .body :global(section .content > ul > li + li) {
		padding-top: 3px;
	}

</style>
