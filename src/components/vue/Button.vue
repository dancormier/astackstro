<template>
  <button
    class="s-btn"
    v-bind:class="[
      variant ? 's-btn__' + variant : '',
      modifier ? 's-btn__' + modifier : '',
      size ? 's-btn__' + size : '',
      {
        's-btn__dropdown': dropdown,
        's-btn__item': hasIcon,
        'is-loading': loading,
      },
      className
    ]"
    {...rest}
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonVue",
  props: {
    variant: String,
    modifier: String,
    size: String,
    dropdown: Boolean,
    hasIcon: Boolean,
    loading: Boolean,
    className: String,
  },
  // data() {
  //   return {
  //     count: 0,
  //   };
  // },
  // methods: {
  //   add() {
  //     this.count++;
  //   },
  //   subtract() {
  //     this.count--;
  //   },
  // },
};
</script>

