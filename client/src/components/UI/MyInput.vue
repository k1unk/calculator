<template>
  <input
      :value="modelValue"
      @input="updateInput"
      class="input"
      type="text"
  >
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: String
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/styles.scss";

.input {
  margin: 3px 10px;
  height: 30px;
  background-color: $inputBackground;
  border: 2px solid $inputBorder;
  color: black;
}
input[type="number"] {
  -moz-appearance: textfield;
  -webkit-appearance: textfield;
  appearance: initial;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  display: none;
}
</style>
