<template>
  <div
    class="s-avatar"
    v-bind:class="[
      size ? 's-avatar__' + size : 16,
      className
    ]"
    {...rest}
  >
    <div class="s-avatar--letter" v-if="letter">{{letter}}</div>
    <img class="s-avatar--image" v-if="src" v-bind:alt="alt" v-bind:src="src" />
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AvatarVue",
  props: {
    size: Number,
    src: String,
    alt: String,
    letter: String,
    className: String,
  },
};
</script>

