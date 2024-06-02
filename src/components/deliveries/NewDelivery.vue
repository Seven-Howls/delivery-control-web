<script>
import axios from 'axios';
export default {
  name: 'NewDelivery',
  data() {
    return {
      delivery: {
        statusId: 5,
        motoboyId: "",
        commandId: 0,
        deliveryFeeId: "",
        serviceFee: 0,
        productValue: 0,
        paymentMethodId: ""
      },
      taxas: [],
      motoboys: [],
      payment_method: []
      
    }
  },
  mounted() {
    this.getDeliveriesFee()
    this.getMotoboys()
    this.getPaymentMethod()
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
    async getPaymentMethod() {
      try {
        const response = await axios.get(`${this.$store.state.BASE_URL}/payment-method`, {
          headers: {
            'Authorization': `${localStorage.getItem('authToken')}`
          }
        })
        this.payment_method = response.data
        console.log(this.payment_method);
      } catch(err) {
        console.log(err);
      }
    },

    async getMotoboys() {
      try {
        const response = await axios.get(`${this.$store.state.BASE_URL}/motoboys/find-all`, {
          headers: {
            'Authorization': `${localStorage.getItem('authToken')}`
          }
        })
        this.motoboys = response.data
        console.log(this.motoboys);
      } catch(err) {
        console.log(err);
      }
    },
    async createNewDelivery() {
      try {
        const response = await axios.post(`${this.$store.state.BASE_URL}/deliveries/create`, this.delivery, {
          headers: {
            'Authorization': `${localStorage.getItem('authToken')}`
          }
        })
        console.log(response.data);
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
    <div class="absolute left-[35%] top-[10%] w-[30%] h-auto py-8 px-4 rounded-7 bg-white  ">
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
          v-model="delivery.commandId" />
      </div>

      <!-- Campo Motoboy responsável -->
      <div class="flex flex-col gap-1 w-full mb-4">
        <label class="text-background-dark-blue text-xl font-bold">Motoboy responsável</label>
        <select class="border-2 border-search-gray p-2 text-xl rounded-7 outline-none focus:border-cinza"
          v-model="delivery.motoboyId">
          <option value=""></option>
          <option v-for="motoboy in motoboys" :key="motoboy.id" :value="motoboy.id">{{ motoboy.usuario.nome }}</option>
        </select>
      </div>

      <!-- Campo Valor da Entrega -->
      <div class="flex flex-col gap-1 w-full mb-4">
        <label class="text-background-dark-blue text-xl font-bold">Valor do Pedido</label>
        <input type="number" class="border-2 border-search-gray p-2 text-xl rounded-7 outline-none focus:border-cinza"
          v-model="delivery.productValue" />
      </div>

      <!-- Campo Valor da Taxa -->
      <div class="flex flex-col gap-1 w-full mb-4">
        <label class="text-background-dark-blue text-xl font-bold">Valor da Taxa</label>
        <select  class="border-2 border-search-gray p-2 text-xl rounded-7 outline-none focus:border-cinza"
          v-model="delivery.deliveryFeeId" >
          <option value=""> </option>
          <option v-for="taxa in taxas" :key="taxa.id" :value="taxa.id">{{ taxa.valor }}</option>
        </select>
      </div>
      
      <!-- Campo Valor da taxa de serviço -->
      <div class="flex flex-col gap-1 w-full mb-4">
        <label class="text-background-dark-blue text-xl">Taxa de serviço</label>
        <input type="number" class="border-2 border-search-gray p-2 text-xl rounded-7 outline-none focus:border-cinza"
        v-model="delivery.serviceFee" />
        
      </div>
      <!-- Campo Forma de pagamento -->
      <div class="flex flex-col gap-1 w-full mb-4">
        <label class="text-background-dark-blue text-xl font-bold">Forma de Pagamento</label>
        <select  class="border-2 border-search-gray p-2 text-xl rounded-7 outline-none focus:border-cinza"
          v-model="delivery.paymentMethodId" >
          <option value=""> </option>
          <option v-for="method in payment_method" :key="method.id" :value="method.id">{{ method.nome }}</option>
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