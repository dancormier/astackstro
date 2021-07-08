<template>
  <a
    class="s-avatar"
    v-bind:class="[
      size ? 's-avatar__' + size : 16,
      className
    ]"
    {...rest}
    v-bind:href="href"
  >
    <div class="s-avatar--letter" v-if="letter">{{letter}}</div>
    <img class="s-avatar--image" v-if="src" v-bind:alt="alt" v-bind:src="src" />
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    size: Number,
    src: String,
    alt: String,
    letter: String,
    className: String,
    href: String,
  },
};
</script>

