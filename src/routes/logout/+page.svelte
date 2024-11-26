<script lang="ts">
  import { enhance } from '$app/forms'
</script>

<form method="POST" use:enhance>
  <p>Silakan klik tombol dibawah untuk logout</p>
  <button type="submit">Logout</button>
</form>
