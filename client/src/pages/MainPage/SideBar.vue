<template>
  <div class="sidebar">
    <div>
      <div class="sidebar__header">Fast operations</div>
      <div class="sidebar__items">
        <my-button
            v-bind:class="{ active: selectedOption==='add' }"
            @click="changeOption('add')"
        >
          ADD
        </my-button>
        <my-button
            v-bind:class="{ active: selectedOption==='sub' }"
            @click="changeOption('sub')"
        >
          SUB
        </my-button>
        <my-button
            v-bind:class="{ active: selectedOption==='mult' }"
            @click="changeOption('mult')"
        >
          MULT
        </my-button>
        <my-button
            v-bind:class="{ active: selectedOption==='div' }"
            @click="changeOption('div')"
        >
          DIV
        </my-button>
      </div>
    </div>
    <div>
      <div class="sidebar__header"> Slow operations</div>
      <div class="sidebar__items">
        <my-button
            v-bind:class="{ active: selectedOption==='sqrt' }"
            @click="changeOption('sqrt')"
        >
          SQRT
        </my-button>
        <my-button
            v-bind:class="{ active: selectedOption==='fact' }"
            @click="changeOption('fact')"
        >
          FACT
        </my-button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "SideBar",

  props: {
    selectedOption: {
      type: String,
      required: true,
    }
  },
  methods: {
    changeOption(value) {
      this.$emit('changeOption', value)
    },
  },
}
</script>

<style lang="scss" scoped>
@import "src/styles/styles.scss";


.sidebar {
  max-width: 300px;
  border: 1px solid black;

}
.sidebar__header {
  font-size: 30px;
  color: white;
  font-weight: bold;
}
.sidebar__items {
  display: flex;
  flex-direction: column;
  font-size: 30px;
  color: white;
  font-weight: bold;

}

/*
.sidebar__item:hover {
}*/
</style>
