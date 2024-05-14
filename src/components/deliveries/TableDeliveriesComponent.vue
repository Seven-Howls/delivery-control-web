<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import FiltersComponent from './FiltersComponent.vue';

export default {
  name: 'TableDeliveriesComponent',
  components: {
    FontAwesomeIcon,
    FiltersComponent
  },
  data() {
    return {
      faEllipsisVertical,
      options: [5, 10, 15, 20],
      mockDeliveries: [
    {
      id: 1,
      name: "ThenMarques Silva",
      date: "12/05/2023",
      value: "939,99",
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
      name: "Luiz Otário",
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
  
    
  
 
    
  ]
      
    }
  },
  props: {
    deliveries: {
      type: Array,
      required: true
    }
  },

  methods: {

  }


}
</script>

<template>

    <div class="w-11/12 2xl:top-16 relative top-16">
      <div class="shadow-header  bg-white">
        <div class="flex h-2/3 justify-center">
          <header class="containerTabelaTitulo ">
            <h3 class="text-center w-full text-base 2xl:text-xl">Entrega</h3>
            <h3 class="text-center w-full text-base 2xl:text-xl">Entregador</h3>
            <h3 class="text-center w-full text-base 2xl:text-xl">Data</h3>
            <h3 class="text-center w-full text-base 2xl:text-xl">Valor</h3>
            <h3 class="text-center w-full text-base 2xl:text-xl">Status</h3>
          </header>
        </div>
        <div>

        </div>
        <div class="max-h-300 overflow-y-auto">

          <div class="flex justify-center flex-col items-center ">
            <div class="  w-11/12 " v-for="delivery in mockDeliveries" :key="delivery.id">
              <div class="flex items-center borda-inferior my-2">
                <div class="flex  justify-around items-center text-cinza font-semibold w-full bg-white">
                  <p class="w-full  text-center text-sm 2xl:text-lg">#{{ delivery.id }}</p>
                  <p class="w-full text-center text-sm 2xl:text-lg">{{ delivery.name }}</p>
                  <p class="w-full text-center text-sm 2xl:text-lg">{{ delivery.date }}</p>
                <p class="w-full text-center text-sm 2xl:text-lg">R$ {{ delivery.value }}</p>
                <p class="w-full text-center text-sm 2xl:text-lg">{{ delivery.status }}</p>
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
        
        
        <div class="flex justify-center">
          <div class="flex justify-between items-start w-11/12">
            <div class=" bg-cinza-tabela bg-opacity-16 borda-inferior ">
              <select class="text-gray-text bg-transparent appearance-none outline-none bg-opacity-16  "
                v-model="selectedRows" id="rows">
                <option v-for="n in options" :value="n">{{ n }}</option>
              </select>
              <label for="rows" class="text-gray-text">Linhas</label>
            </div>
            <div class="">
            </div>
          </div>
        </div>
      </div>
      </div>
   

  </template>
  
  <style scoped>
  .containerTabelaTitulo {
    @apply flex w-11/12 rounded-table-header justify-around text-center bg-light-blue py-2 relative -top-5  z-[1]  text-white  shadow-header;
  }



.borda-inferior {
  border-bottom: 2px solid #d9d9d9;
}



select {
  border: none !important;
}
</style>