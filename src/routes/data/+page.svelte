<script lang="ts">
  type Data = {
    id: number
    bread: string
  }
  
  type Prop = {
    data: {
      dataa: Data[]
    }
  }
  
  let { data }: Prop = $props()
</script>

<h1>Daftar Roti</h1>

<ul>
{#each data.dataa as dat (dat.id)}
  <li><a href="/data/{dat.id}">{dat.bread}</a></li>
{/each}
</ul>
