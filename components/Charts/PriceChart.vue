<script>
import { Bar } from "vue-chartjs"

export default {
  name: 'PriceChart',
  components: { Bar },
  props: {
    theses: {
      type: Array,
      required: true,
    },
    chartData: {
      type: Array,
      required: true,
    },
    options: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    // this.renderChart(this.chartData, this.options)
  }
}
</script>
