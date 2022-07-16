<template>
 <div>
  <Bar />
 </div> 
</template>

<script>
  import { Bar } from 'vue-chartjs'

export default {
  name: 'MethodologyChart',
  components: { Bar },
  props: {
    theses: {
      type: Array,
      required: true,
    }
  }

}
</script>