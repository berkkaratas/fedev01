<template>
  <div>
    <app-header></app-header>
    <app-body></app-body>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/HeaderComps/Header.vue";
import Body from "./components/BodyComps/Body.vue";
import Footer from "./components/FooterComps/Footer.vue";
export default {
  components: {
    appHeader: Header,
    appBody: Body,
    appFooter: Footer,
  },
};
</script>
