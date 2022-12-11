/*!

=========================================================
* BootstrapVue Argon Dashboard - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/bootstrap-vue-argon-dashboard
* Copyright 2020 Creative Tim (https://www.creative-tim.com)


*/

import Vue from 'vue';
import DashboardPlugin from './plugins/dashboard-plugin';
import VueSweetalert2 from 'vue-sweetalert2';
import globalVue from './helpers/funcionesGlobales';
import { MazPhoneNumberInput } from 'maz-ui';




import App from './App.vue';

// router setup
import router from './routes/router';

import 'maz-ui/lib/css/index.css'; //formato de numero
import 'sweetalert2/dist/sweetalert2.min.css';


// plugin setup
Vue.use(DashboardPlugin);
Vue.use(VueSweetalert2);
Vue.use(globalVue);
Vue.use(MazPhoneNumberInput);


//Vue.LoadScript('');

//Vue.prototype.$hostname = "https://app-femulp.herokuapp.com"
    //Vue.prototype.$hostname="http://localhost:3000"
 Vue.prototype.$hostname = "https://femullapp-usf9.onrender.com"



/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App),
    router
});
