<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success" />
    <div>
      <b-card class="text-center">
        <!-- Page content -->

        <!-- Table -->
        <b-row class="justify-content-cente mt--9">
          <b-col lg="12" md="12">
            <b-card no-body class="bg-secondary border-0">
              <b-card-body class="px-lg-5 py-lg-5 formato">
                <div class="ard-header bg-transparent">
                  <h1 class="mb-0">..:: REPORTE DETALLADO ::..</h1>
                </div>

                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table tablesorter" id="datatable">
                      <thead class="thead-light">
                        <tr>
                          <th style="width: 10px" scope="#">#</th>
                          <th scope="col">CÓDIGO</th>
                          <th scope="col">TITULO DEL EVENTO</th>
                          <th scope="col">PARTICIPANTE</th>
                          <th scope="col">TIPO</th>
                          <th scope="col">COORDINADOR</th>
                          <th scope="col">COSTO</th>
                          <th scope="col">FECHA DEL EVENTO</th>
                          <th scope="col">LUGAR</th>
                          <th scope="col">ESTADO</th>
                          <th scope="col">CALIFICACIÓN</th>
                          <th scope="col">OBSERVACIÓN</th>
                          <th scope="col">EVENTO REGISTRADO</th>
                          <th scope="col">INSTITUCIÓN</th>
                          <th scope="col">DISTRITO</th>

                          <th scope="col">PROVINCIA</th>
                          <th scope="col">REGIÓN</th>
                          <th scope="col">CARGO</th>
                          <th scope="col">EMAIL</th>
                          <th scope="col">MOVIL</th>
                          <th scope="col">TELEFONO</th>
                          <th scope="col">FECH REGISTRO</th>
                        </tr>
                      </thead>
                      <tbody style="text-align: initial">
                        <tr
                          v-for="(cargaReporte, index) in datosGeneral"
                          :key="cargaReporte.id"
                        >
                          <th scope="row">{{ index + 1 }}</th>
                          <td>{{ cargaReporte.codigo }}</td>
                          <td>{{ cargaReporte.tituloEvento }}</td>
                          <td>{{ cargaReporte.participante }}</td>
                          <td>{{ cargaReporte.tipoEvento }}</td>
                          <td>{{ cargaReporte.coordinador }}</td>
                          <td>{{ cargaReporte.costo }}</td>
                          <td>{{ cargaReporte.fecha }}</td>
                          <td>{{ cargaReporte.lugar }}</td>
                          <td>{{ cargaReporte.estado }}</td>
                          <td>{{ cargaReporte.calificacion }}</td>
                          <td>{{ cargaReporte.observacion }}</td>
                          <td>{{ cargaReporte.eventoRegistrado }}</td>
                          <td>{{ cargaReporte.institucion }}</td>
                          <td>{{ cargaReporte.distrito }}</td>
                          <td>{{ cargaReporte.provincia }}</td>
                          <td>{{ cargaReporte.region }}</td>

                          <td>{{ cargaReporte.cargo }}</td>
                          <td>{{ cargaReporte.email }}</td>
                          <td>{{ cargaReporte.movil }}</td>
                          <td>{{ cargaReporte.telefono }}</td>
                          <td>{{ cargaReporte.fechaRegistro }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </b-card-body>
            </b-card>

            <br />
            <b-card no-body class="bg-secondary border-0">
              <b-card-body class="px-lg-5 py-lg-5 formato">
                <b-row>
                  <b-col cols="6" lg="4" md="4" sm="4">
                    <select class="form-control" v-model="seleccionData">
                      <option value="">Tipo de reporte</option>
                      <option>Detallado General</option>
                      <option>Eventos</option>
                      <option>Participantes</option>
                    </select>
                  </b-col>
                  <b-col cols="6" lg="6" md="6" sm="6">
                    <b-button variant="primary btn-lg" v-on:click="control()">
                      Descargar Xlsx
                      <i class="fas fa-file-excel"></i>
                    </b-button>

                    <b-button variant="success btn-lg" v-on:click="control2()">
                      Descargar PDF
                      <i class="far fa-file-pdf"></i>
                    </b-button>
                  </b-col>
                  <!--                   <b-col cols="6" lg="4" md="4" sm="4">
                    <b-button
                      variant="success btn-lg"
                    >
                      Descargar informe
                      <i class="far fa-file-pdf"></i>
                    </b-button>
                  </b-col>  -->
                </b-row>
              </b-card-body>
            </b-card>

            <br>

        <b-row class="justify-content-center">
          <b-col lg="12" md="12">
            <b-card no-body class="bg-secondary border-0">
              <b-card-body class="px-lg-5 py-lg-5 formato">
                <div class="ard-header bg-transparent mt-3">
                  <h1 class="mb-0">..:: NIVEL DE EFICACIA ::..</h1>
                </div>

                <div class="card-body">

                  <b-row>
                  <b-col cols="6" lg="6" md="4" sm="4">
                    <br>
                        <tr>
                        <td style="width:300px;">EFICACIA %:</td>
                        <td style="width:200px;">
                          <stats-card
                              style=" padding-top: 17px; width:200px; height: 30px; justify-content: center;"
                              disabled=»disabled»
                          >
                            <h2 style=" padding-top: 9px; " disabled=»disabled»>{{eficacia}}</h2>
                            </stats-card>
                          </td>
                        </tr>
                        <br>
                        <tr>

                          <td style="width:300px; " >TOTAL DE EVENTOS:</td>
                          <td style="width:200px;">
                          <stats-card
                              style=" padding-top: 17px; width:200px; height: 30px; justify-content: center;"
                              disabled=»disabled»
                          >
                            <h2 style=" padding-top: 9px; " disabled=»disabled»>{{contadorEventos}}</h2>
                            </stats-card>
                          </td>

                        </tr>
                      </b-col>
                      <b-col cols="6" lg="6" md="4" sm="4">
                        <tr>
                        <td style="width:300px;"> EVENTOS CULMINADOS CON EXITO:</td>
                        <td style="width:200px;">
                          <stats-card
                          style=" padding-top: 17px; width:200px; height: 30px; justify-content: center;"
                              disabled=»disabled»
                          >
                            <h2 style=" padding-top: 9px; " disabled=»disabled»>{{contadorExito}}</h2>
                            </stats-card>

                        </td>
                        </tr>
                        <br>
                        <tr>
                        <td style="width:300px;">EVENTOS CULMINADOS CON DIFICULTADES:</td>
                        <td style="width:200px;">
                          <stats-card
                              style=" padding-top: 17px; width:200px; height: 30px; justify-content: center;"
                              disabled=»disabled»
                          >
                            <h2 style=" padding-top: 9px; " disabled=»disabled»>{{contadorDificultades}}</h2>
                            </stats-card>

                      </td>
                        </tr>
                        <br>
                        <tr>
                        <td style="width:300px;">EVENTOS EN PROCESO:</td>
                        <td style="width:200px;">
                          <stats-card
                              style=" padding-top: 17px; width:200px; height: 30px; justify-content: center;"
                              disabled=»disabled»
                          >
                            <h2 style=" padding-top: 9px; " disabled=»disabled»>{{contadorProceso}}</h2>
                            </stats-card>

                      </td>
                        </tr>

                  </b-col>





				    </b-row>



	    </div>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>



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
      datosGeneral: [],
      seleccionData: "",
      contadorEventos: '',
      contadorExito: '',
      contadorDificultades: '',
      contadorProceso:'',
      eficacia: ''


    };
  },
  methods: {
    cargaDatos() {
      axios.get(this.$hostname + "/api/auth/reporteDetallado").then((data) => {
        if (data.data.code) {
          let respuesta = data.data.consulDetallado;
          this.datosGeneral = respuesta;

          setTimeout(() => {
            $("#datatable").DataTable({
              lengthMenu: [
                [5, 10, 25, 50, -1],
                [5, 10, 25, 50, "All"],
              ],
              pageLength: 10,
              language: {
                url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json",
              },
            });
          });
        }
      });
    },

    control() {
      //alert(this.seleccionData);

      if (this.seleccionData === "") {
        return this.$swal.fire({
          icon: "error",
          text: "Escoja el tipo de reporte",
          transition: "zoom",
        });
      } else {
        this.$swal({
          title: "Advertencia",
          html: "Desea descargar el archivo ?",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si",
          cancelButtonText: "No",
          showLoaderOnConfirm: true,
        }).then((result) => {
          if (result.value) {
            this.descargarArchivoExcel();
          }
        });
      }
    },

    control2() {
      //alert(this.seleccionData);

      if (this.seleccionData === "") {
        return this.$swal.fire({
          icon: "error",
          text: "Escoja el tipo de reporte",
          transition: "zoom",
        });
      } else {
        this.$swal({
          title: "Advertencia",
          html: "Desea descargar el archivo ?",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si",
          cancelButtonText: "No",
          showLoaderOnConfirm: true,
        }).then((result) => {
          if (result.value) {
            this.descargarArchivoPdf();
          }
        });
      }
    },
    descargarArchivoExcel() {

        this.$swal.fire({
          html: "<span style='font-size:14px'>Generando reporte, por favor espere.. </span>",
          allowEscapeKey: false,
          allowOutsideClick: false,
          showConfirmButton: false,
          timer: 3000,
        });

      if (this.seleccionData === "Detallado General") {
        axios({
          url: this.$hostname + "/api/auth/reporteExcelGeneral", // File URL Goes Here
          method: "GET",
          responseType: "blob",
        }).then((response) => {
          var fileURL = window.URL.createObjectURL(new Blob([response.data]));
          var fileLink = document.createElement("a");

          fileLink.href = fileURL;
          fileLink.setAttribute("download", "reporteDetallado.xlsx");
          document.body.appendChild(fileLink);

          fileLink.click();
        });
      }else if(this.seleccionData === "Eventos"){
        axios({
          url: this.$hostname + "/api/auth/reporteExcelEventos", // File URL Goes Here
          method: "GET",
          responseType: "blob",
        }).then((response) => {
          var fileURL = window.URL.createObjectURL(new Blob([response.data]));
          var fileLink = document.createElement("a");

          fileLink.href = fileURL;
          fileLink.setAttribute("download", "reporteEventos.xlsx");
          document.body.appendChild(fileLink);

          fileLink.click();
        });
      }else if(this.seleccionData === "Participantes"){
        axios({
          url: this.$hostname + "/api/auth/reporteExcelParticipantes", // File URL Goes Here
          method: "GET",
          responseType: "blob",
        }).then((response) => {
          var fileURL = window.URL.createObjectURL(new Blob([response.data]));
          var fileLink = document.createElement("a");

          fileLink.href = fileURL;
          fileLink.setAttribute("download", "reporteParticipantes.xlsx");
          document.body.appendChild(fileLink);

          fileLink.click();
        });
      }
    },

 cerrarPost() {
      document.getElementById("desaparecePost").style.display = "none";
    },

    contador(){
      axios
        .get(this.$hostname + "/api/auth/cuentaEventos")
        .then((data) => {
            console.log(data);

           if(data.data.code === 200){
              this.contadorEventos =  data.data.contadorEventos;
             this.contadorExito =  data.data.contadorExito;
             this.contadorDificultades =  data.data.contadorDificultades;
             this.contadorProceso =  data.data.contadorProceso;
             console.log('contadoreventos: '+ this.contadorEventos)
             console.log('contadorExitos: '+ this.contadorExito)
             console.log('contadorDificultades: '+ this.contadorDificultades)
             console.log('contadorProceso: '+ this.contadorProceso)

this.eficacia = (Number(this.contadorExito) /(Number(this.contadorEventos) ))*100
      }
        })
    },
    descargarArchivoPdf(){

        this.$swal.fire({
          html: "<span style='font-size:14px'>Generando reporte, por favor espere.. </span>",
          allowEscapeKey: false,
          allowOutsideClick: false,
          showConfirmButton: false,
          timer: 5000,
        });

      if (this.seleccionData === "Eventos") {
        axios({
          url: this.$hostname + "/api/auth/reportePDF", // File URL Goes Here
          method: "GET",
          responseType: "blob",
        }).then((response) => {
          var fileURL = window.URL.createObjectURL(new Blob([response.data]));
          var fileLink = document.createElement("a");

          fileLink.href = fileURL;
          fileLink.setAttribute("download", "reporteEventos.pdf");
          document.body.appendChild(fileLink);

          fileLink.click();
        });
      }else if(this.seleccionData === "Participantes"){
        axios({
          url: this.$hostname + "/api/auth/reportePDFAfiliados", // File URL Goes Here
          method: "GET",
          responseType: "blob",
        }).then((response) => {
          var fileURL = window.URL.createObjectURL(new Blob([response.data]));
          var fileLink = document.createElement("a");

          fileLink.href = fileURL;
          fileLink.setAttribute("download", "reporteParticipantes.pdf");
          document.body.appendChild(fileLink);

          fileLink.click();
        });
      }else if(this.seleccionData === "Detallado General"){
        axios({
          url: this.$hostname + "/api/auth/reporteGeneral", // File URL Goes Here
          method: "GET",
          responseType: "blob",
        }).then((response) => {
          var fileURL = window.URL.createObjectURL(new Blob([response.data]));
          var fileLink = document.createElement("a");

          fileLink.href = fileURL;
          fileLink.setAttribute("download", "reporteGeneral.pdf");
          document.body.appendChild(fileLink);

          fileLink.click();
        });

      }
    }
  },

  mounted() {
    let sesionIniciada = localStorage.getItem("loggedIn");
    let resultado =
      sesionIniciada === "YES"
        ? ((this.ok = false), (this.estado2 = false))
        : ((this.ok = true), (this.estado2 = true));

    this.contador();
    this.cargaDatos();
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
