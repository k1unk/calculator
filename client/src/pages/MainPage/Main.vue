<template>
    <is-auth v-if="isAuth"/>
    <no-auth v-else/>
</template>

<script>

import {mapState} from 'vuex'
import NoAuth from "@/pages/MainPage/NoAuth";
import IsAuth from "@/pages/MainPage/IsAuth";

export default {
  name: "Main",
  components: {
    IsAuth,
    NoAuth,
  },

  computed: {
    ...mapState({
      isAuth: state => state.auth.isAuth,
    }),
  },
}
</script>

<style lang="scss" scoped>
@import "../../styles/styles";

.wrapper {
  height: 100%;
}



.sidebar {
  width: 150px;
  border: 1px solid black;

}

.contentt {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  min-width: 300px;
  border: 1px solid black;
}

.sidebar__header {
  background-color: #7f8fe5;
  font-size: 30px;
  color: white;
  font-weight: bold;
  -webkit-text-stroke: 1px black;
}

.active {
  border: 10px solid black;
}
</style>
