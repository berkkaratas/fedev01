<template>
  <div class="items-center justify-end flex-1 hidden space-x-4 sm:flex">
    <a
      class="px-5 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg"
      href=""
      @click="loginPage()"
    >
      Giriş Yap
    </a>

    <a
      class="
        px-5
        py-2
        text-sm
        font-medium
        text-white
        bg-pink-500
        hover:bg-pink-600
        rounded-lg
      "
      href=""
      @click="loginPage()"
    >
      Kaydol
    </a>
  </div>
</template>

<script>
import { eventBus } from "/home/berk/Development/fedev/001/src/main.js";
export default {
  methods: {
    changeMethods() {
      eventBus.$emit("login");
    },
  },
};
</script>
