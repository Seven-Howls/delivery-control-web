<script>
import axios from 'axios';
export default {
  name: 'DetailsDelivery',

  data() {
    return {
      taxas: [],
      motoboys: [],
      payment_method: [],
      status: []
    }
  },
  props: {
    delivery: {
      type: Object,
      required: true
    }
  },
  mounted() {
    this.taxas = this.$store.state.taxas;
    this.motoboys = this.$store.state.motoboys;
    this.payment_method = this.$store.state.payment_method;
    this.status = this.$store.state.status;
  },
  methods: {
    async updateDelivery() {
      try {
        const response = await axios.put(`${this.$store.state.BASE_URL}/deliveries/update-deliver`, this.delivery, {
          headers: {
            'Authorization': `${localStorage.getItem('authToken')}`
          }
        })
        console.log(response.data);
        this.$emit('atualizarTabela')
        this.$emit('closePopup')
      } catch(err) {  
        console.log(err);
      }
    } 
  }
}

</script>

<template>

  <div class="fixed w-full h-full top-0 left-0 bg-black bg-opacity-40 z-50">
    <div class="absolute left-[35%] top-[6%] w-[30%] h-auto py-8 px-4 rounded-7 bg-white  ">
      <!-- <pre>{{ delivery }}</pre> -->
      <div class="flex justify-between w-full">
        <h1 class="text-xl text-background-dark-blue font-bold">Detalhes Entrega</h1>
        <button @click.prevent="this.$emit('closePopup')">
          <i class="fa-solid fa-xmark text-3xl hover:text-error text-background-dark-blue" />
        </button>
      </div>

      <!-- Campo Número da Comanda -->
      <div class="flex flex-col gap-1 w-full mb-4">
        <label class="text-background-dark-blue text-xl font-bold">Número da Comanda</label>
        <input type="number" class="border-2 border-search-gray p-2 text-xl rounded-7 outline-none focus:border-cinza"
          v-model="delivery.comandaId" />
      </div>

      <!-- Campo Motoboy responsável -->
      <div class="flex flex-col gap-1 w-full mb-4">
        <label class="text-background-dark-blue text-xl font-bold">Motoboy responsável</label>
        <select class="border-2 border-search-gray p-2 text-xl rounded-7 outline-none focus:border-cinza"
          v-model="delivery.motoboy.id">
          <option value=""></option>
          <option v-for="motoboy in motoboys.motoboys" :key="motoboy.id" :value="motoboy.id">{{ motoboy.usuario.nome }}
          </option>
        </select>
      </div>

      <!-- Campo Valor da Entrega -->
      <div class="flex flex-col gap-1 w-full mb-4">
        <label class="text-background-dark-blue text-xl font-bold">Valor do Pedido</label>
        <input type="number" class="border-2 border-search-gray p-2 text-xl rounded-7 outline-none focus:border-cinza"
          v-model="delivery.valorProduto" />
      </div>

      <!-- Campo Valor da Taxa -->
      <div class="flex flex-col gap-1 w-full mb-4">
        <label class="text-background-dark-blue text-xl font-bold">Valor da Taxa</label>
        <select class="border-2 border-search-gray p-2 text-xl rounded-7 outline-none focus:border-cinza"
          v-model="delivery.taxaEntrega.id">
          <option value=""> </option>
          <option v-for="taxa in taxas" :key="taxa.id" :value="taxa.id">{{ taxa.valor }}</option>
        </select>
      </div>

      <!-- Campo Valor da taxa de serviço -->
      <div class="flex flex-col gap-1 w-full mb-4">
        <label class="text-background-dark-blue text-xl">Taxa de serviço</label>
        <input type="number" class="border-2 border-search-gray p-2 text-xl rounded-7 outline-none focus:border-cinza"
          v-model="delivery.taxaServico" />

      </div>
      <!-- Campo Forma de pagamento -->
      <div class="flex flex-col gap-1 w-full mb-4">
        <label class="text-background-dark-blue text-xl font-bold">Forma de Pagamento</label>
        <select class="border-2 border-search-gray p-2 text-xl rounded-7 outline-none focus:border-cinza"
          v-model="delivery.metodoPagamento.id">
          <option value=""> </option>
          <option v-for="method in payment_method" :key="method.id" :value="method.id">{{ method.nome }}</option>
        </select>
      </div>
      <!-- Campo Forma de pagamento -->
      <div class="flex flex-col gap-1 w-full mb-4">
        <label class="text-background-dark-blue text-xl font-bold">Status</label>
        <select class="border-2 border-search-gray p-2 text-xl rounded-7 outline-none focus:border-cinza"
          v-model="delivery.deliveriesStatus.id">
          <option value=""> </option>
          <option v-for="state in status" :key="state.id" :value="state.id">{{ state.nome }}</option>
        </select>
      </div>

      <!-- Botões de ação -->
      <div class="flex justify-between mt-6">
        <button @click.prevent="this.$emit('closePopup')"
          class="bg-error text-white px-4 py-2 rounded-7 ">Cancelar</button>
        <button @click.prevent="updateDelivery"
          class="bg-confirmation text-white px-4 py-2 rounded-7 ">Salvar</button>
      </div>
    </div>
  </div>

</template>