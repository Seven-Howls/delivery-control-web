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
  <div>

    <div class=" w-9/12  h-screen">
      <FilterSelectComponent/>
      <TableDeliveriesComponent :deliveries="deliveries"/>
    </div>
  </div>
</template>

<style scoped>


</style>