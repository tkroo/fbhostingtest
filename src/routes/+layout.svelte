<script>
  import '$lib/style.css';
  import Nav from "$lib/components/Nav.svelte";
  export let data;
  console.log('data : ', data);
</script>

<div class="container">
  <Nav nav={data.mysite.nav} />
  <main>
    <slot></slot>
  </main>
</div>