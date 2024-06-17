<script>
import axios from 'axios';

export default {
  name: 'DetailsCollaborators',
  data() {
    return {
      types: [],
      emailValid: true 
    }
  },
  props: {
    collaborator: {
      type: Object,
      required: true
    }
  },
  mounted() {
    this.getTypesUser();
    console.log(this.collaborator);
  },
  methods: {
    async getTypesUser() {
      try {
        const response = await axios.get(`${this.$store.state.BASE_URL}/user-type/all`, {
          headers: {
            'Authorization': `${localStorage.getItem('authToken')}`
          }
        });
        this.types = response.data;
        console.log(this.types);
      } catch (err) {
        console.log(err);
      }
    },
    formatCpf(cpf) {
      return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    },
    validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.emailValid = re.test(email);
    },
    async updateCollaborators() {
      try {
        const response = await axios.put(`${this.$store.state.BASE_URL}/collaborator/update/${this.collaborator.id}`, this.collaborator.usuarioColaborador, {
          headers: {
            'Authorization': `${localStorage.getItem('authToken')}`
          }
        });
        console.log(response.data);
        this.$emit('atualizarTabela')
        this.$emit('close');
      } catch (err) {
        console.log(err);
      }
    },
    cancelarCadastro() {
      this.$emit('close');
    }
  }
}
</script>
<template>
  <div class="fixed top-0 left-0 bg-black/40 z-40 w-full h-screen">
    <div class="fixed left-[50%] top-24 rounded-tl-sidebar p-8 right-0 bg-white h-full border transition-all duration-300">
      <div class="flex justify-between">
        <h1 class="text-xl font-bold text-background-dark-blue">Detalhes Colaborador</h1>
        <button @click.prevent="$emit('close')">
          <i class="fa-solid fa-xmark text-3xl hover:text-error text-background-dark-blue"></i>
        </button>
      </div>
      <!-- Formulário -->
      <div class="p-4 bg-white rounded-7 shadow-md">
        <!-- Campos de informação do usuário -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div class="col-span-2 flex flex-col gap-1">
            <label class="text-background-dark-blue text-xl font-bold">Nome</label>
            <input type="text" class="border-2 border-search-gray p-2 text-xl rounded-7 outline-none focus:border-cinza"
              v-model="collaborator.usuarioColaborador.nome" />
          </div>
          <div class="flex flex-col gap-1">
            <label class="text-background-dark-blue text-xl font-bold">CPF</label>
            <input type="text" :value="formatCpf(collaborator.usuarioColaborador.cpf)" readonly
              class="border-2 border-search-gray p-2 text-xl rounded-7 outline-none focus:border-cinza" />
          </div>
          <div class="flex flex-col gap-1">
            <label class="text-background-dark-blue text-xl font-bold">Telefone</label>
            <input type="phone" v-model="collaborator.usuarioColaborador.celular"
              class="border-2 border-search-gray p-2 text-xl rounded-7 outline-none focus:border-cinza" />
          </div>
          <div class="col-span-2 flex flex-col gap-1">
            <label class="text-background-dark-blue text-xl font-bold">E-mail</label>
            <input type="email" v-model="collaborator.usuarioColaborador.email"
              class="border-2 border-search-gray p-2 text-xl rounded-7 outline-none focus:border-cinza"
              @blur="validateEmail(collaborator.usuarioColaborador.email)" />
            <span v-if="!emailValid" class="text-error">Por favor, insira um e-mail válido.</span>
          </div>
          <div class="col-span-2 flex flex-col gap-1">
            <label class="text-background-dark-blue text-xl font-bold">Tipo</label>
            <select v-model="collaborator.tipoId"
              class="border-2 border-search-gray p-2 text-xl rounded-7 outline-none focus:border-cinza">
              <option v-for="userType in types" :key="userType.id" :value="userType.id">{{ userType.nome }}</option>
            </select>
          </div>
        </div>

        <div class="flex justify-end py-12 space-x-4">
          <button @click.prevent="cancelarCadastro" class="bg-error text-white px-4 py-2 rounded-7">Cancelar</button>
          <button @click.prevent="updateCollaborators"
            class="bg-confirmation text-white px-4 py-2 rounded-7">Salvar</button>
        </div>
      </div>
    </div>
  </div>
</template>
