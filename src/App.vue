<template>
  <div class="bg-gray-900 text-white">
    <app-header></app-header>
    <div v-if="page == 'home'">
      <app-body></app-body>
    </div>
    <div v-else-if="page == 'login'">
      <app-login></app-login>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/HeaderComps/Header.vue";
import Body from "./components/BodyComps/Home/Body.vue";
import Footer from "./components/FooterComps/Footer.vue";
import Login from "./components/BodyComps/Login/Login.vue";
export default {
  data() {
    return {
      page: "home",
    };
  },
  components: {
    appHeader: Header,
    appBody: Body,
    appFooter: Footer,
    appLogin: Login,
  },
};
</script>
