<script>
  import '$lib/style.css';
  import Nav from "$lib/components/Nav.svelte";
</script>

<div class="container">
  <Nav />
  <main>
    <slot></slot>
  </main>
</div>