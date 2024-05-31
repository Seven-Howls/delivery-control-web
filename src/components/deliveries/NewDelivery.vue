<script>

export default {
  name: 'NewDelivery',
  data() {
    return {
      motoboy_responsavel: '',
      valor: 0,
      taxas: [],
      taxa_de_entrega: 0,
    }
  },

  methods: {
    async getDeliveriesFee() {
      try {
        const response = await axios.get(`${this.$store.state.BASE_URL}/deliveries-fee/`, {
          headers: {
            'Authorization': `${localStorage.getItem('authToken')}`
          }
        })
        this.taxas = response.data
        console.log(this.taxas);
      } catch(err) {
        console.log(err);
      }
    },
    async createNewDelivery() {

    }
  }
}

</script>

<template>

  <div class="fixed w-full h-full top-0 left-0 bg-black bg-opacity-40 z-50">
    <div class="absolute left-[35%] top-[25%] w-[30%] h-auto py-8 px-4 rounded-7 bg-white  ">
      <div class="flex justify-between w-full">
        <h1 class="text-xl text-background-dark-blue font-bold">Nova Entrega</h1>
        <button @click.prevent="this.$emit('closePopup')">
          <i class="fa-solid fa-xmark text-3xl hover:text-error text-background-dark-blue" />
        </button>
      </div>

      <!-- Campo Número da Comanda -->
      <div class="flex flex-col gap-1 w-full mb-4">
        <label class="text-background-dark-blue text-xl font-bold">Número da Comanda</label>
        <input type="number" class="border-2 border-search-gray p-2 text-xl rounded-7 outline-none focus:border-cinza"
          v-model="numero_da_comanda" />
      </div>

      <!-- Campo Motoboy responsável -->
      <div class="flex flex-col gap-1 w-full mb-4">
        <label class="text-background-dark-blue text-xl font-bold">Motoboy responsável</label>
        <select class="border-2 border-search-gray p-2 text-xl rounded-7 outline-none focus:border-cinza"
          v-model="motoboy_responsavel">
          <option value=""></option>
          <option value="Pedro">Pedro</option>
          <option value="Lucas">Lucas</option>
        </select>
      </div>

      <!-- Campo Valor da Entrega -->
      <div class="flex flex-col gap-1 w-full mb-4">
        <label class="text-background-dark-blue text-xl font-bold">Valor da Entrega</label>
        <input type="number" class="border-2 border-search-gray p-2 text-xl rounded-7 outline-none focus:border-cinza"
          v-model="valor_da_entrega" />
      </div>

      <!-- Campo Valor da Taxa -->
      <div class="flex flex-col gap-1 w-full mb-4">
        <label class="text-background-dark-blue text-xl font-bold">Valor da Taxa</label>
        <select  class="border-2 border-search-gray p-2 text-xl rounded-7 outline-none focus:border-cinza"
          v-model="valor_da_taxa" >
          <option value=""> </option>
          <option v-for="taxa in taxas" :key="taxa.id" :value="taxa.id">{{ taxa.valor }}</option>
        </select>
      </div>

      <!-- Botões de ação -->
      <div class="flex justify-between mt-6">
        <button @click.prevent="this.$emit('closePopup')"
          class="bg-error text-white px-4 py-2 rounded-7 ">Cancelar</button>
        <button @click.prevent="createNewDelivery"
          class="bg-confirmation text-white px-4 py-2 rounded-7 ">Salvar</button>
      </div>
    </div>
  </div>

</template>

<style scoped></style>