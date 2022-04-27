<template>

  <div class="main__content">
    <my-input
        type="number"
        :model-value="op1"
        @update:model-value="setOp1"
        placeholder="0"
    />
    <div v-if="selectedOption==='add'">+</div>
    <div v-if="selectedOption==='sub'">-</div>
    <div v-if="selectedOption==='mult'">*</div>
    <div v-if="selectedOption==='div'">/</div>
    <div v-if="selectedOption==='sqrt'">√</div>
    <div v-if="selectedOption==='fact'">!</div>
    <my-input
        v-if="selectedOption==='add' ||
                      selectedOption==='sub' ||
                      selectedOption==='mult' ||
                      selectedOption==='div'"
        type="number"
        :model-value="op2"
        @update:model-value="setOp2"
        placeholder="0"
    />
    <my-button
        @click="this.$emit('getResult', {op1, op2})"
    >
      get result
    </my-button>
    <div class="result">{{ result }}</div>
  </div>
</template>

<script>
export default {
  name: "Content",

  props: {
    selectedOption: {
      type: String,
      required: true,
    },
    result: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      op1: '',
      op2: '',
    }
  },
  methods: {
    setOp1(op1) {
      this.op1 = op1
    },
    setOp2(op2) {
      this.op2 = op2
    },
  },
}
</script>

<style lang="scss" scoped>
@import "src/styles/styles.scss";

.result {
  font-size: 30px;
  color: $font;
}

.main__content {
  div {
    color: $font;
    padding: 10px;
    font-size: 30px;
  }
}
</style>
