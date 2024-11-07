<script lang="ts">
  let { form } = $props()
</script>

<form method="POST">
  <input name="bread" placeholder="Masukkan Nama Roti" maxlength="77" required /> 
  <input type="number" name="price" placeholder="Masukkan Harga Roti" min="500" step="500" required /> 
  <input type="number" name="stock" placeholder="Masukkan Stok Roti" min="0" step="1" required /> 
  <input name="description" placeholder="Masukkan Deskripsi Roti (opsional)" /> 
  <button type="submit">Submit</button>
</form>

{#if form?.error}
  <p>{form?.error}</p>
{/if}