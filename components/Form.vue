<template>
  <!-- <div class="grid grid-cols-2 gap-2">
    <div class="mt-6">
      <Form />
    </div>
  </div> -->

  <div class="grid grid-cols-2 gap-2">
    <div class="mt-6">
      <div
        class="
          py-8
          px-4
          max-w-md
          mx-auto
          bg-white
          rounded-xl
          shadow-lg
          space-y-2
        "
      >
        <form
          ref="form"
          :model="form"
          class="w-full max-w-sm text-center"
          @submit.prevent
        >
          <h1 class="py-8 text-center text-blue-700 font-bold">
            Análisis bibliométrico de las tesis de pregrado de universidades del
            Perú, período 2010-2021
          </h1>

          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label
                class="
                  block
                  text-gray-500
                  font-bold
                  md:text-right
                  mb-1
                  md:mb-0
                  pr-4
                "
                for="universidad"
                >Universidad</label
              >
            </div>
            <div class="md:w-2/3">
              <select
                id="universidad"
                v-model="form.universidad"
                class="
                  block
                  appearance-none
                  w-full
                  bg-gray-200
                  border border-gray-200
                  text-gray-700
                  py-3
                  px-4
                  pr-8
                  rounded
                  leading-tight
                  focus:outline-none focus:bg-white focus:border-gray-500
                "
              >
                <option
                  :key="`universidad_select_1`"
                  :value="`Universidad Tecnológica del Perú`"
                >
                  Universidad Tecnológica del Perú (UTP)
                </option>
                <option
                  :key="`universidad_select_2`"
                  :value="`Universidad César Vallejo`"
                >
                  Universidad César Vallejo (UCV)
                </option>
                <option
                  :key="`universidad_select_3`"
                  :value="`Universidad Peruana Unión`"
                >
                  Universidad Peruana Unión (UPeU)
                </option>
                <option
                  :key="`universidad_select_4`"
                  :value="`Universidad Peruana de Ciencias Aplicadas`"
                >
                  Universidad Peruana de Ciencias Aplicadas (UPC)
                </option>
                <option
                  :key="`universidad_select_5`"
                  :value="`Universidad Privada del Norte`"
                >
                  Universidad Privada del Norte (UPN)
                </option>
              </select>
            </div>
          </div>

          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label
                class="
                  block
                  text-gray-500
                  font-bold
                  md:text-right
                  mb-1
                  md:mb-0
                  pr-4
                "
                for="tesis"
                >Titulo de tesis</label
              >
            </div>
            <div class="md:w-2/3">
              <input
                id="tesis"
                v-model="form.tesis"
                class="
                  bg-gray-200
                  appearance-none
                  border-2 border-gray-200
                  rounded
                  w-full
                  py-2
                  px-4
                  text-gray-700
                  leading-tight
                  focus:outline-none focus:bg-white focus:border-purple-500
                "
                type="text"
                name="tesis"
              />
            </div>
          </div>

          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label
                class="
                  block
                  text-gray-500
                  font-bold
                  md:text-right
                  mb-1
                  md:mb-0
                  pr-4
                "
                for="año"
                >Año</label
              >
            </div>
            <div class="md:w-2/3">
              <input
                id="año"
                v-model="form.año"
                class="
                  bg-gray-200
                  appearance-none
                  border-2 border-gray-200
                  rounded
                  w-full
                  py-2
                  px-4
                  text-gray-700
                  leading-tight
                  focus:outline-none focus:bg-white focus:border-purple-500
                "
                type="number"
                name="año"
              />
            </div>
          </div>

          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label
                class="
                  block
                  text-gray-500
                  font-bold
                  md:text-right
                  mb-1
                  md:mb-0
                  pr-4
                "
                for="diseño"
                >Diseño de Investigación</label
              >
            </div>
            <div class="md:w-2/3">
              <select
                id="diseño"
                v-model="form.diseño"
                class="
                  block
                  appearance-none
                  w-full
                  bg-gray-200
                  border border-gray-200
                  text-gray-700
                  py-3
                  px-4
                  pr-8
                  rounded
                  leading-tight
                  focus:outline-none focus:bg-white focus:border-gray-500
                "
              >
                <option key="`diseño_select_1`" :value="`Experimental`">
                  Experimental
                </option>
                <option key="`diseño_select_2`" :value="`No experimental`">
                  No experimental
                </option>
                <option key="`diseño_select_3`" :value="`No especifica`">
                  No especifica
                </option>
                <option key="`diseño_select_4`" :value="`Otro`">Otro</option>
              </select>
            </div>
          </div>

          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label
                class="
                  block
                  text-gray-500
                  font-bold
                  md:text-right
                  mb-1
                  md:mb-0
                  pr-4
                "
                for="nivel"
                >Nivel de Investigación</label
              >
            </div>
            <div class="md:w-2/3">
              <select
                id="nivel"
                v-model="form.nivel"
                class="
                  block
                  appearance-none
                  w-full
                  bg-gray-200
                  border border-gray-200
                  text-gray-700
                  py-3
                  px-4
                  pr-8
                  rounded
                  leading-tight
                  focus:outline-none focus:bg-white focus:border-gray-500
                "
              >
                <option key="`nivel_select_1`" :value="`Explicativo`">
                  Explicativo
                </option>
                <option key="`nivel_select_2`" :value="`Correlacional`">
                  Correlacional
                </option>
                <option key="`nivel_select_3`" :value="`Descriptivo`">
                  Descriptivo
                </option>
                <option key="`nivel_select_4`" :value="`Exploratorio`">
                  Exploratorio
                </option>
                <option key="`nivel_select_5`" :value="`No especifica`">
                  No especifica
                </option>
                <option key="`nivel_select_6`" :value="`Otro`">Otro</option>
              </select>
            </div>
          </div>

          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label
                class="
                  block
                  text-gray-500
                  font-bold
                  md:text-right
                  mb-1
                  md:mb-0
                  pr-4
                "
                for="enfoque"
                >Enfoque de Investigación</label
              >
            </div>
            <div class="md:w-2/3">
              <select
                id="enfoque"
                v-model="form.enfoque"
                class="
                  block
                  appearance-none
                  w-full
                  bg-gray-200
                  border border-gray-200
                  text-gray-700
                  py-3
                  px-4
                  pr-8
                  rounded
                  leading-tight
                  focus:outline-none focus:bg-white focus:border-gray-500
                "
              >
                <option key="`enfoque_select_1`" :value="`Cualitativo`">
                  Cualitativo
                </option>
                <option key="`enfoque_select_2`" :value="`Cuantitativo`">
                  Cuantitativo
                </option>
                <option key="`enfoque_select_3`" :value="`No especifica`">
                  No especifica
                </option>
                <option key="`enfoque_select_4`" :value="`Otro`">Otro</option>
              </select>
            </div>
          </div>

          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label
                class="
                  block
                  text-gray-500
                  font-bold
                  md:text-right
                  mb-1
                  md:mb-0
                  pr-4
                "
                for="instrumento"
                >Instrumento utilizado</label
              >
            </div>
            <div class="md:w-2/3">
              <select
                id="instrumento"
                v-model="form.instrumento"
                class="
                  block
                  appearance-none
                  w-full
                  bg-gray-200
                  border border-gray-200
                  text-gray-700
                  py-3
                  px-4
                  pr-8
                  rounded
                  leading-tight
                  focus:outline-none focus:bg-white focus:border-gray-500
                "
              >
                <option key="`instrumento_select_1`" :value="`Entrevista`">
                  Entrevista
                </option>
                <option key="`instrumento_select_2`" :value="`Observación`">
                  Observación
                </option>
                <option key="`instrumento_select_3`" :value="`Encuesta`">
                  Encuesta
                </option>
                <option key="`instrumento_select_4`" :value="`No especifica`">
                  No especifica
                </option>
                <option key="`instrumento_select_5`" :value="`Otro`">
                  Otro
                </option>
              </select>
            </div>
          </div>

          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label
                class="
                  block
                  text-gray-500
                  font-bold
                  md:text-right
                  mb-1
                  md:mb-0
                  pr-4
                "
                for="numcitas"
                >Número de citas</label
              >
            </div>
            <div class="md:w-2/3">
              <input
                id="numcitas"
                v-model="form.numcitas"
                class="
                  bg-gray-200
                  appearance-none
                  border-2 border-gray-200
                  rounded
                  w-full
                  py-2
                  px-4
                  text-gray-700
                  leading-tight
                  focus:outline-none focus:bg-white focus:border-purple-500
                "
                type="number"
                name="numcitas"
              />
            </div>
          </div>

          <div v-if="citationSumIndicator" class="my-5 text-sm text-red-600">
            Las fuentes registradas no suman el numero de citas totales
          </div>

          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block tracking-wide text-gray-500 text-xs font-bold mb-2"
                for="revistas"
              >
                Revistas científicas
              </label>
              <input
                id="revistas"
                v-model="form.revistas"
                class="
                  appearance-none
                  block
                  w-full
                  bg-yellow-200
                  text-gray-700
                  border border-gray-200
                  rounded
                  py-3
                  px-4
                  leading-tight
                  focus:outline-none focus:bg-white focus:border-gray-500
                "
                type="number"
              />
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="
                  block
                  tracking-wide
                  text-gray-500 text-xs
                  font-bold
                  mb-5
                  pt-1
                "
                for="libros"
              >
                Libros
              </label>
              <input
                id="libros"
                v-model="form.libros"
                class="
                  appearance-none
                  block
                  w-full
                  bg-green-200
                  text-gray-700
                  border border-gray-200
                  rounded
                  py-3
                  px-4
                  leading-tight
                  focus:outline-none focus:bg-white focus:border-gray-500
                "
                type="number"
              />
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block tracking-wide text-gray-500 text-xs font-bold mb-2"
                for="numtesis"
              >
                Tesis, tesinas y disertaciones
              </label>
              <input
                id="numtesis"
                v-model="form.numtesis"
                class="
                  appearance-none
                  block
                  w-full
                  bg-blue-200
                  text-gray-700
                  border border-gray-200
                  rounded
                  py-3
                  px-4
                  leading-tight
                  focus:outline-none focus:bg-white focus:border-gray-500
                "
                type="number"
              />
            </div>
          </div>

          <div class="text-center flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block tracking-wide text-gray-500 text-xs font-bold mb-6"
                for="otros"
              >
                Otros
              </label>
              <input
                id="otros"
                v-model="form.otros"
                class="
                  appearance-none
                  block
                  w-full
                  bg-purple-200
                  text-gray-700
                  border border-gray-200
                  rounded
                  py-3
                  px-4
                  leading-tight
                  focus:outline-none focus:bg-white focus:border-gray-500
                "
                type="number"
              />
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block tracking-wide text-gray-500 text-xs font-bold mb-6"
                for="no_obtenibles"
              >
                No obtenibles
              </label>
              <input
                id="no_obtenibles"
                v-model="form.no_obtenibles"
                class="
                  appearance-none
                  block
                  w-full
                  bg-red-200
                  text-gray-700
                  border border-gray-200
                  rounded
                  py-3
                  px-4
                  leading-tight
                  focus:outline-none focus:bg-white focus:border-gray-500
                "
                type="number"
              />
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block tracking-wide text-gray-500 text-xs font-bold mb-2"
                for="referencias_recientes"
              >
                Referencias &lt;5 años
              </label>
              <input
                id="referencias_recientes"
                v-model="form.referencias_recientes"
                class="
                  appearance-none
                  block
                  w-full
                  bg-gray-400
                  text-gray-700
                  border border-gray-200
                  rounded
                  py-3
                  px-4
                  leading-tight
                  focus:outline-none focus:bg-white focus:border-gray-500
                "
                type="number"
              />
            </div>

            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0 items-center">
              <label
                class="block tracking-wide text-gray-500 text-xs font-bold mb-2"
                for="indice_price"
              >
                Índice de Price
              </label>
              <div
                id="indice_price"
                class="
                  appearance-none
                  block
                  w-full
                  bg-gray-400
                  text-gray-700
                  border border-gray-200
                  rounded
                  py-3
                  px-4
                  leading-tight
                  focus:outline-none focus:bg-white focus:border-gray-500
                "
              >
                {{ calculatePriceIndex }}
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2">
            <div>
              <button
                class="
                  bg-blue-500
                  hover:bg-blue-700
                  text-white
                  font-bold
                  py-2
                  px-4
                  border border-blue-700
                  rounded
                  mt-6
                "
                @click="addBibliometric()"
              >
                Ingresar
              </button>
            </div>
            <div>
              <button
                class="
                  disabled
                  bg-gray-500
                  hover:bg-blue-700
                  text-white
                  font-bold
                  py-2
                  px-4
                  border border-blue-700
                  rounded
                  mt-6
                "
                @click="clearInputFields()"
              >
                Nuevo
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="mt-6">
      <Table :theses="theses" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      theses: [],
      form: {
        id: 0,
        universidad: '',
        tesis: '',
        año: 0,
        diseño: '',
        nivel: '',
        enfoque: '',
        instrumento: '',
        numcitas: 0,
        revistas: 0,
        libros: 0,
        numtesis: 0,
        otros: 0,
        no_obtenibles: 0,
        referencias_recientes: 0,
        indice_price: 0,
      },
    }
  },
  computed: {
    calculatePriceIndex() {
      const priceIndex = this.form.referencias_recientes / this.form.numcitas
      return priceIndex.toFixed(2)
    },

    citationSumIndicator() {
      const sum =
        parseInt(this.form.revistas) +
        parseInt(this.form.libros) +
        parseInt(this.form.numtesis) +
        parseInt(this.form.otros) +
        parseInt(this.form.no_obtenibles)

      return sum !== parseInt(this.form.numcitas)
    },
  },
  methods: {
    createRandomId() {
      let newId = Math.floor(Math.random() * 1000)
      if (this.checkIdExists()) {
        newId = Math.floor(Math.random() * 1000)
      } else {
        return newId;
      }
    },

    checkIdExists(checkId) {
      this.theses.some(item => {
        return this.theses.id === checkId;
      })
    },

    registerPriceIndex() {
      const priceIndex = this.form.referencias_recientes / this.form.numcitas
      return priceIndex.toFixed(2)
    },

    addBibliometric() {
      const newBibliometric = {
        ...this.form,
        id: this.createRandomId(),
        indice_price: this.registerPriceIndex(),
      }

      this.theses.push(newBibliometric)
      this.saveDataInLocalStorage(newBibliometric)
    },

    clearInputFields() {
      this.form = {
        id: 0,
        universidad: '',
        tesis: '',
        año: 0,
        diseño: '',
        nivel: '',
        enfoque: '',
        instrumento: '',
        numcitas: 0,
        revistas: 0,
        libros: 0,
        numtesis: 0,
        otros: 0,
        no_obtenibles: 0,
        referencias_recientes: 0,
        indice_price: 0,
      }
    },

    saveDataInLocalStorage(tableData) {
      if (process.client) {
        localStorage.setItem("entrada", tableData)
      }
    }
  },
}
</script>