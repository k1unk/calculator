<template>
  <div class="dialog" v-if="show" @click.stop="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: "my-dialog",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideDialog() {
      this.$emit("update:show", false)
    }
  },
}
</script>

<style scoped>
.dialog {
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  position: fixed;
  display: flex;
  background: rgba(0, 0, 0, 0.5);
}

.dialog__content {
  margin: auto;
  min-width: 300px;
  min-height: 150px;
  background: whitesmoke;
  border-radius: 12px;
}
</style>
