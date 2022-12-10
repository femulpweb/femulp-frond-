<template>
  <div class="wrapper">
    <notifications></notifications>
    <side-bar>
      <template slot="links">
        <div class="centrar mt--2" id="div_qr_code">
          <span id="reemplaza" v-if="login & admin">Administrador</span>
          <span id="reemplaza" v-else-if="login">Identificado</span>
          <span id="reemplaza" v-else>Usuario Normal</span>

        </div>
        <sidebar-item
          :link="{
            name: 'Dashboard',
            path: '/dashboard',
            icon: 'ni ni-tv-2 text-primary',
          }"
          class="mt-3"
        >
        </sidebar-item>

<!--         <sidebar-item
          :link="{
            name: 'Reportes',
            path: '/reporteAfiliados',
            icon: 'ni ni-chart-bar-32 text-primary',
          }"
          
        >
        </sidebar-item> -->


<!--         <sidebar-item
          :link="{
            name: 'Enviar Mensajes',
            path: '/enviosws',
            icon: 'ni ni-planet text-blue',
          }"
        >
        </sidebar-item>
 -->
<!--         <sidebar-item
          v-show="login && admin"
          :link="{
            name: 'Herramientas',
            path: '/dashboard',
            icon: 'ni ni-pin-3 text-primary',
          }"
        >
        </sidebar-item> -->

<!--         <sidebar-item
          :link="{
            name: 'User Profile',
            path: '/profile',
            icon: 'ni ni-single-02 text-yellow',
          }"
        >
        </sidebar-item> -->

        <sidebar-item
          :link="{
            name: 'Inscripción del evento',
            path: '/administrarEventos',
            icon: 'ni ni-circle-08 text-primary',
          }"
        >
        </sidebar-item>


        <sidebar-item
          :link="{
            name: 'Registro al evento',
            path: '/viewEventos',
            icon: 'ni ni-planet text-blue',
          }"
        >
        </sidebar-item>



        <sidebar-item
          :link="{
            name: 'reporte General',
            path: '/reporteGeneral',
            icon: 'ni ni-collection text-primary',
          }"
          
        >
        </sidebar-item>



      </template>
    </side-bar>
    <div class="main-content">
      <dashboard-navbar :type="$route.meta.navbarType"></dashboard-navbar>

      <div @click="$sidebar.displaySidebar(false)">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
      </div>
      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<script>
/* eslint-disable no-new */
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

function hasElement(className) {
  return document.getElementsByClassName(className).length > 0;
}

function initScrollbar(className) {
  if (hasElement(className)) {
    new PerfectScrollbar(`.${className}`);
  } else {
    // try to init it later in case this component is loaded async
    setTimeout(() => {
      initScrollbar(className);
    }, 100);
  }
}

import DashboardNavbar from "./DashboardNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import { FadeTransition } from "vue2-transitions";
import axios from "axios";



export default {

  data() {

    return {
      login: false,
      admin: false,
      sesiones:{
        tokenAuth:''
      }
    };
  },

  components: {
    DashboardNavbar,
    ContentFooter,
    DashboardContent,
    FadeTransition,
  },
  methods: {
    initScrollbar() {
      let isWindows = navigator.platform.startsWith("Win");
      if (isWindows) {
        initScrollbar("sidenav");
      }
    },
  },
  mounted() {
    this.initScrollbar();    
    this.sesiones.tokenAuth = localStorage.getItem('tokenAuth')

        axios
        .post(this.$hostname + "/api/auth/sesionActiva", this.sesiones)
        .then((data) => {
          let respuesta = data.data;
          let code = respuesta['code'];
          let status = Number(respuesta['estado']);
          let nombre = respuesta['nombre'];
          let rol = respuesta['rol'];
          //let photoPerfil = respuesta['urlPerfil'];

          //console.log(respuesta);

            if(code === 200){

              if( status === 1 ){
                
                document.getElementById("reemplaza").innerHTML = 'Usuario ' + rol; 
                document.getElementById("cargaNombre").innerHTML = nombre;                               
                //document.getElementById("photoPeril").innerHTML = photoPerfil;

                if(rol==='administrador'){
                        this.login=true;
                        this.admin=true;
                }else{
                        this.login=false;
                        this.admin=false;
                }

              }else{
                localStorage.removeItem("user");
                localStorage.removeItem("session");
                localStorage.removeItem("tokenAuth");
                localStorage.removeItem("sender");
                localStorage.removeItem("loggedIn");
                
                //console.log('Hay que matar la sesion y eliminar el localstorade');
                this.$router.push({ path: '/login' })
              }

            }else{
              //console.log('El code fue diferente a 200 del estado del usuario');
            }





        })


  }
};
</script>
<style lang="scss">

.centrar{
  text-align: center;
  background: linear-gradient(87deg, #0c7bb0 0, #54b5e2 100%);
  color: white;
  /* font-weight: bold; */
}

</style>
