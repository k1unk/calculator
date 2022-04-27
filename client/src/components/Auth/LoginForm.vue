<template>
  <div class="login-form-page">
    <div class="inputs">
      <my-input
          :model-value="login"
          @update:model-value="setLogin"
          placeholder="login"
      />
      <my-input
          :model-value="password"
          @update:model-value="setPassword"
          placeholder="password"
      />
      <div>{{ errorMessage }}</div>
      <div v-if="!isValidate && !errorMessage">Введите логин и пароль</div>
    </div>
    <div class="enter_btn">
      <my-button
          @click="logIn"
      >
        enter
      </my-button>
    </div>
  </div>

</template>

<script>
import MyInput from "@/components/UI/MyInput";
import MyButton from "@/components/UI/MyButton";

export default {
  name: "LoginForm",
  components: {MyButton, MyInput},
  data() {
    return {
      login: '',
      password: '',
      isValidate: true,
      errorMessage: ''
    }
  },
  methods: {
    setLogin(login) {
      this.login = login
    },
    setPassword(password) {
      this.password = password
    },
    logIn() {
      if (this.login !== "" && this.password !== "") {
        this.$store.dispatch('auth/logIn', [this.login, this.password])
            .then(res => {
              if (res.status === 200) {
                this.$emit('showAuthModal', false)
              }
            })
            .catch(res => {
              if (res.status === 400)
                this.errorMessage = "Неправильный логин или пароль"
            });
      } else {
        this.isValidate = false
      }
    }
  },
}
</script>

<style scoped>
.login-form-page {
  display: flex;
  height: 100%;
  width: 100%;
  border: 1px solid black;
  color: black;
}

.inputs {
  width: 60%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;

}

.enter_btn {
  display: flex;
  flex-direction: column;
  width: 40%;
  border: 1px solid black;

}

input {
  margin: 3px 10px;
  height: 30px;
  background-color: #d3f1e8;
  border: 2px solid #4d9b4d;
}
</style>
