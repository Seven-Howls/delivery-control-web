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
      deliveries: [{
        id: 1,
        name: "ThenMarques Silva",
        date: "12/05/2023",
        value: "39,99",
        status: "Entregue"
      },
      {
        id: 2,
        name: "Gustavim Soares",
        date: "25/08/2022",
        value: "994,99",
        status: "Pendente"
      },
      {
        id: 3,
        name: "Luiz Otávio Pe Frio",
        date: "03/11/2024",
        value: "993,99",
        status: "Pendente"
      },
      {
        id: 4,
        name: "João Vitor",
        date: "20/09/2023",
        value: "992,99",
        status: "Entregue"
      },
      {
        id: 5,
        name: "Pedro Lucas",
        date: "07/07/2024",
        value: "199,99",
        status: "Entregue"
      },
      {
        id: 6,
        name: "Mayco Castro",
        date: "14/02/2024",
        value: "99,99",
        status: "Pendente"
      },
      {
        id: 7,
        name: "Ana Carolina",
        date: "15/06/2023",
        value: "349,99",
        status: "Entregue"
      },
      {
        id: 8,
        name: "Rafael Souza",
        date: "18/04/2024",
        value: "599,99",
        status: "Pendente"
      },
      {
        id: 9,
        name: "Maria Santos",
        date: "22/09/2023",
        value: "799,99",
        status: "Pendente"
      },
      {
        id: 10,
        name: "Felipe Oliveira",
        date: "30/11/2022",
        value: "449,99",
        status: "Entregue"
      },
      {
        id: 11,
        name: "Amanda Silva",
        date: "05/03/2024",
        value: "259,99",
        status: "Entregue"
      },
      {
        id: 12,
        name: "Lucas Mendes",
        date: "10/10/2023",
        value: "399,99",
        status: "Pendente"
      },
      {
        id: 13,
        name: "Marina Costa",
        date: "12/08/2024",
        value: "349,99",
        status: "Pendente"
      },
      {
        id: 14,
        name: "Mateus Santos",
        date: "20/05/2022",
        value: "149,99",
        status: "Entregue"
      },
      {
        id: 15,
        name: "Carolina Oliveira",
        date: "14/02/2023",
        value: "199,99",
        status: "Entregue"
      },
      {
        id: 16,
        name: "Gabriel Ferreira",
        date: "01/09/2024",
        value: "299,99",
        status: "Pendente"
      },
      {
        id: 17,
        name: "Ana Paula",
        date: "07/11/2022",
        value: "499,99",
        status: "Entregue"
      },
      {
        id: 18,
        name: "Pedro Henrique",
        date: "23/12/2023",
        value: "159,99",
        status: "Entregue"
      },
      {
        id: 19,
        name: "Juliana Lima",
        date: "08/06/2024",
        value: "449,99",
        status: "Pendente"
      },
      {
        id: 20,
        name: "Luciana Silva",
        date: "29/10/2023",
        value: "699,99",
        status: "Pendente"
      }

      ],
      originalDeliveries: [],
    }
  },

  mounted() {
    // this.getDeliveries()
    this.originalDeliveries = [...this.deliveries];
  },

  methods: {
    // async getDeliveries() {
    //   try{
    //     const response = await axios.get(`${this.$store.state.BASE_URL}/api/v1/deliveries/in-progress/${this.$store.state.MOTOBOY_ID}`)

    //     this.deliveries = response.data
    //     console.log(this.deliveries);
    //   } catch(err) {
    //     console.error(err);
    //   }
    // },
    filterDeliveries(filterText) {
      if (filterText === '') {

        this.deliveries = [...this.originalDeliveries];
      } else {
        // Filtrar os dados com base no texto fornecido
        this.deliveries = this.originalDeliveries.filter(delivery => {
          return delivery.id.toString().includes(filterText) ||
            delivery.name.toLowerCase().includes(filterText.toLowerCase()) ||
            delivery.status.toLowerCase().includes(filterText.toLowerCase()) ||
            delivery.date.toString().includes(filterText) ||
            delivery.value.toString().includes(filterText);
        });
      }
    }
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