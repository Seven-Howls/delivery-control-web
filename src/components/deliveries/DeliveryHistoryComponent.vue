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
      status: '',
      date: '',
      deliveries: [],
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
    }
  }
}
</script>

<template>
  <div class="container-deliveries-history">
    <FiltersComponent/>
    <TableDeliveriesComponent :deliveries="deliveries"/>
  </div>
</template>

<style scoped>

.container-deliveries-history {
  @apply h-screen
}
</style>