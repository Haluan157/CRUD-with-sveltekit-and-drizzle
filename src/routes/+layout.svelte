<script lang="ts">
  import type { Snippet } from 'svelte';
  
  let { data, children }: { children: Snippet } = $props()
</script>

<ul>
  <li><a href="/">Home</a></li>
  <li><a href="/data">Daftar Roti</a></li>
  <li><a href="/create">Tambah Roti</a></li>
  {#if !data.a}
  <li><a href="/login">Login</a></li>
  <li><a href="/register">Register</a></li>
  {:else}
  <li><a href="/logout">Logout</a></li>
  {/if}
</ul>

<main>
  {@render children()}
</main>