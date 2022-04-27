<template>
  <div class="footer">
    <div class="footer__content">
      <div
          class="link"
          @click="$router.push('/users')"
      >
        users
      </div>

      <div
          class="link"
          @click="$router.push('/about')"
      >
        about
      </div>

      <logout-button class="logout_button"/>
    </div>
  </div>
</template>

<script>

import LogoutButton from "@/components/UI/LogoutButton";
import MyButton2 from "@/components/UI/MyButton2";

export default {
  name: "my-footer",
  components: {MyButton2, LogoutButton},
}
</script>

<style lang="scss" scoped>
@import "../../styles/styles";
@import "src/components/HeaderFooter/styles";

.footer__content {
  justify-content: center;
}

.link, .logout_button {
  padding: 0 20px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: underline;
  text-underline: $font;
  cursor: pointer;
}

</style>
