<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button-2"
}
</script>

<style lang="scss" scoped>
@import "src/styles/styles.scss";

.btn {
  padding: 15px;
  background-color: $main;
  border: 1px solid $border;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 14px;
  font-weight: bold;

  &.active {
    background-color: $border;
    border: 1px solid black;
    position: relative;
  }

  &.active:before {
    background: none;
    border: 2px solid $main;
    content: "";
    display: block;
    position: absolute;
    top: 1px;
    left: 1px;
    right: 1px;
    bottom: 1px;
  }
}


</style>
