import Vue from 'vue'
import App from './App.vue'


const EventBus = new Vue();

export default EventBus;

new Vue({
  el: '#app',
  render: h => h(App)
})
