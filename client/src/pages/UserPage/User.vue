<template>
  <div class="wrapper">
    <div class="login">
      Login: {{ user.login }}
    </div>
    <div>
      ID: {{ user.id }}
    </div>
    <div>
      Role: {{ user.accessLevel }}
    </div>
    <div v-if="showChangingFO">
      Favourite operation:
<!--      <my-select
          :model-value="selectedFO"
          @update:model-value="setSelectedFO"
          :options="optionsFO"
      />
      <my-button @click="changeFO(selectedFO)">ok</my-button>-->
    </div>
    <div v-if="!showChangingFO">
      <div v-if="user.favouriteOperation">
        Favourite operation: {{ user.favouriteOperation }}
      </div>

      <div v-else>
        Favourite operation is not selected
      </div>
    </div>
    <div
        v-if="user.id === id"
        class="user__settings"
    >
<!--
      <my-button
          @click="showChangeFOOptions(true)"
      >
        change favourite operation
      </my-button>-->
      <my-button>
        <logout-button/>
      </my-button>
    </div>
  </div>
</template>

<script>
import MyDialog from "@/components/UI/MyDialog";
import MyButton from "@/components/UI/MyButton";
import MySelect from "@/components/UI/MySelect";
import MyInput from "@/components/UI/MyInput";
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'
import User from "@/pages/UsersPage/UserItem";
import LogoutButton from "@/components/UI/LogoutButton";

export default {
  name: "User",
  components: {
    LogoutButton,
    User,
    MyInput,
    MySelect,
    MyButton,
    MyDialog
  },
  data() {
    return {
      routeId: this.$route.params.id,
      showChangingFO: false,
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
    ...mapMutations({
      setUser: 'post/setUser',
    }),
    ...mapActions({
      getUser: `users/getUser`,
      changeFO: `users/changeFO`,

    }),
    showChangeFOOptions(value) {
      this.showChangingFO = value
    },
    setSelectedFO(selectedFO) {
      this.selectedFO = selectedFO
    },
  },
  mounted() {
    this.getUser(this.routeId);
  },
  computed: {
    ...mapState({
      user: state => state.users.user,
      id: state => state.auth.id,
    }),
  },
  watch: {
    $route() {
      if (this.$route.params.id) {
        this.routeId = this.$route.params.id
        this.getUser(this.routeId);
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/styles";

.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;


  color: $font;
  font-size: 20px;
  text-align: center;

  .user__settings {
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    max-width: 200px;

    button:nth-child(1) {
      margin-bottom: 15px;
    }
  }

}
</style>

