<script lang="ts">
  type Data = {
    id: number
    bread: string
    price: number
    stock: number
    description: string | null
  }
  
  type Prop = {
    data: Data[]
  }
  
  let { data }: Prop = $props()
  
  function formatRupiah(amount: number) {
    const rupiah = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(amount);
    return `${rupiah}`
  }
</script>

<h1>Daftar Roti</h1>

<table border="1">
  <thead>
    <tr>
      <th>No.</th>
      <th>Nama Roti</th>
      <th>Harga</th>
      <th>Stok</th>
      <th>Deskripsi</th>
    </tr>
  </thead>
  <tbody>
    {#snippet tabelRoti(id: number, nama: string, harga: string, stok: number, deskripsi: string | null)}
      <tr>
        <td>{id}</td>
        <td>{nama}</td>
        <td>{harga}</td>
        <td>{stok}</td>
        <td>{deskripsi ? deskripsi : "Tidak ada deskripsi"}</td>
      </tr>
    {/snippet}
    {#each data.dataa as dat (dat.id)}
      {@render tabelRoti(dat.id, dat.bread, formatRupiah(dat.price), dat.stock, dat.description)}
    {/each}
  </tbody>
</table>
