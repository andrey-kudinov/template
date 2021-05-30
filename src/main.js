import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import "/src/assets/styles/styles.css";

Vue.config.productionTip = false;

new Vue({
  data() {
    return {
      sidebar: {
        sidebar: false,
        overlay: false,
      },
    }
  },
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
