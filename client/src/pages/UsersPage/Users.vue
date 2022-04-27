<template>
  <div class="users">
      <user v-for="user in users" :user="user"/>
  </div>
</template>

<script>
import MyDialog from "@/components/UI/MyDialog";
import MyButton from "@/components/UI/MyButton";
import MySelect from "@/components/UI/MySelect";
import MyInput from "@/components/UI/MyInput";
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'
import User from "@/pages/UsersPage/UserItem";

export default {
  components: {
    User,
    MyInput,
    MySelect,
    MyButton,
    MyDialog,
  },
  data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    ...mapActions({
      getUsers: 'users/getUsers',
    }),
    showDialog() {
      this.dialogVisible = true
    },
  },
  mounted() {
    this.getUsers();
  },
  computed: {
    ...mapState({
      users: state => state.users.users,
    }),
  },
}
</script>

<style scoped>

.users {
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  padding-bottom: 2px;
}

</style>

