<template>
  <header class="bg-gray-900 shadow-sm">
    <div class="max-w-screen-xl p-4 mx-auto">
      <div class="flex items-center justify-between space-x-4 lg:space-x-10">
        <div class="flex lg:w-0 lg:flex-1">
          <span class="w-20 h-10 font-medium text-white sm:text-3xl rounded-lg"
            >FeDevClub</span
          >
        </div>

        <app-navbar></app-navbar>
        <app-login></app-login>
        <app-hidden-header></app-hidden-header>
      </div>
    </div>
  </header>
</template>

<script>
import Login from "./Login.vue";
import Navbar from "./Navbar.vue";
import HiddenHeader from "./HiddenHeader.vue";
export default {
  components: {
    appLogin: Login,
    appHiddenHeader: HiddenHeader,
    appNavbar: Navbar,
  },
};
</script>