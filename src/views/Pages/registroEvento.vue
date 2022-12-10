<template>
  <div>
    <!-- Header -->
    <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
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
      <!-- Table -->
      <b-row class="justify-content-center">
        <b-col lg="12" md="12">
          <b-card no-body class="bg-secondary border-0">
            <b-card-body class="px-lg-5 py-lg-5 formato">
              <b-row>
                <b-col cols="12" md="4" sm="12" xs="4" lg="4">
                  <div class="text-center text-muted mb-4">
                    <h2><strong>EVENTO</strong></h2>
                  </div>

                  <div class="card-header">
                    <div id="imagen" class="card-body sombreado">
                      <img v-bind:src="imagen" width="100%" height="100%" />
                    </div>
                  </div>
                  <div style="background: white">
                    <b-row>
                      <b-col cols="6" md="6" sm="6" xs="6" lg="6">
                        <label><b>TÍTULO:</b></label>
                      </b-col>

                      <b-col cols="6" md="6" sm="6" xs="6" lg="6">
                        <label>{{ user.nombreEvento }}</label>
                      </b-col>
                    </b-row>

                    <b-row>
                      <b-col cols="6" md="6" sm="6" xs="6" lg="6">
                        <label><b>TIPO DE EVENTO:</b></label>
                      </b-col>

                      <b-col cols="6" md="6" sm="6" xs="6" lg="6">
                        <label>{{ user.tipoEvento }}</label>
                      </b-col>
                    </b-row>

                    <b-row>
                      <b-col cols="6" md="6" sm="6" xs="6" lg="6">
                        <label><b>LUGAR:</b></label>
                      </b-col>

                      <b-col cols="6" md="6" sm="6" xs="6" lg="6">
                        <label>{{ user.lugar }}</label>
                      </b-col>
                    </b-row>

                    <b-row>
                      <b-col cols="6" md="6" sm="6" xs="6" lg="6">
                        <label><b>FECHA:</b></label>
                      </b-col>

                      <b-col cols="6" md="6" sm="6" xs="6" lg="6">
                        <label>{{ user.fecha }}</label>
                      </b-col>
                    </b-row>

                    <b-row>
                      <b-col cols="6" md="6" sm="6" xs="6" lg="6">
                        <label><b>HORA:</b></label>
                      </b-col>

                      <b-col cols="6" md="6" sm="6" xs="6" lg="6">
                        <label>{{ user.hora }}</label>
                      </b-col>
                    </b-row>

                    <div class="text-center">
                      <b-button
                        block
                        variant="primary"
                        v-on:click="abrir_pdf()"
                      >
                        Ver PDF
                        <i class="fa fa-eye"></i>
                      </b-button>
                    </div>
                  </div>
                </b-col>

                <b-col cols="12" md="8" sm="12" xs="8" lg="8">
                  <div class="text-center text-muted mb-4">
                    <h2><strong>REGISTRO DE PARTICIPANTES</strong></h2>
                  </div>

                  <validation-observer
                    v-slot="{ handleSubmit }"
                    ref="formValidator"
                  >
                    <b-form
                      role="form"
                      @submit.prevent="handleSubmit(registroAfiliado)"
                    >
                      <b-row>
                        <b-col cols="12" lg="4" md="4" sm="12">
                          <base-input
                            alternative
                            autocomplete="off"
                            class="mb-3"
                            prepend-icon="ni ni-key-25"
                            placeholder="Ingrese su dni"
                            name="dni"
                            type="number"
                            maxlength="10"
                            :rules="{ required: true, min: 6 }"
                            v-model="user.dni"
                            @blur="consultaDNI"
                          >
                          </base-input>
                        </b-col>

                        <b-col cols="12" lg="8" md="8" sm="12">
                          <base-input
                            alternative
                            autocomplete="off"
                            class="mb-3"
                            prepend-icon="ni ni-key-25"
                            placeholder="Apellidos y Nombres"
                            name="nombres"
                            id="nombres"
                            :rules="{ required: true }"
                            type="text"
                            v-model="user.nombres"
                            @keyup="mayuscula"
                            @keypress="isLetter"
                          >
                          </base-input>
                        </b-col>
                      </b-row>

                      <b-row>
                        <b-col cols="12" lg="12" md="12" sm="12">
                          <base-input
                            alternative
                            autocomplete="off"
                            class="mb-3"
                            prepend-icon="ni ni-key-25"
                            placeholder="Municipalidad/Institución"
                            name="municipalidad"
                            id="municipalidad"
                            type="text"
                            :rules="{ required: true }"
                            v-model="user.municipalidad"
                            @keyup="mayuscula"
                          >
                          </base-input>
                        </b-col>
                      </b-row>

                      <b-row>
                        <b-col cols="12" lg="4" md="4" sm="12">
                          <base-input
                            alternative
                            autocomplete="off"
                            class="mb-3"
                            placeholder="Distrito"
                            name="distrito"
                            id="distrito"
                            :rules="{ required: true }"
                            type="text"
                            v-model="user.distrito"
                            @keyup="mayuscula"
                            @keypress="isLetter"
                          />
                        </b-col>

                        <b-col cols="12" lg="4" md="4" sm="12">
                          <base-input
                            alternative
                            autocomplete="off"
                            class="mb-3"
                            placeholder="Provincia"
                            name="provincia"
                            id="provincia"
                            :rules="{ required: true }"
                            type="text"
                            v-model="user.provincia"
                            @keyup="mayuscula"
                            @keypress="isLetter"
                          />
                        </b-col>

                        <b-col cols="12" lg="4" md="4" sm="12">
                          <base-input
                            alternative
                            autocomplete="off"
                            class="mb-3"
                            placeholder="Región"
                            name="región"
                            id="region"
                            :rules="{ required: true }"
                            type="text"
                            v-model="user.region"
                            @keyup="mayuscula"
                            @keypress="isLetter"
                          />
                        </b-col>
                      </b-row>

                      <b-row>
                        <b-col cols="12" lg="6" md="6" sm="12" class="m-top">
                          <select class="form-control" v-model="user.cargo">
                            <option value="">Cargo</option>
                            <option>Alcalde</option>
                            <option>Regidor</option>
                            <option>Funcionario</option>
                            <option>Otro</option>
                          </select>
                        </b-col>

                        <b-col cols="12" lg="6" md="6" sm="12" class="m-top">
                          <base-input
                            alternative
                            autocomplete="off"
                            class="mb-3"
                            prepend-icon="ni ni-key-25"
                            placeholder="Email"
                            :rules="{ required: true, email: true }"
                            name="email"
                            type="text"
                            v-model="user.email"
                          />
                        </b-col>
                      </b-row>

                      <b-row>
                        <b-col cols="12" md="12" sm="12" xs="12" lg="6">
                          <MazPhoneNumberInput
                            show-code-on-list
                            class="mb-3"
                            name="movil"
                            size="sm"
                            default-country-code="PE"
                            :default-phone-number="initPhoneNumberExample"
                            :translations="{
                              countrySelectorLabel: 'Código',
                              phoneNumberLabel: 'Número celular',
                            }"
                            :preferred-countries="['FR', 'BE', 'DE']"
                            autocomplete="off"
                            @update="onUpdate"
                          />
                        </b-col>

                        <b-col cols="12" md="12" sm="12" xs="12" lg="6">
                          <base-input
                            alternative
                            autocomplete="off"
                            class="mb-3"
                            placeholder="Teléfono"
                            name="teléfono"
                            :rules="{ required: true }"
                            type="number"
                            v-model="user.telefono"
                          />
                        </b-col>
                      </b-row>

                      <div class="text-muted font-italic"></div>

                      <div class="text-center">
                        <b-button type="submit" variant="primary" class="mt-4"
                          >Guardar</b-button
                        >


                          <b-button variant="info" class="mt-4"
                            ><a href="https://femulp-app.web.app/viewEventos">Regresar</a></b-button
                          >

                      </div>
                    </b-form>
                  </validation-observer>
                </b-col>
              </b-row>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      initPhoneNumberExample: "",
      respuestMovil: false,
      movilEntrada: "",
      rutaImagen: "",
      imagen: "https://www.whatsivo.com/wp-content/uploads/2022/06/noimage.jpg",
      user: {
        dni: "",
        nombres: "",
        hora: "",
        email: "",
        movil: "",
        telefono: "",
        fecha: "",
        nombreEvento: "",
        tipoEvento: "",
        lugar: "",
        ruta: "",
        municipalidad: "",
        distrito: "",
        provincia: "",
        region: "",
        cargo: "",
        id: this.$route.params.id,
      },
    };
  },
  methods: {
    isLetter(e) {
      const char = String.fromCharCode(e.keyCode); // Get the character
      if (/^[a-zA-Z\s-ZÀ-ÿ-ñÑ]*$/g.test(char)) return true; // Match with regex
      e.preventDefault(); // If not match, don't add to input text
    },
    /*     soloLetras(e) {
      let char = String.fromCharCode(e.keyCode);
      if (
        /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g.test(
          char
        )
      )
        return true;
      e.preventDefault();
    }, */
    mayuscula(evt) {
      console.log(evt.target.id);
      let mayuscu = evt.target._value.toUpperCase();
      let idInput = evt.target.id;
      if (idInput === "nombres") {
        this.user.nombres = mayuscu;
      } else if (idInput === "municipalidad") {
        this.user.municipalidad = mayuscu;
      } else if (idInput === "distrito") {
        this.user.distrito = mayuscu;
      } else if (idInput === "provincia") {
        this.user.provincia = mayuscu;
      } else if (idInput === "region") {
        this.user.region = mayuscu;
      }
    },
    abrir_pdf() {
      window.open(this.user.ruta, "_blank");
    },
    onUpdate(payload) {
      //console.log(payload["isValid"]);
      if (payload["isValid"] === true) {
        (this.respuestMovil = true), (this.user.movil = payload["e164"]);
      } else {
        this.user.movil = payload["e164"];
        this.respuestMovil = false;
      }
    },
    ControlDigitos(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;

      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        if (this.user.dni.length === 9) {
          setTimeout(() => {
            this.consultaCedula();
          }, 600);
        }
        return true;
      }
    },
    consultaDNI() {
      this.$swal.fire({
        html: "<span style='font-size:14px'>Realizando consulta, por favor espere.. </span>",
        allowEscapeKey: false,
        allowOutsideClick: false,
        showConfirmButton: false,
        timer: 3000,
      });

      axios
        .get(
          this.$hostname + "/api/auth/consultarParticipantes/" + this.user.dni
        )
        .then((data) => {
          if (data.data.code === 200) {
            let respuesta = data.data.participantes;
            console.log(respuesta);
            this.user.nombres = respuesta[0]["nombres"];
            this.user.municipalidad = respuesta[0]["institucion"];
            this.user.distrito = respuesta[0]["distrito"];
            this.user.provincia = respuesta[0]["provincia"];
            this.user.region = respuesta[0]["region"];
          } else if (data.data.code === 204) {
          }
        });
    },
    registroAfiliado() {
      //console.log('editarPerfil');
      if (this.user.cargo === "") {
        return this.$swal.fire({
          icon: "info",
          text: "Debe seleccionar un cargo",
          transition: "zoom",
        });
      }

      if (this.respuestMovil === true) {
        //console.log(this.user);

        this.$swal.fire({
          html: "<span style='font-size:14px'>Registrando al evento, por favor espere.. </span>",
          allowEscapeKey: false,
          allowOutsideClick: false,
          showConfirmButton: false,
          timer: 5000,
        });

        //Aqui mandamos a guardar
        axios
          .post(this.$hostname + "/api/auth/agregarParticipantes", this.user)
          .then((data) => {
            console.log(data.data);
            if (data.data.code === 200) {
              this.$swal.fire({
                icon: "info",
                text: data.data.message,
                transition: "zoom",
              });
            } else if (data.data.code === 206) {
              this.$swal.fire({
                icon: "error",
                text: data.data.message,
                transition: "zoom",
              });
            }
          });
      } else {
        this.$swal.fire({
          icon: "info",
          text: "El número no es el correcto: " + this.user.movil,
          transition: "zoom",
        });
      }
    },
  },

  mounted() {
    console.log(this.$route.params.id);

    axios
      .get(
        this.$hostname +
          "/api/auth/cargaEventosRegistro/" +
          this.$route.params.id
      )
      .then((data) => {
        let code = data.data.code;

        if (code === 200) {
          let respuesta = data.data.cargaEvento;
          console.log("respuesta");
          console.log(respuesta);

          this.user.fecha = respuesta[0]["fecha"];
          this.user.hora = respuesta[0]["hora"];
          this.user.nombreEvento = respuesta[0]["tituloEvento"];
          this.imagen = respuesta[0]["rutaImg"];
          this.user.tipoEvento = respuesta[0]["tipoEvento"];
          this.user.lugar = respuesta[0]["lugar"];
          this.user.ruta = respuesta[0]["pdf"];

          console.log(this.user.ruta);

          //this.user.nombreEvento = disabled;
        }
      });
  },
};
</script>


<style scoped>
.bg-gradient-success {
  background: linear-gradient(87deg, #0c7bb0 0, #54b5e2 100%) !important;
}

.formato {
  background-color: while;
  box-shadow: 0 14px 80px rgb(34 35 58 / 20%);
}

.sombreado {
  box-shadow: 0 14px 80px rgb(34 35 58 / 20%);
}

.invalid-feedback {
  text-align: initial;
}

.swal2-html-container {
  text-align: center;
}

@media screen and (max-width: 769px) {
  .m-top {
    margin-top: 1rem;
  }
}

@media screen and (max-width: 990px) {
  .m-top {
    margin-top: 1rem;
  }
}
</style>

<style>
/*Eliminar decoradores del input number*/
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
