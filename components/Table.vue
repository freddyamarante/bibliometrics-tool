<template>
  <div class="overflow-auto">
    <table
      class="
        table-auto
        overflow-scroll
        text-sm text-left text-gray-500
        dark:text-gray-400
      "
    >
      <thead
        class="
          text-xs text-gray-700
          bg-gray-50
          dark:bg-gray-700 dark:text-gray-400
          top-0
          sticky
        "
      >
        <tr>
          <th scope="col" class="px-6 py-3">ID</th>
          <th scope="col" class="px-6 py-3">Universidad</th>
          <th scope="col" class="px-6 py-3">Título de tesis</th>
          <th scope="col" class="px-6 py-3">Año</th>
          <th scope="col" class="px-6 py-3">Diseño de Investigación</th>
          <th scope="col" class="px-6 py-3">Nivel de Investigación</th>
          <th scope="col" class="px-6 py-3">Enfoque de Investigación</th>
          <th scope="col" class="px-6 py-3">Instrumento utilizado</th>
          <th scope="col" class="px-6 py-3">Número de citas</th>
          <th scope="col" class="px-6 py-3">Revistas científicas</th>
          <th scope="col" class="px-6 py-3">Libros</th>
          <th scope="col" class="px-6 py-3">Tesis, tesinas y disertaciones</th>
          <th scope="col" class="px-6 py-3">Otros</th>
          <th scope="col" class="px-6 py-3">No obtenibles</th>
          <th scope="col" class="px-6 py-3">Referencias &lt;5 años</th>
          <th scope="col" class="px-6 py-3">Índice de Price</th>
          <th scope="col" class="px-6 py-3">Acción</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="thesis in theses"
          :key="thesis.id"
          class="
            border-b
            dark:bg-gray-800 dark:border-gray-700
            odd:bg-white
            even:bg-gray-50
            odd:dark:bg-gray-800
            even:dark:bg-gray-700
          "
        >
          <th
            scope="row"
            class="
              px-6
              py-4
              font-medium
              text-gray-900
              dark:text-white
              whitespace-nowrap
            "
          >
            {{ thesis.id }}
          </th>
          <td class="px-6 py-4">{{ thesis.universidad }}</td>
          <td class="px-6 py-4">{{ thesis.tesis }}</td>
          <td class="px-6 py-4">{{ thesis.año }}</td>
          <td class="px-6 py-4">{{ thesis.diseño }}</td>
          <td class="px-6 py-4">{{ thesis.nivel }}</td>
          <td class="px-6 py-4">{{ thesis.enfoque }}</td>
          <td class="px-6 py-4">{{ thesis.instrumento }}</td>
          <td class="px-6 py-4">{{ thesis.numcitas }}</td>
          <td class="px-6 py-4">{{ thesis.revistas }}</td>
          <td class="px-6 py-4">{{ thesis.libros }}</td>
          <td class="px-6 py-4">{{ thesis.numtesis }}</td>
          <td class="px-6 py-4">{{ thesis.otros }}</td>
          <td class="px-6 py-4">{{ thesis.no_obtenibles }}</td>
          <td class="px-6 py-4">{{ thesis.referencias_recientes }}</td>
          <td class="px-6 py-4">{{ thesis.indice_price }}</td>
          <td class="px-6 py-4">
            <button
              class="
                bg-transparent
                hover:bg-blue-500
                text-blue-700
                font-semibold
                hover:text-white
                py-2
                px-4
                border border-blue-500
                hover:border-transparent
                rounded
              "
              @click="$emit('delete', thesis.id)"
            >
              Eliminar
            </button>
          </td>
        </tr>
        <tr
          class="
            text-xs text-gray-700
            bg-gray-50
            dark:bg-gray-700 dark:text-gray-400
            sticky
          "
        >
          <td
            scope="row"
            class="
              px-6
              py-4
              font-large
              text-gray-900
              dark:text-white
              whitespace-nowrap
            "
          >
            Total de tesis:
          </td>
          <td
            scope="row"
            colspan="100%"
            class="
              px-6
              py-4
              font-large
              text-gray-900
              dark:text-white
              whitespace-nowrap
            "
          >
            {{ calculateLength() }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    theses: {
      type: Array,
      required: true,
    },
  },
  methods: {
    calculateLength() {
      try {
        return this.theses.length
      } catch (err) {
        console.log()
      }
    },
  },
}
</script>

<style scoped>
table {
  border: 1px solid;
}
</style>