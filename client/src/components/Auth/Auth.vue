<template>
  <div class="auth-page">
    <div class="auth-content">
      <login-form
          v-if="activeButtonIsLogIn"
          @showAuthModal="showAuthModal"
      />
      <registration-form
          v-else
          @showAuthModal="showAuthModal"
      />
    </div>
    <div class="auth-buttons">
      <button
          v-bind:class="{ active: activeButtonIsLogIn }"
          @click="setActiveButton(true)"
          class="auth-buttons__item auth-buttons__item-left"
      >
        войти
      </button>
      <button
          v-bind:class="{ active: !activeButtonIsLogIn }"
          @click="setActiveButton(false)"
          class="auth-buttons__item auth-buttons__item-right"
      >
        зарегистрироваться
      </button>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
import LoginForm from "@/components/Auth/LoginForm";
import RegistrationForm from "@/components/Auth/RegistrationForm";

export default {
  name: "Auth",
  components: {RegistrationForm, LoginForm, MyButton},
  data() {
    return {
      activeButtonIsLogIn: true,
    }
  },
  methods: {
    setActiveButton(value) {
      value
          ? this.activeButtonIsLogIn = true
          : this.activeButtonIsLogIn = false
    },
    showAuthModal(value) {
      this.$emit('showAuthModal', value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./src/styles/styles.scss";

.auth-page {
  height: 400px;
  width: 600px;
  border-radius: 10px;

  .auth-content {
    height: 250px;
  }
}


.auth-buttons {
  height: 150px;
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 30px;
  margin: 0;
  background-color: $main;
  color: $border;
  border-radius: 0 0 10px 10px;
}

.auth-buttons__item-left {
  margin-right: 15px;
}

.auth-buttons__item-right {
  margin-left: 15px;
}

.auth-buttons__item {
  height: 100%;
  width: 50%;

  background-color: $main;
  border: 1px solid $border;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 14px;
  font-weight: bold;
}

.active {
  background-color: $border;
  border: 1px solid $main;
  position: relative;
}

.active:before {
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
</style>
