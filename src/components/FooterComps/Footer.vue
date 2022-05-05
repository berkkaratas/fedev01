<template>
  <footer class="bg-gray-900">
    <div class="max-w-screen-xl px-4 pt-16 pb-8 mx-auto sm:px-6 lg:px-8">
      <app-email-subs></app-email-subs>
      <div class="grid grid-cols-1 gap-8 mt-16 lg:grid-cols-2 lg:gap-32">
        <app-social></app-social>
        <app-connections></app-connections>
      </div>
      <app-footer-brand></app-footer-brand>
    </div>
  </footer>
</template>
<script>
import Social from "./Social.vue";
import FooterBrand from "./FooterBrand.vue";
import EmailSubs from "./EmailSubs.vue";
import Connections from "./Connections.vue";
export default {
  components: {
    appSocial: Social,
    appConnections: Connections,
    appEmailSubs: EmailSubs,
    appFooterBrand: FooterBrand,
  },
};
</script>