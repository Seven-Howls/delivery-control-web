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
      taxas: [],
    }
  },

  mounted() {
    this.getDeliveries();
    this.getDeliveriesFee()
  },

  methods: {
    toggleModal() {
      this.isOpenNewDelivery = !this.isOpenNewDelivery
      console.log('to aqui');
    },

    async getDeliveries() {
      try {
        const response = await axios.get(`${this.$store.state.BASE_URL}/deliveries/history-manager?page=1&perPage=10`, {
          headers: {
            'Authorization': `${localStorage.getItem('authToken')}`
          }
        })

        this.deliveries = response.data
        console.log(this.deliveries);
      } catch (err) {
        console.error(err);
      }
    },

    async getDeliveriesFee() {
      try {
        const response = await axios.get(`${this.$store.state.BASE_URL}/deliveries-fee/`, {
          headers: {
            'Authorization': `${localStorage.getItem('authToken')}`
          }
        })
        this.taxas = response.data
        this.$store.dispatch('saveTaxas', this.taxas)
        console.log(this.taxas);
      } catch (err) {
        console.log(err);
      }
    },

    updateDeliveries(newDeliveries) {
      this.deliveries = newDeliveries;
    }
  }
}

</script>

<template>
  <div class="">
    <div class="text-3xl font-bold text-background-dark-blue pt-10">
      <h1>Historico de Entregas</h1>
    </div>
    <FiltersComponent @applyFilters="filterDeliveries" @openNewDelivery="toggleModal" />
    <TableDeliveriesComponent :deliveries="deliveries" @update:deliveries="updateDeliveries" />
    <NewDelivery :taxas="taxas" :motoboys="motoboys" :payment_method="payment_method" v-if="isOpenNewDelivery == true"
      @closePopup="toggleModal" />
  </div>
</template>

<style scoped>
.container-deliveries-history {
  @apply h-screen
}
</style>