<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEllipsisVertical} from '@fortawesome/free-solid-svg-icons'
export default {
  name: 'TableDeliveriesComponent',
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      faEllipsisVertical,
      options: [5, 10, 15, 20],
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
  <div class="mt-12 relative bg-cinza">
    <div class="flex justify-center">
      <header class="containerTabelaTitulo ">
        <h3 class="text-center w-full text-xl">Entrega</h3>
        <h3 class="text-center w-full text-xl">Entregador</h3>
        <h3 class="text-center w-full text-xl">Data</h3>
        <h3 class="text-center w-full text-xl">Valor</h3>
        <h3 class="text-center w-full text-xl">Status</h3>
      </header>
    </div>
    <div class="shadow-header py-10 bg-white relative">
      <div class="flex justify-center  flex-col items-center overflow-auto max-h-500	">
        <details class="question py-3  w-11/12 " v-for="delivery in deliveries" :key="delivery.id">
          <summary class="flex items-center borda-inferior ">
            <div class="flex justify-around items-center  text-cinza font-semibold   w-full bg-white  ">
              <p class="w-full text-center text-lg">#001</p>
              <p class="w-full text-center text-lg">ThenMarques Silva </p>
              <p class="w-full text-center text-lg">01/01/0101</p>
              <p class="w-full text-center text-lg">R$ 99,99</p>
              <p class="w-full text-center text-lg">Pendente</p>
            </div>
            <div>
           
            </div>
          </summary>

        </details>
      </div>
      <div class="flex justify-center">
        <div class="flex justify-between items-start w-11/12">
          <div class=" bg-cinza-tabela bg-opacity-16 borda-inferior pt-1 px-2 mt-5">
            <select class="text-gray-text bg-transparent appearance-none outline-none bg-opacity-16  " v-model="selectedRows"
              id="rows">
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
  @apply flex w-11/12 rounded-table-header justify-around text-center bg-light-blue py-2 text-white top-25 z-[1] absolute shadow-header;
}




.borda-inferior {
  border-bottom: 2px solid #d9d9d9;
}



select {
  border: none !important;
}
</style>