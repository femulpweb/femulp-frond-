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
    <b-container class="m-topViews">
      <!-- Table -->
      <b-row class="justify-content-center m-topViews">
        <b-col lg="12" md="12" class="m-topViews">
          <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            :perPage="3"
            controls
            indicators
            background="while"
            img-width="1024"
            img-height="600"
            style="text-shadow: 1px 1px 2px #333"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <b-carousel-slide
              v-for="lista in datosEventos"
              img-blank
              :key="lista.id"
            >
              <img
                class="img-fluid"
                :src="lista.rutaImg"
                alt="Card image cap"
                style="width: 450px"
              />
              <div class="card-body">
                <a
                  v-on:click="inscripcion(lista)"
                  class="btn btn-primary"
                  style="color: white"
                  >INCRIPCIÓN AL EVENTO</a
                >
              </div>
            </b-carousel-slide>
          </b-carousel>
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
      datosEventos: [],
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    consultaEventos() {
      axios.get(this.$hostname + "/api/auth/cargaEventos").then((data) => {
        let code = data.data.code;
        let respuesta = data.data.cargaEventos;

        if (code === 200) {
          this.datosEventos = respuesta;
          //console.log(respuesta);
        }
      });
    },

    inscripcion(datos) {
      //console.log(datos.codigo);
      this.$router.push({ path: "/registroEvento/" + datos.codigo });
    },
  },

  mounted() {
    this.consultaEventos();
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

.row {
  margin-top: 100px;
}

.form-control {
  text-transform: uppercase;
}

.swal2-html-container {
  text-align: center;
}

.m-topViews {
  margin-top: -9rem;
}

/* @media screen and (max-width: 769px) {
  .m-top {
    margin-top: 1rem;
  }

  .m-topViews {
    margin-top: 5rem;
  }
}

@media screen and (max-width: 412px) {
    .m-topViews {
    margin-top: 5rem;
  }
} */


@media screen and (max-width: 990px) {
  .m-top {
    margin-top: 1rem;
  }

  .m-topViews {
    margin-top: 4rem;
  }
}
</style>
