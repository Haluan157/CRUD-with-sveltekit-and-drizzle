<script lang="ts">
	import { page } from '$app/stores';
</script>

<h1>Status: {$page.status}</h1>
<p>Pesan: {$page.error?.message}</p>