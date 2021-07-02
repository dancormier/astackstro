<script>
  export let variant = 'secondary';
  export let className, modifier, size, dropdown, hasIcon, loading;
  let btnVariant = variant && `s-btn__${variant}`;
  let btnModifier = modifier && `s-btn__${modifier}`;
  let btnSize = size && `s-btn__${size}`;
  let btnDropdown = dropdown && 's-btn__dropdown';
  let btnIcon = hasIcon && 's-btn__icon';
  let btnLoading = loading && 'is-loading';
</script>

<button
  type="button"
  class={`s-btn ${btnVariant} ${btnModifier} ${btnSize} ${btnDropdown} ${btnIcon} ${btnLoading} ${className && className}`}>
  <slot></slot>
</button>
