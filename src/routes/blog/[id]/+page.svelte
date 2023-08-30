<script>
	import { goto } from '$app/navigation';

	export let data;
</script>

<button class="btn font-extrabold hover:text-blue-800" on:click={() => goto('/')}>
	go back
</button>
<h1>BLOG POST</h1>
<p>{data.post.Title}</p>
<p>{data.post.Slug}</p>
<p>{data.post.body}</p>
<p>{data.post.dateposted}</p>
<p>{data.post.description}</p>
