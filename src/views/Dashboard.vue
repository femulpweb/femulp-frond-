<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <!-- Card stats -->
      <b-row>
        <b-col cols="4" lg="4" md="4" sm="4">
          <stats-card
            title="EVENTOS REGISTRADOS"            
            type="gradient-red"
            sub-title="3507"
            icon="fa fa-bars"
            class="mb-4"
          >
          
          <router-link to="">
            <h5 class="prueba">TOTAL DE EVENTOS</h5>
          </router-link>

          <h2>{{contadorEventos}}</h2>

<!--             <template slot="footer">
              <span class="text-success mr-2">78%</span>
              <span class="text-nowrap">Desde el mes pasado</span>
            </template> -->
          </stats-card>
        </b-col>


        <b-col cols="4" lg="4" md="4" sm="4">
          <stats-card
            title="LINEAS INACTIVAS"
            type="gradient-orange"
            sub-title="29"
            icon="fa fa-bookmark"
            class="mb-4"
          >
          <h5 class="prueba">TOTAL DE REGISTROS</h5>

          <h2>{{contadorParticipantes}}</h2>
<!--             <template slot="footer">
              <span class="text-success mr-2">12.18%</span>
              <span class="text-nowrap">Desde el mes pasado</span>
            </template> -->
          </stats-card>
        </b-col>


<!--         <b-col xl="3" md="6">
          <stats-card
            title="LINEAS AUTORIZAD"
            type="gradient-green"
            sub-title="5"
            icon="fab fa-audible"
            class="mb-4"
          >
          <h5 class="prueba">LINEAS AUTORIZAD</h5>
          <h2>{{totalWsNoEnviados}}</h2>
             <template slot="footer">
              <span class="text-danger mr-2">5.72%</span>
              <span class="text-nowrap">Desde el mes pasado</span>
            </template> 
          </stats-card>
        </b-col> -->



        <b-col cols="4" lg="4" md="4" sm="4">
          <stats-card
            title="USUARIOS DEL SISTEMA"
            type="gradient-info"
            sub-title="5"
            icon="fas fa-users"
            class="mb-4"
          >
          <h5 class="prueba">USUARIOS DEL SISTEMA</h5>
          <h2>{{contadorUsuario}}</h2>
<!--             <template slot="footer">
              <span class="text-danger mr-2">5.72%</span>
              <span class="text-success mr-2">100%</span>
              <span class="text-nowrap">Enhorabuena</span>
            </template> -->
          </stats-card>
        </b-col>
      </b-row>
    </base-header>

    <!--Charts-->
    <b-container fluid class="mt-0">
      

      <!--AQUI ES LA CAJA DE INICIO DE SESION QUE APARECE EL QR-->

<br><br><br><br><br><br>


    </b-container>
  </div>
</template>
<script>
import "sweetalert2/dist/sweetalert2.min.css";
import axios from "axios";



export default {
  data() {
    return {
      ok: true,
      estado2: true,
      contadorEventos: '',
      contadorParticipantes: '',
      contadorUsuario: ''
    };
  },

  methods: {
    cerrarPost() {
      document.getElementById("desaparecePost").style.display = "none";
    },

    contador(){
      axios
        .get(this.$hostname + "/api/auth/cuentaEventos")
        .then((data) => {
            //console.log(data);

            if(data.data.code === 200){
              this.contadorEventos =  data.data.contadorEventos;
              this.contadorParticipantes = data.data.contadorParticipantes;
              this.contadorUsuario = data.data.contadorUsuario;
            }
        })
    }


  },

  mounted() {

    let sesionIniciada = localStorage.getItem("loggedIn");
    let resultado =
      sesionIniciada === "YES"
        ? ((this.ok = false), (this.estado2 = false))
        : ((this.ok = true), (this.estado2 = true));

    this.contador();

  },
};
</script>

<style scoped>



.bg-gradient-success {
  background: linear-gradient(87deg, #0c7bb0 0, #54b5e2 100%) !important
}

</style>