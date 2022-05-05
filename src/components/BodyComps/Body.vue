<template>
  <section class="text-white bg-gray-900">
    <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <app-body-text></app-body-text>
      <app-body-content></app-body-content>
      <app-body-go-now></app-body-go-now>
    </div>
  </section>
</template>
<script>
import BodyGoNow from "./BodyGoNow.vue";
import BodyText from "./BodyText.vue";
import BodyContent from "./BodyContent.vue";
export default {
  components: {
    appBodyGoNow: BodyGoNow,
    appBodyText: BodyText,
    appBodyContent: BodyContent,
  },
};
</script>