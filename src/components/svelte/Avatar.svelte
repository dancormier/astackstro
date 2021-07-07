<script>
  export let className = '', size = 16, letter = null, src = null, alt = null;
  let avatarSize = size ? `s-avatar__${size}` : 16;
</script>

<span class={`s-avatar ${avatarSize} ${className}`}>
  {#if letter}
    <div class="s-avatar--letter">{letter}</div>
  {/if}
  {#if src}
    <img class="s-avatar--image" src={src} alt={alt} />
  {/if}
  <slot></slot>
</span>
