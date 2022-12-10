<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success" />
    <div>
      <b-card class="text-center mt--3">
        <!-- Page content -->

        <!-- Table -->
        <b-row class="justify-content-center mt--9">
          <b-col lg="12" md="12">
            <b-card no-body class="bg-secondary border-0">
              <b-card-body class="px-lg-5 py-lg-5 formato">
                <b-row>
                  <b-col cols="12" md="8" sm="12" xs="8" lg="8">
                    <div class="text-center text-muted mb-4">
                      <h2><strong>DETALLE</strong></h2>
                    </div>

                    <validation-observer
                      v-slot="{ handleSubmit }"
                      ref="formValidator"
                    >
                      <b-form
                        role="form"
                        @submit.prevent="handleSubmit(guardaEvento)"
                      >
                        <b-row>
                          <b-col cols="12" lg="4" md="4" sm="4">
                            <base-input
                              alternative
                              autocomplete="off"
                              class="mb-3"
                              prepend-icon="ni ni-key-25"
                              placeholder="Código"
                              name="codigo"
                              :rules="{ required: true }"
                              type="number"
                              v-model="evento.codigo"
                            >
                            </base-input>
                          </b-col>

                          <b-col cols="12" lg="8" md="8" sm="12">
                            <base-input
                              alternative
                              autocomplete="off"
                              class="mb-3"
                              prepend-icon="ni ni-key-25"
                              placeholder="Titulo del evento"
                              name="titulo"
                              id="titulo"
                              :rules="{ required: true }"
                              type="text"
                              v-model="evento.titulo"
                              @keyup="mayuscula"
                            >
                            </base-input>
                          </b-col>
                        </b-row>

                        <b-row>
                          <b-col cols="12" lg="6" md="6" sm="12">
                            <select
                              v-model="evento.tipoEvento"
                              class="form-control"
                              @blur="saberSelect()"
                            >
                              <option value="">Tipo de Evento</option>
                              <option>Presencial</option>
                              <option>Virtual</option>
                            </select>
                          </b-col>

                          <b-col cols="12" lg="6" md="6" sm="12">
                            <base-input
                              alternative
                              autocomplete="off"
                              class="mb-3"
                              prepend-icon="ni ni-key-25"
                              placeholder="Lugar"
                              name="lugar"
                              id="lugar"
                              :rules="{ required: true }"
                              type="text"
                              @keyup="mayuscula"
                              @keypress="isLetter"
                              v-model="evento.lugar"
                            >
                            </base-input>
                          </b-col>
                        </b-row>

                        <b-row>
                          <b-col cols="12" lg="6" md="6" sm="12" class="m-top">
                            <input
                              class="form-control"
                              type="date"
                              value=""
                              :rules="{ required: true }"
                              v-model="evento.fecha"
                            />
                          </b-col>

                          <b-col cols="12" lg="6" md="6" sm="12" class="m-top">
                            <base-input
                              alternative
                              autocomplete="off"
                              class="mb-3"
                              prepend-icon="ni ni-key-25"
                              placeholder="Horario"
                              name="horario"

                              type="time"
                              v-model="evento.hora"
                            >
                            </base-input>
                          </b-col>
                        </b-row>

                        <b-row>
                          <b-col cols="12" md="6" sm="12" xs="6" lg="6">
                            <base-input
                              alternative
                              autocomplete="off"
                              class="mb-3"
                              prepend-icon="ni ni-key-25"
                              placeholder="Coordinación regional"
                              name="coordinacion"
                              id="coordinacion"
                              :rules="{ required: true }"
                              type="text"
                              @keyup="mayuscula"
                              @keypress="isLetter"
                              v-model="evento.coordinador"
                            >
                            </base-input>
                          </b-col>

                          <b-col cols="12" md="6" sm="12" xs="6" lg="6">
                            <base-input
                              alternative
                              autocomplete="off"
                              class="mb-3"
                              prepend-icon="ni ni-key-25"
                              placeholder="Costo"
                              name="costo"
                              type="number"
                              v-model="evento.costo"
                            >
                            </base-input>
                          </b-col>
                        </b-row>

                        <b-row>
                          <b-col cols="12" md="12" sm="12" xs="12" lg="12">
                            <base-input
                              alternative
                              autocomplete="off"
                              class="mb-3"
                              prepend-icon="ni ni-key-25"
                              placeholder="Link del pdf"
                              name="link"
                              :rules="{ required: true }"
                              type="text"
                              v-model="evento.pdf"
                            >
                            </base-input>
                          </b-col>
                        </b-row>

                        <b-row>
                          <b-col cols="12" lg="6" md="6" sm="6">
                            <select
                              v-model="evento.estado"
                              class="form-control"
                            >
                              <option value="">Estado</option>
                              <option>Activo</option>
                              <option>Inactivo</option>
                            </select>
                          </b-col>

                          <b-col cols="12" lg="6" md="6" sm="6">

                            <b-button block v-bind:style="evento" v-on:click="cambiaEstado">{{evento.texto}}</b-button>

                          </b-col>
                        </b-row>


                        <b-row>
                          <b-col cols="12" lg="12" md="12" sm="12">
                            <textarea
                              placeholder="Observación"
                              rows="3"
                              wrap="soft"
                              class="form-control mt-4"
                              v-model="evento.observacion"
                            >
                      </textarea>
                          </b-col>
                        </b-row>




                        <div class="text-muted font-italic"></div>

                        <div class="text-center">
                          <b-button
                            type="submit"
                            variant="primary"
                            class="mt-4"
                            >{{ botonGestion }}</b-button
                          >
                        </div>
                      </b-form>
                    </validation-observer>
                  </b-col>

                  <b-col cols="12" md="4" sm="12" xs="4" lg="4">
                    <div class="text-center text-muted mb-4">
                      <h2><strong>FLYER</strong></h2>
                    </div>

                    <div id="imagen" class="card-body mt--4">
                      <img
                        v-bind:src="evento.imagen"
                        width="100%"
                        height="100%"
                      />
                    </div>

                    <b-button
                      class="btn btn-secondary btn-lg mt--2"
                      id="btnCargarImagen"
                      v-on:click="controlAdjunto()"
                      onclick="document.getElementById('txtRutaImagen').click()"
                    >
                      Adjuntar
                      <i class="far fa-image"></i>
                    </b-button>

                    <input
                      @change="cargarImagen"
                      type="file"
                      id="txtRutaImagen"
                      name="txtRutaImagen"
                      hidden=""
                      accept=".jpeg, .jpg, .png, .pdf"
                      disabled="true"
                    />
                  </b-col>
                </b-row>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>

        <br />
        <br />

        <!-- Table -->
        <b-row class="justify-content-center">
          <b-col lg="12" md="12">
            <b-card no-body class="bg-secondary border-0">
              <b-card-body class="px-lg-5 py-lg-5 formato">
                <div class="ard-header bg-transparent mt-3">
                  <h1 class="mb-0">..:: EVENTOS REGISTRADOS ::..</h1>
                </div>

                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table tablesorter" id="datatable">
                      <thead class="thead-light">
                        <tr>
                          <th style="width: 10px" scope="#">#</th>
                          <th scope="col">CÓDIGO</th>
                          <th scope="col">EVENTO</th>
                          <th scope="col">TIPO</th>
                          <th scope="col">LUGAR</th>
                          <th scope="col">FECHA</th>
                          <th scope="col">HORARIO</th>
                          <th scope="col">PRECIO</th>
                          <th scope="col">COORDINADOR</th>
                          <th scope="col">CALIFICACIÓN</th>
                          <th scope="col">OBSERVACION</th>
                          <th scope="col">ESTADO</th>
                          <th scope="col">IMAGEN</th>
                          <th scope="col">PDF</th>
                          <th scope="col">F. REGISTRO</th>
                          <th scope="col">USUARIO</th>
                          <th scope="col" style="text-align: center">ACCIÓN</th>
                        </tr>
                      </thead>
                      <tbody style="text-align: initial">
                        <tr
                          v-for="(cargaReporte, index) in datosEventos"
                          :key="cargaReporte.id"
                        >
                          <th scope="row">{{ index + 1 }}</th>
                          <td>{{ cargaReporte.codigo }}</td>
                          <td>{{ cargaReporte.tituloEvento }}</td>
                          <td>{{ cargaReporte.tipoEvento }}</td>
                          <td>{{ cargaReporte.lugar }}</td>
                          <td>{{ cargaReporte.fecha }}</td>
                          <td>{{ cargaReporte.hora }}</td>
                          <td>{{ cargaReporte.costo }}</td>
                          <td>{{ cargaReporte.coordinador }}</td>
                          <td>{{ cargaReporte.calificacion }}</td>
                          <td>{{ cargaReporte.observacion }}</td>
                          <td>{{ cargaReporte.estado }}</td>
                          <td>{{ cargaReporte.rutaImg }}</td>
                          <td>{{ cargaReporte.pdf }}</td>
                          <td>{{ cargaReporte.fechRegistro }}</td>
                          <td>{{ cargaReporte.usuario }}</td>
                          <td>
                            <a
                              class="btn btn-primary btn-sm"
                              style="color: white"
                            >
                              <i
                                class="fas fa-pencil-alt"
                                v-on:click="editar(cargaReporte)"
                              >
                              </i>
                            </a>
                            <a
                              class="btn btn-danger btn-sm"
                              style="color: white"
                            >
                              <i
                                class="fas fa-trash"
                                v-on:click="eliminar(cargaReporte)"
                              >
                              </i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

export default {
  data() {
    return {
      botonGestion: "Guardar",
      rutaImagen: "",
      disabled: 0,
      datosEventos: [],
      evento: {
        codigo: "",
        titulo: "",
        lugar: "",
        fecha: "",
        hora: "",
        tipoEvento: "",
        coordinador: "",
        costo: "",
        pdf: "",
        estado: "",
        observacion : "",
        previewImage: "",
        extensionImg: "",
        nombreImg: "",
        id_evento: "",
        calificacion: "",
        imagen:
          "https://www.whatsivo.com/wp-content/uploads/2022/06/noimage.jpg",
        usuario: localStorage.getItem("tokenAuth"),
        texto: 'En proceso..',
        color: 'aliceblue',
        background: 'orange',
        fontSize: '13px',
        estadoEstilo: 1
      },
    };
  },
  methods: {
    cambiaEstado(){

      if(this.evento.estadoEstilo === 1){
        this.evento.texto = 'Realizado con dificultades.'
        this.evento.background = 'red'
        this.evento.estadoEstilo = 2
      }else if(this.evento.estadoEstilo === 2){
        this.evento.texto = 'Realizado con éxito.'
        this.evento.background = 'green'
        this.evento.estadoEstilo = 3
      }else if(this.evento.estadoEstilo === 3){
        this.evento.texto = 'En proceso..'
        this.evento.background = 'orange'
        this.evento.estadoEstilo = 1
      }

    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    isLetter(e) {
      const char = String.fromCharCode(e.keyCode); // Get the character
      if (/^[a-zA-Z-ZÀ-ÿ-ñÑ\s]*$/g.test(char)) return true; // Match with regex
      e.preventDefault(); // If not match, don't add to input text
    },
    soloLetras(e) {
      let char = String.fromCharCode(e.keyCode);
      if (/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]*$/g.test(char)) return true;
      e.preventDefault();
    },
    mayuscula(evt) {
      //console.log(evt.target.id);
      let mayuscu = evt.target._value.toUpperCase();
      let idInput = evt.target.id;
      if (idInput === "titulo") {
        this.evento.titulo = mayuscu;
      } else if (idInput === "coordinacion") {
        this.evento.coordinador = mayuscu;
      } else if (idInput === "lugar") {
        this.evento.lugar = mayuscu;
      }
    },
    saberSelect() {
      //console.log("this.evento.tipoEvento: " + this.evento.tipoEvento);
      if (this.evento.tipoEvento !== "Presencial") {
        this.disabled = 1;
      } else {
        //console.log('ingresa al contrario y limpia la hora');
        this.evento.hora = "";
        this.disabled = 0;
      }
    },

    guardaEvento() {
      //console.log(this.evento);
      if (this.evento.estado === "") {
        return this.$swal.fire({
          icon: "info",
          text: "Escoga el estado",
          transition: "zoom",
        });
      }

      if (this.botonGestion === "Guardar") {
        if (this.evento.previewImage === "") {
          return this.$swal.fire({
            icon: "info",
            text: "Debe de escoger un flyer",
            transition: "zoom",
          });
        }


        this.$swal.fire({
          html: "<span style='font-size:14px'>Registrando evento, por favor espere.. </span>",
          allowEscapeKey: false,
          allowOutsideClick: false,
          showConfirmButton: false,
          timer: 7000
        });

        axios
          .post(this.$hostname + "/api/auth/guardaEvento", this.evento)
          .then((data) => {
            //console.log(data);

            if (data.data.code === 200) {
              this.$swal.fire({
                icon: "succes",
                text: "Registro Guardado",
                transition: "zoom",
              });

              this.$router.replace({
                path: "./pag",
                name: "página",
              });
            } else {
              this.$swal.fire({
                icon: "info",
                text: data.data.message,
                transition: "zoom",
              });
            }
          });
      } else {
        //aqui edito, hay que controlar si la imagen esta vacia
        //console.log(this.evento.previewImage);
        //console.log("toca editar");

        this.$swal.fire({
          html: "<span style='font-size:14px'>Editando evento, por favor espere.. </span>",
          allowEscapeKey: false,
          allowOutsideClick: false,
          showConfirmButton: false,
          timer: 7000
        });

        axios
          .post(this.$hostname + "/api/auth/editarEvento", this.evento)
          .then((data) => {
            //console.log(data);

            if (data.data.code === 200) {
              this.$swal.fire({
                icon: "succes",
                text: "Registro Editado",
                transition: "zoom",
              });

              this.$router.replace({
                path: "./pag",
                name: "página",
              });
            } else {
              this.$swal.fire({
                icon: "info",
                text: respuesta["message"],
                transition: "zoom",
              });
            }
          });
      }
    },

    editar(datos) {
      //console.log(datos);

      this.evento.codigo = datos.codigo;
      this.evento.coordinador = datos.coordinador;
      this.evento.costo = datos.costo;
      this.evento.fecha = datos.fecha;
      this.evento.hora = datos.hora;
      this.evento.lugar = datos.lugar;
      this.evento.pdf = datos.pdf;
      this.evento.imagen = datos.rutaImg;
      this.evento.titulo = datos.tituloEvento;
      this.evento.estado = datos.estado;
      this.evento.observacion = datos.observacion;
      this.evento.id_evento = datos.id_evento;
      this.evento.calificacion = datos.calificacion;

      if(datos.calificacion === 'En proceso..'){
        this.evento.texto = 'En proceso..'
        this.evento.background = 'orange'
        this.evento.estadoEstilo = 1
      }else if(datos.calificacion === 'Realizado con dificultades.'){
        this.evento.texto = 'Realizado con dificultades.'
        this.evento.background = 'red'
        this.evento.estadoEstilo = 2
      }else if(datos.calificacion === 'Realizado con éxito.'){
        this.evento.texto = 'Realizado con éxito.'
        this.evento.background = 'green'
        this.evento.estadoEstilo = 3
      }

      let TipoEv = datos.tipoEvento;
      TipoEv === "PRESENCIAL"
        ? (this.evento.tipoEvento = "Presencial")
        : (this.evento.tipoEvento = "Virtual");

      this.botonGestion = "Editar";
      this.scrollToTop();
    },

    limpiar() {
      this.evento.codigo = "";
      this.evento.titulo = "";
      this.evento.tema = "";
      this.evento.lugar = "";
      this.evento.fecha = "";
      this.evento.hora = "";
      this.evento.oficina = "";
      this.evento.centro = "";
      this.evento.contacto = "";
      this.evento.beneficio = "";
      this.evento.imagen = "";
      this.evento.previewImage = "";
    },

    eliminar(datos) {
      this.$swal({
        title: "Advertencia",
        text: "El evento será eliminado, está de acuerdo ?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si",
        cancelButtonText: "No",
        showLoaderOnConfirm: true /*  */,
      }).then((result) => {
        if (result.value) {
          console.log("El evento a eliminar es: ");
          console.log(datos);

          let enviar = {
            id_evento: datos.id_evento
          }

          axios
            .post(this.$hostname + "/api/auth/eliminarEvento", enviar)
            .then((data) => {
              console.log(data);
              if (data.data.code === 200) {
                this.$swal.fire({
                  icon: "succes",
                  text: "Registro eliminado",
                  transition: "zoom",
                });


                this.$router.replace({
                  path: "./pag",
                  name: "página",
                });

              }else{
                this.$swal.fire({
                  icon: "error",
                  text: "Evento con participantes",
                  transition: "zoom",
                });
              }
            })



        }
      });
    },

    cargarImagen(ev) {
      //Con esto tomo el nombre del archivo
      //console.log(ev.target.value);
      const file = ev.target.files[0];
      this.rutaImagen = file;
      let message = "";
      let arrType = file["type"].split("/");

      this.evento.nombreImg = file["name"];
      /*       console.log(arrType);
      console.log("*****************");
      console.log(arrType[0]);
      console.log("*****************");
      console.log(arrType[1]);
      console.log("*****************");
      console.log(file["size"]);
      console.log("*****************"); */

      if (arrType[0] == "image") {
        if (arrType[1] != "jpeg" && arrType[1] != "png") {
          message = "La imagen debe estar en formato JPG o PNG!";
        } else if (file["size"] > 2000000) {
          message = "La imagen no debe pesar más de 2MB!";
        }
        if (message != "") {
          //alert(message);

          this.$swal.fire({
            icon: "info",
            text: message,
            transition: "zoom",
          });
        }
      } else if (arrType[0] == "application") {
        if (
          arrType[1] != "pdf" &&
          arrType[1] != "vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        ) {
          message = "El archivo debe estar en formato PDF! o XLSX!";
        } else if (file["size"] > 2000000) {
          message = "El archivo no debe pesar más de 2MB!";
        }
        if (message != "") {
          //alert(message);

          this.$swal.fire({
            icon: "info",
            text: message,
            transition: "zoom",
          });
        }
      }
      if (message == "") {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        if (arrType[1] === "jpeg" || arrType[1] === "png") {
          this.evento.extensionImg = arrType[1];

          reader.onload = (ev) => {
            document.getElementById("imagen").innerHTML =
              "<img id='unloadImagen' src='" +
              ev.target.result +
              "' width='100%' height='100%' >";
            this.evento.previewImage = ev.target.result;
          };
        }
      }
    },

    controlAdjunto() {
      document.getElementById("txtRutaImagen").disabled = false;
    },

    cargaData() {
      axios.get(this.$hostname + "/api/auth/cargaEventos").then((data) => {
        let code = data.data.code;
        let respuesta = data.data.cargaEventos;

        if (code === 200) {
          this.datosEventos = respuesta;
          //console.log(respuesta);

          setTimeout(() => {
            $("#datatable").DataTable({
              lengthMenu: [
                [5, 10, 25, 50, -1],
                [5, 10, 25, 50, "All"],
              ],
              pageLength: 5,
              language: {
                url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json",
              },
            });
          });
        }
      });
    },
  },

  mounted() {
    this.cargaData();
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

.invalid-feedback {
  text-align: initial;
}
</style>
