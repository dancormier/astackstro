<script>
  import Badge from './Badge.svelte';
  export let badges, test;
</script>

{#each badges as { name,  }, i}
  <Badge className="mr4 mb4">{name}</Badge>
{/each}
