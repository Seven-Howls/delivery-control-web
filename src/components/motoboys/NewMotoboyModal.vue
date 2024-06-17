<script>
import axios from 'axios';
import { mask } from 'vue-the-mask';

export default {
  name: 'NewMotoboyModal',
  directives: {
    mask
  },
  data() {
    return {
      motoboy: {
        nome: '',
        cpf: '',
        email: '',
        password: '12345',
        celular: '',
      }
    }
  },
  
  methods: {
    async createMotoboy() {
      try {
        const data = {
          userData: this.motoboy 
        }
        const response = await axios.post(`${this.$store.state.BASE_URL}/motoboys/signup`, data, {
          headers: {
            'Authorization': `${localStorage.getItem('authToken')}`
          }
        });
        console.log(response.data);
      } catch(err) {
        console.log(err);
      }
    }
  }
}
</script>

<template>
  <div class="fixed inset-0 bg-black bg-opacity-40 z-40 flex items-center justify-center">
    <div class="bg-white rounded-7 shadow-lg p-8 w-full max-w-3xl mx-4">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-gray-900">Novo Motoboy</h1>
        <button @click.prevent="this.$emit('close')" class="text-gray-500 hover:text-gray-900">
          <i class="fa-solid fa-xmark text-3xl"></i>
        </button>
      </div>
      <!-- Formulário -->
      <div class="space-y-6">
        <!-- Campos de informação do usuário -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-gray-700 text-lg font-semibold mb-2">Nome</label>
            <input type="text" v-model="motoboy.nome"
              class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label class="block text-gray-700 text-lg font-semibold mb-2">CPF</label>
            <input type="text" v-model="motoboy.cpf" 
              class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label class="block text-gray-700 text-lg font-semibold mb-2">E-mail</label>
            <input type="email" v-model="motoboy.email"
              class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label class="block text-gray-700 text-lg font-semibold mb-2">Telefone</label>
            <input type="text" v-model="motoboy.celular"
              class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>
        <!-- Botões de ação -->
        <div class="flex justify-end space-x-4">
          <button @click.prevent="this.$emit('close')"
            class="bg-error text-white px-4 py-2 rounded-lg hover:bg-error/40">Cancelar</button>
          <button @click.prevent="createMotoboy"
            class="bg-confirmation text-white px-4 py-2 rounded-lg hover:bg-confirmation/40">Salvar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
