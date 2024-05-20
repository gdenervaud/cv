<script lang="ts">
  import showdown from 'showdown';
  import DOMPurify from 'dompurify';

	export let text: string = '';
	
  const converter = new showdown.Converter();
  const html = converter.makeHtml(text);
  const innerHtml = html.substring(0,html.length-4).substring(3); // remove <p> and </p>
  const sanitizedHtml = DOMPurify.sanitize(innerHtml);

</script>
<span class="markdown">{@html sanitizedHtml}</span>
<style>
  :global(.markdown strong) {
		font-weight: 500;
	}
</style>