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
</script>

<form method="POST" use:enhance>
  <input name="name" type="text" placeholder="Masukkan Username" required />
  <input name="email" type="email" placeholder="Masukkan Email" required />
  <input name="pass" type={pass} placeholder="Masukkan Password" minlength="8" required />
  <button type="button" {onclick}>Show</button>
  <button type="submit">submit</button>
</form>