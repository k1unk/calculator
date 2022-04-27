<template>
  <div class="user"
       @click="$router.push(`/users/${user.id}`)"
  >
    {{ user.login }}
  </div>
</template>

<script>

export default {
  name: "UserItem",
  props: {
    user: {
      type: Object,
      requires: true
    }
  },
}
</script>

<style>

.user {
  border: 1px solid black;
  padding: 2px;
  margin: 5px;
  background-color: #ff849b;
  box-shadow: #353535 5px 5px 5px;

  width: 220px;
  color: black;
  letter-spacing: 1px;
  font-size: 18px;
  font-weight: bold;
  word-wrap: break-word;
  text-align: center;


}

</style>

