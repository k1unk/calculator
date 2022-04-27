<template>
  <div class="is-auth">
  <side-bar
      @changeOption="changeOption"
      :selectedOption="selectedOption"
  />
  <content-main
      :selectedOption="selectedOption"
      :result="result"
      @getResult="getResult"
  />
  </div>
</template>

<script>
import SideBar from "@/pages/MainPage/SideBar";
import ContentMain from "@/pages/MainPage/Content";

export default {
  name: "IsAuth",
  components: {ContentMain, SideBar},
  data() {
    return {
      selectedOption: "add",
      result: '',
      stopResult: true,
    }
  },
  methods: {
    changeOption(value) {
      this.selectedOption = value
      this.result = ""
      this.stopResult = true
    },
    getResult({op1, op2}) {
      if (this.selectedOption === "div" &&
          (op2 === "0" || op2 === "")) {
        this.result = "На 0 делить нельзя"
      } else {
        this.stopResult = false
        this.result = "LOADING"
        this.$store.dispatch('calculator/getResult',
            [this.selectedOption, op1, op2])
            .then(res => {
              if (res.status === 200) {
                if (!this.stopResult) {
                  this.result = res.data.result
                }
              }
            })
            .catch(res => {
              console.log(res);
            });
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import "src/styles/styles.scss";

.is-auth {
  height: 100%;
  display: flex;
  justify-content: center;
  border: 1px solid black;
}

</style>
