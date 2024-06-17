<script>
import axios from 'axios';

export default {
  name: 'DetailsMotoboy',
  props: {
    motoboy: {
      type: Object,
      required: true
    },
    motoboyId: {
      type: String,
      required: true
    }
  },
  methods: {
    formatCpf(cpf) {
      return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    },
    validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },
    async updateMotoboy() {
      if (!this.validateEmail(this.motoboy.email)) {
        return; 
      }
      try {
        const response = await axios.put(
          `${this.$store.state.BASE_URL}/motoboys/update/${this.motoboyId}`,
          this.motoboy,
          {
            headers: {
              Authorization: `${localStorage.getItem('authToken')}`
            }
          }
        );
        console.log(response.data);
        this.$emit('atualizarTabela')
        this.$emit('close');
      } catch (err) {
        console.log(err);
      }
    },
    formatPhone(phone) {
      if (typeof phone !== 'string') return '';
      return phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    },
    updatePhone(event) {
      this.motoboy.celular = event.target.value.replace(/\D/g, '');
      this.formattedPhone = this.formatPhone(this.motoboy.celular);
    }
  },
  computed: {
    formattedCpf() {
      return this.formatCpf(this.motoboy.cpf);
    }
  }
};
</script>
<template>
  <div class="fixed inset-0 bg-black bg-opacity-40 z-40 flex items-center justify-center">
    <div class="bg-white rounded-7 shadow-lg p-8 w-full max-w-3xl mx-4">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-gray-900">Detalhes Motoboy</h1>
        <button @click.prevent="this.$emit('close')" class="text-gray-500 hover:text-gray-900">
          <i class="fa-solid fa-xmark text-3xl"></i>
        </button>
      </div>
      <div class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-gray-700 text-lg font-semibold mb-2">Nome</label>
            <input type="text" v-model="motoboy.nome" readonly
              class="w-full p-3 border  focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-update-input" />
          </div>
          <div>
            <label class="block text-gray-700 text-lg font-semibold mb-2">CPF</label>
            <input type="text" :value="formattedCpf" readonly 
              class="w-full p-3 border rounded-update-input focus:outline-none focus:ring-2 focus:ring-blue-500 " />
          </div>
          <div>
            <label class="block text-gray-700 text-lg font-semibold mb-2">E-mail</label>
            <input type="email" v-model="motoboy.email"
              class="w-full p-3 border rounded-update-input focus:outline-none focus:ring-2 focus:ring-blue-500 " />
            <p v-if="!validateEmail(motoboy.email)" class="text-error mt-1">Por favor, insira um e-mail válido.</p>
          </div>
          <div>
            <label class="block text-gray-700 text-lg font-semibold mb-2">Telefone</label>
            <input type="phone" v-model="motoboy.celular" @input="updatePhone"
              class="w-full p-3 border rounded-update-input focus:outline-none focus:ring-2 focus:ring-blue-500 d" />
          </div>
        </div>
        <div class="flex justify-end space-x-4">
          <button @click.prevent="this.$emit('close')"
            class="bg-error text-white px-4 py-2 rounded-update-input hover:bg-error/40 ">Fechar</button>
          <button @click.prevent="updateMotoboy()"
            class="bg-confirmation text-white px-4 py-2 rounded-update-input hover:bg-confirmation/40 ">Salvar</button>
        </div>
      </div>
    </div>
  </div>
</template>



