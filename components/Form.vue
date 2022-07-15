<template>
  <div class="grid grid-cols-2">
    <div
      class="
        py-8
        px-4
        h-[100%]
        max-w-md
        mx-auto
        rounded-xl
        shadow-lg
        space-y-2
        bg-gray-800
      "
    >
      <form
        ref="form"
        :model="form"
        class="w-full max-w-sm text-center"
        @submit.prevent
      >
        <h1 class="py-8 text-center text-gray-200 font-bold">
          Análisis bibliométrico de las tesis de pregrado en la carrera de
          Ingenieria de Sistemas de universidades del Perú, período 2010-2021
        </h1>

        <div class="grid grid-cols-4 gap-3 justify-items-center">
          <div class="col-span-4">
            <label
              class="
                block
                mb-2
                text-sm
                font-medium
                text-gray-900
                dark:text-gray-300
              "
              for="universidad"
              >Universidad</label
            >
            <select
              id="universidad"
              v-model="form.universidad"
              class="
                sm:text-xs
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                p-2.5
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
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

          <div class="col-span-4">
            <label
              class="
                block
                mb-2
                text-sm
                font-medium
                text-gray-900
                dark:text-gray-300
              "
              for="tesis"
              >Titulo de tesis</label
            >
            <input
              id="tesis"
              v-model="form.tesis"
              class="
                sm:text-xs
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                p-2.5
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
              "
              type="text"
              name="tesis"
            />
          </div>

          <div class="col-span-4">
            <label
              class="
                block
                mb-2
                text-sm
                font-medium
                text-gray-900
                dark:text-gray-300
              "
              for="año"
              >Año</label
            >
            <input
              id="año"
              v-model="form.año"
              class="
                sm:text-xs
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                p-2.5
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
              "
              type="number"
              name="año"
            />
          </div>

          <div>
            <label
              class="
                block
                mb-2
                text-sm
                font-medium
                text-gray-900
                dark:text-gray-300
              "
              for="diseño"
              >Diseño de Investigación</label
            >
            <select
              id="diseño"
              v-model="form.diseño"
              class="
                sm:text-xs
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                p-2.5
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
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

          <div>
            <label
              class="
                block
                mb-2
                text-sm
                font-medium
                text-gray-900
                dark:text-gray-300
              "
              for="nivel"
              >Nivel de Investigación</label
            >
            <select
              id="nivel"
              v-model="form.nivel"
              class="
                sm:text-xs
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                p-2.5
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
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

          <div>
            <label
              class="
                block
                mb-2
                text-sm
                font-medium
                text-gray-900
                dark:text-gray-300
              "
              for="enfoque"
              >Enfoque de Investigación</label
            >
            <select
              id="enfoque"
              v-model="form.enfoque"
              class="
                sm:text-xs
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                p-2.5
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
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

          <div>
            <label
              class="
                block
                mb-2
                text-sm
                font-medium
                text-gray-900
                dark:text-gray-300
              "
              for="instrumento"
              >Instrumento utilizado</label
            >
            <select
              id="instrumento"
              v-model="form.instrumento"
              class="
                sm:text-xs
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                p-2.5
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
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
              <option key="`instrumento_select_5`" :value="`Otro`">Otro</option>
            </select>
          </div>

          <div class="col-span-4">
            <label
              class="
                block
                mb-2
                text-sm
                font-medium
                text-gray-900
                dark:text-gray-300
              "
              for="numcitas"
              >Número de citas</label
            >
            <input
              id="numcitas"
              v-model="form.numcitas"
              class="
                sm:text-xs
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                p-2.5
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
              "
              type="number"
              name="numcitas"
            />
          </div>

          <div
            v-if="citationSumIndicator"
            class="my-5 text-sm text-red-600 col-span-4"
          >
            Las fuentes registradas no suman el numero de citas totales
          </div>

          <div>
            <label
              class="
                block
                mb-2
                text-sm
                font-medium
                text-gray-900
                dark:text-gray-300
              "
              for="revistas"
            >
              Revistas científicas
            </label>
            <input
              id="revistas"
              v-model="form.revistas"
              class="
                sm:text-xs
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                p-2.5
                dark:bg-gray-100
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-black
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
              "
              type="number"
            />
          </div>

          <div>
            <label
              class="
                block
                mb-2
                text-sm
                font-medium
                text-gray-900
                dark:text-gray-300
                mb-5
                mt-2
              "
              for="libros"
            >
              Libros
            </label>
            <input
              id="libros"
              v-model="form.libros"
              class="
                sm:text-xs
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                p-2.5
                dark:bg-green-500
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-black
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
              "
              type="number"
            />
          </div>

          <div>
            <label
              class="
                block
                mb-2
                text-sm
                font-medium
                text-gray-900
                dark:text-gray-300
                mb-5
                mt-2
              "
              for="numtesis"
            >
              Tesis
            </label>
            <input
              id="numtesis"
              v-model="form.numtesis"
              class="
                sm:text-xs
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                p-2.5
                dark:bg-blue-500
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-black
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
              "
              type="number"
            />
          </div>

          <div>
            <label
              class="
                block
                mb-2
                text-sm
                font-medium
                text-gray-900
                dark:text-gray-300
                mb-5
                mt-2
              "
              for="otros"
            >
              Otros
            </label>
            <input
              id="otros"
              v-model="form.otros"
              class="
                sm:text-xs
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                p-2.5
                dark:bg-yellow-500
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-black
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
              "
              type="number"
            />
          </div>

          <div>
            <label
              class="
                block
                mb-2
                text-sm
                font-medium
                text-gray-900
                dark:text-gray-300
              "
              for="no_obtenibles"
            >
              No obtenibles
            </label>
            <input
              id="no_obtenibles"
              v-model="form.no_obtenibles"
              class="
                sm:text-xs
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                p-2.5
                dark:bg-red-500
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-black
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
              "
              type="number"
            />
          </div>

          <div class="col-span-2">
            <label
              class="
                block
                mb-2
                text-sm
                font-medium
                text-gray-900
                dark:text-gray-300
                mb-5
                mt-2
              "
              for="referencias_recientes"
            >
              Referencias &lt;5 años
            </label>
            <input
              id="referencias_recientes"
              v-model="form.referencias_recientes"
              class="
                sm:text-xs
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                p-2.5
                dark:bg-purple-500
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-black
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
              "
              type="number"
            />
          </div>

          <div>
            <label
              class="
                block
                mb-2
                text-sm
                font-medium
                text-gray-900
                dark:text-gray-300
              "
              for="indice_price"
            >
              Índice de Price
            </label>
            <div
              id="indice_price"
              class="
                sm:text-xs
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                p-2.5
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
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

    <div class="max-h-2/5 w-full w-[130%]">
      <div
        class="
          p-6
          bg-white
          rounded-lg
          border border-gray-200
          shadow-md
          dark:bg-gray-800 dark:border-gray-700
        "
      >
        <Table
          :theses="theses"
          class="max-h-[720px]"
          @delete="removeBibliometric($event)"
        />
        <button
          class="
            my-6
            bg-gray-300
            hover:bg-gray-400
            text-gray-800
            font-bold
            py-2
            px-4
            rounded
            inline-flex
            items-center
          "
          @click="
            exportToCsvFile(convertToCsv(theses), 'analisis_bibliometrico.csv')
          "
        >
          <svg
            class="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>Exportar a .csv</span>
        </button>
      </div>
    </div>

    <div class="my-6 mx-16 col-span-2">
      <div
        class="
          grid grid-cols-2
          m-4
          p-6
          bg-white
          rounded-lg
          border border-gray-200
          shadow-md
          dark:bg-gray-800 dark:border-gray-700
        "
      >
        <div class="bg-white h-4 w-4"></div>
        <div class="bg-white h-4 w-4"></div>
        <div class="bg-white h-4 w-4"></div>
        <div class="bg-white h-4 w-4"></div>
        <div class="bg-white h-4 w-4"></div>
        <!-- <Chart
              :theses="theses"
              class="max-h-[720px]"
              @delete="removeBibliometric($event)"
            /> -->
      </div>
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
  mounted() {
    this.getLocalStorage()
  },
  methods: {
    createRandomId() {
      let newId = Math.floor(Math.random() * 1000)
      if (this.checkIdExists()) {
        newId = Math.floor(Math.random() * 1000)
      } else {
        return newId
      }
    },

    checkIdExists(checkId) {
      this.theses.some((item) => {
        return this.theses.id === checkId
      })
    },

    registerPriceIndex() {
      const priceIndex = this.form.referencias_recientes / this.form.numcitas
      return priceIndex.toFixed(2)
    },

    addBibliometric() {
      this.theses = this.theses || []
      this.theses.push({
        ...this.form,
        id: this.createRandomId(),
        indice_price: this.registerPriceIndex(),
      })

      this.saveLocalStorage()
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

    saveLocalStorage() {
      if (process.client) {
        localStorage.setItem('entrada', JSON.stringify(this.theses))
      }
    },

    getLocalStorage() {
      this.theses = JSON.parse(localStorage.getItem('entrada'))
    },

    removeBibliometric(item) {
      this.theses = this.theses.filter((thesis) => thesis.id !== item)

      this.saveLocalStorage()
    },

    convertToCsv(objectData) {
      try {
        const csvRows = []
        const headers = Object.keys(objectData[0])

        csvRows.push(headers.join(','))

        for (const row of objectData) {
          const values = headers.map((header) => {
            const val = row[header]
            return `"${val}"`
          })

          csvRows.push(values.join(','))
        }

        const csv = csvRows.join('\n')

        return csv
      } catch (err) {
        console.log(err)
      }
    },

    exportToCsvFile(csvData, filename) {
      try {
        let csvFile = ''
        let downloadLink = ''

        csvFile = new Blob([csvData], { type: 'text/csv' })

        downloadLink = document.createElement('a')
        downloadLink.download = filename
        downloadLink.href = window.URL.createObjectURL(csvFile)
        downloadLink.style.display = 'none'

        document.body.appendChild(downloadLink)

        downloadLink.click()
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>