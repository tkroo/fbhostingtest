<script>
  export let nav;
  console.log('nav : ', nav);
</script>

<nav>
  <h1>Hosting Test</h1>
  <ul>
    {#each nav as item}
      <li><a href={item.path}>{item.name}</a></li>
    {/each}
    
  </ul>
</nav>

<style>
  nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
  }
  
  h1 {
    margin: 0;
    padding: 0;
  }
  ul {
    padding: 0;
    display: flex;
    align-items: baseline;
    gap: 1rem;
  }

  li {
    list-style: none;
  }
</style>