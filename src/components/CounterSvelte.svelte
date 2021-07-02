<script>
  export let demo;
  let count = 0;

  function add() {
    count += 1;
  };

  function subtract() {
    count -= 1;
  };
</script>

<div>
  Svelte Count: {count} {demo}
  <br />
  <button on:click={subtract}>-</button>
  <button on:click={add}>+</button>
</div>
