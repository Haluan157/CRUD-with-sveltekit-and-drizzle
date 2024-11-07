<script lang="ts">
  let { form } = $props()
</script>

<form method="POST">
  <input type="email" name="email" required />
  <input type="password" name="pass" required />
  <button type="submit">login</button>
</form>

{#if form?.error}
  <p>{form?.error}</p>
{/if}