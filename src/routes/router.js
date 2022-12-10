import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import { JSEncrypt } from 'jsencrypt'
import { keyPrivateRSA } from '../helpers/privateKeyRsa';


Vue.use(VueRouter);

// configure router
const router = new VueRouter({
  //mode: 'history',
  routes, // short for routes: routes
  linkActiveClass: 'active',
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
});






router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.requiresAuth)) {
    const user = localStorage.getItem('user') //extraigo lo guardado del localstorade
    console.log('user: ' + user);


    let banderaRol = (to.matched.some(route => route.meta.rol));

/*     console.group('Rooooles');
    console.log('banderaRol');
    console.log(banderaRol);
    console.log('to.matched.some(route => route.meta.requiresAuth');
    console.log(to.matched.some(route => route.meta.requiresAuth));
    console.log('user' + user);
    console.groupEnd(); */






    if (!user) {

      next('/login');

    } else {

      if (banderaRol) {
        

        const session = localStorage.getItem('session')
        // Nuevo objeto JSEncrypt
        let decrypt= new JSEncrypt();
        // Establece la clave privada
        decrypt.setPrivateKey(keyPrivateRSA.keyPrivate);
        // Descentricta datos
        let bandSession = decrypt.decrypt(session);
    
        console.log('----Descencriptado----');
        console.log('bandSession: ' + bandSession);
        console.log('-----------------');






        if (bandSession === 'administrador') {
          next()
        } else {
          next('/dashboard');
        }

      } else {
        next();
      }

    }


  } else {
    next();
  }

});

export default router;
