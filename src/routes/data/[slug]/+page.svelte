<script lang="ts">
  import type { Rd } from '$lib/types'
  
  interface Dat extends Rd {
    id: number
  }
  
  let { data }: { data: Dat } = $props()
</script>


<p><strong>Nomor:</strong> { data.id }</p>
<p><strong>Nama Roti:</strong> { data.bread }</p>
<p><strong>Harga:</strong> { data.price }</p>
<p><strong>Stok:</strong> { data.stock }</p>
<p>{@html data.description && "<strong>Deskripsi:</strong>"} { data.description }</p>
<p><strong>Pembuat:</strong> { data.author }</p>

<a href="/data">Kembali</a>