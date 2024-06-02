<script>
import FiltersComponent from './FiltersComponent.vue';
import TableDeliveriesComponent from './TableDeliveriesComponent.vue';
import NewDelivery from './NewDelivery.vue';
import axios from 'axios';

export default {
  name: 'DeliveryHistoryComponent',
  components: {
    FiltersComponent,
    TableDeliveriesComponent,
    NewDelivery
  },
  data() {
    return {
      deliveries: [],
      isOpenNewDelivery: false,
    }
  },

  mounted() {
    this.getDeliveries()
  },

  methods: {
    toggleModal() {
      this.isOpenNewDelivery = !this.isOpenNewDelivery
      console.log('to aqui');
    },
    async getDeliveries() {
      try{
        const response = await axios.get(`${this.$store.state.BASE_URL}/deliveries/history-manager/`,{
          headers: {
            'Authorization': `${localStorage.getItem('authToken')}`
          }
        })

        this.deliveries = response.data
        console.log(this.deliveries);
      } catch(err) {
        console.error(err);
      }
    },
    
    }
  }

</script>

<template>
  <div class="">
    <div class="text-3xl font-bold text-background-dark-blue pt-10">
      <h1>Historico de Entregas</h1>
    </div>
    <FiltersComponent @applyFilters="filterDeliveries" @openNewDelivery="toggleModal"/>
    <TableDeliveriesComponent :deliveries="deliveries" />
    <NewDelivery v-if="isOpenNewDelivery == true" @closePopup="toggleModal"/>
  </div>
</template>

<style scoped>
.container-deliveries-history {
  @apply h-screen
}
</style>