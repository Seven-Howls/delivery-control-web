<script>
import FiltersComponent from './FiltersComponent.vue';
import TableDeliveriesComponent from './TableDeliveriesComponent.vue';
import axios from 'axios';

export default {
  name: 'DeliveryHistoryComponent',
  components: {
    FiltersComponent,
    TableDeliveriesComponent
  },
  data() {
    return {
      deliveries: []
    }
  },

  mounted() {
    this.getDeliveries()
  },

  methods: {
    async getDeliveries() {
      try{
        const response = await axios.get(`${this.$store.state.BASE_URL}/api/v1/deliveries/in-progress/${this.$store.state.MOTOBOY_ID}`)

        this.deliveries = response.data
        console.log(this.deliveries);
      } catch(err) {
        console.error(err);
      }
    },
    // filterDeliveries(filterText) {
    //   if (filterText === '') {

    //     this.deliveries = [...this.originalDeliveries];
    //   } else {
    //     // Filtrar os dados com base no texto fornecido
    //     this.deliveries = this.originalDeliveries.filter(delivery => {
    //       return delivery.id.toString().includes(filterText) ||
    //         delivery.name.toLowerCase().includes(filterText.toLowerCase()) ||
    //         delivery.status.toLowerCase().includes(filterText.toLowerCase()) ||
    //         delivery.date.toString().includes(filterText) ||
    //         delivery.value.toString().includes(filterText);
    //     });
    //   }
    }
  }

</script>

<template>
  <div class="container-deliveries-history">
    <FiltersComponent @applyFilters="filterDeliveries" />
    <TableDeliveriesComponent :deliveries="deliveries" />
  </div>
</template>

<style scoped>
.container-deliveries-history {
  @apply h-screen
}
</style>