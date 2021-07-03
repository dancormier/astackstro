<script>
  export let className, bling, size, variant;
  let badgeVariant = variant ? `s-badge__${variant}` : '';
  let badgeSize = size ? `s-badge__${size}` : '';
  let badgeBling = bling ? `s-award-bling s-award-bling__${bling}` : '';
</script>

<span class={`s-badge ${badgeVariant} ${badgeSize} ${className || ''}`}>
  <span class={badgeBling}>
    <slot></slot>
  </span>
</span>
