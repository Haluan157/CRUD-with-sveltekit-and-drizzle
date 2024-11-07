<script lang="ts">
  import type { Snippet } from 'svelte';
  
  let { children }: { children: Snippet } = $props()
</script>

<ul>
  <li><a href="/">Home</a></li>
  <li><a href="/data">Daftar Roti</a></li>
  <li><a href="/create">Tambah Roti</a></li>
  <li><a href="/login">Login</a></li>
</ul>

<main>
  {@render children()}
</main>