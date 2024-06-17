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
    async submitForm() {
      this.motoboy.cpf = this.cleanCpf(this.motoboy.cpf);
    
      if (this.validateEmail(this.motoboy.email)) {
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

    },
    formatCpfInput() {
      if (this.motoboy.cpf) {
        this.motoboy.cpf = this.formatCpf(this.motoboy.cpf);
      }
    },
    formatCpf(cpf) {
      return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    },
    validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },
    cleanCpf(cpf) {
      return cpf.replace(/\D/g, '');
    }
  }
}
</script>
<template>
  <div class="fixed inset-0 bg-black bg-opacity-40 z-40 flex items-center justify-center">
    <div class="bg-white rounded-7 shadow-lg p-8 w-full max-w-3xl mx-4">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-gray-900">Novo Motoboy</h1>
        <button @click.prevent="$emit('close')" class="text-gray-500 hover:text-gray-900">
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
              class="w-full p-3 border  focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-update-input" />
          </div>
          <div>
            <label class="block text-gray-700 text-lg font-semibold mb-2">CPF</label>
            <input type="text" v-model="motoboy.cpf" @blur="formatCpfInput"
              class="w-full p-3 border  focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-update-input" />
          </div>
          <div>
            <label class="block text-gray-700 text-lg font-semibold mb-2">E-mail</label>
            <input type="email" v-model="motoboy.email"
              class="w-full p-3 border  focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-update-input" />
              <p v-if="!validateEmail(motoboy.email)" class="text-error mt-1">Por favor, insira um e-mail válido.</p>
          </div>
          <div>
            <label class="block text-gray-700 text-lg font-semibold mb-2">Telefone</label>
            <input type="text" v-model="motoboy.celular"
              class="w-full p-3 border  focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-update-input" />
          </div>
        </div>
        <!-- Botões de ação -->
        <div class="flex justify-end space-x-4">
          <button @click.prevent="$emit('close')"
            class="bg-error text-white px-4 py-2  hover:bg-error/40 rounded-update-input">Cancelar</button>
          <button @click.prevent="submitForm"
            class="bg-confirmation text-white px-4 py-2  hover:bg-confirmation/40 rounded-update-input">Salvar</button>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped></style>
