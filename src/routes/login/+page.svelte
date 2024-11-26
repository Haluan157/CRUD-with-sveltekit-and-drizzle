<script lang="ts">
  import { enhance } from '$app/forms'
  let pass = $state("password")
  function onclick() {
    if (pass === "password") {
      pass = "text"
    } else {
      pass = "password"
    }
  }
  let { data, form } = $props()
</script>

<form method="POST" use:enhance>
  <input type="email" name="email" placeholder="Masukkan Email" required />
  <input type={pass} name="pass" placeholder="Masukkan Password" required />
  <button type="button" {onclick}>Show</button>
  <button type="submit">login</button>
</form>
{#if data.a}
<p>Silakan login dengan akun yang sudah diregister!</p>
{/if}

{#if form?.error}
  <p>{form?.error}</p>
{/if}