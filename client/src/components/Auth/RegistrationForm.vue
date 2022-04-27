<template>
  <div class="reg-form-page">
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
      <p>Выберите любимую операцию:</p>
      <my-select
          :model-value="selectedFO"
          @update:model-value="setSelectedFO"
          :options="optionsFO"
      />

      <div>{{ errorMessage }}</div>
      <div v-if="!isValidate && !errorMessage">Введите логин и пароль</div>
    </div>
    <div class="enter_btn">
      <my-button
          @click="register"
      >
        enter
      </my-button>
    </div>

  </div>

</template>

<script>
import MyInput from "@/components/UI/MyInput";
import MyButton from "@/components/UI/MyButton";
import {mapActions} from 'vuex'
import MySelect from "@/components/UI/MySelect";

export default {
  name: "RegistrationForm",
  components: {MySelect, MyButton, MyInput},
  data() {
    return {
      login: '',
      password: '',
      isValidate: true,
      errorMessage: '',
      selectedFO: "",
      optionsFO: [
        {value: 'no', name: 'no'},
        {value: 'add', name: 'add'},
        {value: 'sub', name: 'sub'},
        {value: 'mult', name: 'mult'},
        {value: 'div', name: 'div'},
        {value: 'sqrt', name: 'sqrt'},
        {value: 'fact', name: 'fact'},
      ]
    }
  },
  methods: {
    ...mapActions({
      logIn: 'auth/logIn'
    }),
    setLogin(login) {
      this.login = login
    },
    setPassword(password) {
      this.password = password
    },
    setSelectedFO(selectedFO) {
      this.selectedFO = selectedFO
    },
    register() {
      if (this.login !== "" && this.password !== "") {
        this.$store.dispatch('users/register',
            [this.login, this.password, this.selectedFO])
            .then(res => {
              if (res.status === 200) {
                this.logIn([this.login, this.password])
                this.$emit('showAuthModal', false)
              }
            })
            .catch(res => {
              if (res.status === 400)
                this.errorMessage = "Логин занят"
            });
      } else {
        this.isValidate = false
      }
    }
  },
}
</script>

<style scoped>
.reg-form-page {
  display: flex;
  height: 100%;
  width: 100%;
  border: 1px solid black;
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
