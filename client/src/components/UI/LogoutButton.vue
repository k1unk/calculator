<template>
  <div
      v-if="isAuth"
      @click="logOut"
  >
    logOut
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "LogoutButton",
  methods: {
    ...mapActions({
      logOut: 'auth/logOut',
    }),
  },
  computed: {
    ...mapState({
      isAuth: state => state.auth.isAuth,
    }),
  },
}
</script>

<style scoped>

</style>
