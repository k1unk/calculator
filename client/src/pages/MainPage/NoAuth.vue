<template>
  <div class="content_no-Auth">
    <div
        @click="showAuthModal(true)"
    >
      Зарегистрируйтесь или войдите, чтобы играть
    </div>
    <my-dialog v-model:show="dialogVisible">
      <auth @showAuthModal="showAuthModal"/>
    </my-dialog>
  </div>
</template>

<script>
import MyDialog from "@/components/UI/MyDialog";
import Auth from "@/components/Auth/Auth";

export default {
  name: "NoAuth",
  components: {
    MyDialog,
    Auth
  },

  data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    showAuthModal(value) {
      this.dialogVisible = value
    },
  },
}
</script>

<style lang="scss" scoped>
@import "src/styles/styles.scss";

.content_no-Auth {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
    font-size: 25px;
    text-align: center;
    align-items: center;
    align-content: center;
    color: $font;
    text-decoration: underline;
    cursor: pointer;
  }
}

</style>
