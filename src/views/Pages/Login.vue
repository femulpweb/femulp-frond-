<template>
  <div>
    <!-- Header -->
    <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
      <b-container>
        <!--         <div class="header-body text-center mb-7">
          <b-row class="justify-content-center">
            <b-col xl="5" lg="6" md="8" class="px-5">
              <h1 class="text-white">Welcome!</h1>
              <p class="text-lead text-white">Use these awesome forms to login or create new account in your project for
                free.</p>
            </b-col>
          </b-row>
        </div> -->
        <br />
      </b-container>
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg
          x="0"
          y="0"
          viewBox="0 0 2560 100"
          preserveAspectRatio="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            class="fill-default"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </div>
    <!-- Page content -->
    <b-container class="mt--8 pb-5">
      <b-row class="justify-content-center mt--8">
        <b-col lg="5" md="7" class="mt--6">
          <b-card no-body class="bg-secondary border-0 mb-0">
            <div style=" text-align: center; ">
              <img src="img/brand/rc5.png" style="width: 180px" />
            </div>
            <b-card-body class="px-lg-5 py-lg-5 mt--4">
              <!-- <h1 align="center"><strong>KAREN</strong></h1> -->

              <div class="text-center text-muted mb-4">
                <small>INGRESA AL SISTEMA CON TUS CREDENCIALES</small>
              </div>
              <validation-observer ref="formValidator">
                <b-form v-on:submit.prevent="login">
                  <base-input
                    alternative
                    class="mb-3"
                    name="Email"
                    :rules="{ required: true, email: true }"
                    prepend-icon="ni ni-email-83"
                    placeholder="Email"
                    v-model="usuario.email"
                  >
                  </base-input>

                  <base-input
                    alternative
                    class="mb-3"
                    name="Password"
                    :rules="{ required: true, min: 6 }"
                    prepend-icon="ni ni-lock-circle-open"
                    type="password"
                    placeholder="Password"
                    v-model="usuario.password"
                  >
                  </base-input>

                  <b-form-checkbox v-model="usuario.rememberMe"
                    >Recordarme</b-form-checkbox
                  >
                  <div class="text-center">
                    <base-button
                      type="primary"
                      native-type="submit"
                      class="my-4"
                      >Iniciar Sesion</base-button
                    >
                  </div>
                </b-form>
              </validation-observer>
            </b-card-body>
          </b-card>
          <b-row class="mt-3">
<!--             <b-col cols="6">
              <router-link to="/dashboard" class="text-light"
                ><small>Olvidaste la contraseña ?</small></router-link
              >
            </b-col>
            <b-col cols="6" class="text-right">
              <router-link to="/register" class="text-light"
                ><small>Crear Cuenta</small></router-link
              >
            </b-col> -->
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import { JSEncrypt } from "jsencrypt";
import { keyPrivateRSA } from "../../helpers/privateKeyRsa";

export default {
  data() {
    return {
      usuario: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    login() {


    //console.log(this.usuario)


      axios
        .post(this.$hostname + "/api/auth/loginIngreso", this.usuario)
        .then((data) => {

          //console.log(data)
          
          let respuesta = data.data;
          //console.log(respuesta);
          let code = respuesta["code"];
          //let empresa;

          if (code === 204) {
            this.$swal.fire({
              icon: "info",
              text: respuesta["message"],
              transition: "zoom",
            });
          } else if (code === 200) {
            //console.log("Me ingresa al 200");

            let bandSession = respuesta["rol"];
            let encryptor = new JSEncrypt();
            encryptor.setPublicKey(keyPrivateRSA.keyPrivate);
            let datosSession = encryptor.encrypt(bandSession);

            localStorage.setItem("user", "YES"); //Añado al localStorade
            //localStorage.setItem("session", datosSession); //envio la session encryptada - Administrador - Normal
            //localStorage.setItem("sender", empresa + pass);
            localStorage.setItem("tokenAuth", this.usuario.email);
            localStorage.setItem("loggedIn", "NO");

            //console.log("ha cargado el lado izquierdo");
            //console.log(localStorage.getItem("session"));

            this.$router.push({ path: "/dashboard" });
          } else if (code === 206) {
            //console.log("Me ingresa al 206");
            this.$swal.fire(
              "Control del Sistema",
              respuesta["message"],
              "info"
            );
          }else{
            //esto es una prueba

            this.$swal.fire(
              "Control del Sistema",
              "No existe usuario",
              "error"
            );

          } 
        })
        .catch((e) => {
          //console.log("error:");
          console.log(e);
        });
    },
  },
  mounted() {
    //console.log("Mounted");
    let revisaSession = localStorage.getItem("user");
    //console.log("revisaSession: " + revisaSession);

    if (revisaSession === "YES" && localStorage.getItem("sender") != "") {
      this.$router.push({ path: "/dashboard" });
    }
  },
};
</script>

<style scoped>
.bg-gradient-success {
  background: linear-gradient(87deg, #0c7bb0 0, #54b5e2 100%) !important;
}

.bg-default {
    background-color: #ff1e1a !important;
}

.swal2-html-container{
  text-align: center;
}

.btn-primary,
.btn-primary:hover,
.btn-primary:active,
.btn-primary:visited,
.btn-primary:focus {
  background-color: #172b4d;
  border-color: #172b4d;
}
</style>