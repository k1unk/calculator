<template>
  <my-header/>
  <div class="background">
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
  <my-footer></my-footer>
</template>

<script>
import MyHeader from "@/components/HeaderFooter/MyHeader"
import MyFooter from "@/components/HeaderFooter/MyFooter";
import {mapActions, mapMutations} from "vuex";

export default {
  components: {
    MyFooter,
    MyHeader
  },

  methods: {
    ...mapActions({
      getUserInfoByToken: 'auth/getUserInfoByToken',
    }),
  },
  mounted() {
    this.getUserInfoByToken();
  },
}
</script>

<style lang="scss">
@import "./src/styles/styles.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

#app {
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.background {
  height: 100%;
  background-color: $main;
  margin: 0;
  padding: 0;
}

.content {
  height: 100%;
  max-width: 800px;
  margin: 0 auto;
}

</style>
