<template>
  <div class="header">

    <div class="header__content">
    <img
        src="@/assets/logo.jpg"
        alt="logo"
        @click="$router.push('/')"
    >

    <div>
      <div v-if="!isAuth">
        <my-button
            @click="showAuthModal(true)"
        >
          Войти
        </my-button>
      </div>
      <div v-else>
        <my-button
            @click="$router.push(`/users/${id}`)"
        >
          {{ login }}
        </my-button>
      </div>
    </div>

    <my-dialog v-model:show="dialogVisible">
      <auth @showAuthModal="showAuthModal"/>
    </my-dialog>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import MyDialog from "@/components/UI/MyDialog";
import Auth from "@/components/Auth/Auth";

export default {
  name: "my-header",
  components: {Auth, MyDialog},

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
  computed: {
    ...mapState({
      isAuth: state => state.auth.isAuth,
      login: state => state.auth.login,
      id: state => state.auth.id,
    }),
  },
}

</script>

<style lang="scss">
@import "../../styles/styles";

.header {
  width: 100%;
  background-color: $main;
  border-bottom: 1px solid $border;
  margin: auto;
  display: flex;
  justify-content: center;

  .header__content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin: 0;
    max-width: 900px;
    button {
      padding: 20px;
    }
    img {
      width: 60px;
      height: 60px;
      cursor: pointer;
    }
  }
}

</style>
