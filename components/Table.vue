<template>
  <div>
    <table>
      <tr>
        <th>ID</th>
        <th>Universidad</th>
        <th>Título de tesis</th>
        <th>Año</th>
        <th>Diseño de Investigación</th>
        <th>Nivel de Investigación</th>
        <th>Enfoque de Investigación</th>
        <th>Instrumento utilizado</th>
        <th>Número de citas</th>
        <th>Revistas científicas</th>
        <th>Libros</th>
        <th>Tesis, tesinas y disertaciones</th>
        <th>Otros</th>
        <th>No obtenibles</th>
        <th>Referencias &lt;5 años</th>
        <th>Índice de Price</th>
      </tr>
      <tr v-for="thesis in theses" :key="thesis.id">
        <td>{{ thesis.id }}</td>
        <td>{{ thesis.universidad }}</td>
        <td>{{ thesis.tesis }}</td>
        <td>{{ thesis.año }}</td>
        <td>{{ thesis.diseño }}</td>
        <td>{{ thesis.nivel }}</td>
        <td>{{ thesis.enfoque }}</td>
        <td>{{ thesis.instrumento }}</td>
        <td>{{ thesis.numcitas }}</td>
        <td>{{ thesis.revistas }}</td>
        <td>{{ thesis.libros }}</td>
        <td>{{ thesis.numtesis }}</td>
        <td>{{ thesis.otros }}</td>
        <td>{{ thesis.no_obtenibles }}</td>
        <td>{{ thesis.referencias_recientes }}</td>
        <td>{{ thesis.indice_price }}</td>
        <td>
          <button @click="$emit('delete', thesis.id)">Eliminar</button>
        </td>
      </tr>
      <tr>
        <td>
          Total de tesis: 
        </td>
        <td>
          {{theses.length}}
        </td>
      </tr>
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
  },
}
</script>

<style scoped>
table {
  border: 1px solid;
}
</style>