<script>
import axios from 'axios';
export default {
  name: 'LoginForm',
  data() {
    return {
      username: '',
      password: '',
      lembrar_usuario: false,
      companies: [],
      companyId: ''
    }
  },

  mounted() {
    this.getCompanies()
  },

  methods: {
    async submitLogin() {
      try {
        const data = {
          cpf: this.username,
          password: this.password,
          companyId: this.companyId
        }
        const response = await axios.post(`${this.$store.state.BASE_URL}/collaborator/login`, data);
        const user = response.data.dataCollaborator;
        const token = response.data.token
        
        // Salva o user na Vuex store
        this.$store.dispatch('saveUser', user);
        localStorage.setItem('authToken', token)
        
        // Redireciona para a tela de historico
        this.$router.push({ name: 'deliveries-history' });
      } catch(err) {
        console.log(err);
      }
    },

    async getCompanies() {
      try {
        const response = await axios.get(`${this.$store.state.BASE_URL}/companies/`);
        this.companies = response.data
        console.log(this.companies);
      } catch(err) {
        console.log(err);
      }
    }
  }
}

</script>

<template>

  <div class="flex flex-col justify-center items-center h-screen w-full px-24">
    <div>
      <img src="../../assets/logo.png" alt="logo-delivery-control" class="w-32"/>
    </div>

    <div class="w-full py-12">
      <div class="flex flex-col w-full gap-2 text-xl">
        <label class="font-bold">CPF</label>
        <input class="outline-none border-2 border-cinza-tabela p-2 rounded-7" type="text" v-model="username">
      </div>
      <div class="flex flex-col w-full gap-2 text-xl pt-6">
        <label class="font-bold">Senha</label>
        <input class="outline-none border-2 border-cinza-tabela p-2 rounded-7" type="password" v-model="password">
      </div>
      <div class="flex flex-col w-full gap-2 text-xl pt-6">
        <label class="font-bold">Selecione sua Empresa</label>
        <select class="outline-none border-2 border-cinza-tabela p-2 rounded-7" v-model="companyId">
          <option> </option>
          <option v-for="company in companies" :key="company.id" :value="company.id">{{ company.nome_fantasia }}</option>
        </select>
      </div>
      <div class="py-8 flex w-full justify-between">
        <div class="flex gap-2">
          <input type="checkbox" name="Lembrar de min" v-model="lembrar_usuario">
          <label class="text-black">Lembrar de min</label>
        </div>
        <div>
          <span class="text-light-blue">Esqueceu a senha?</span>
        </div>
      </div>
      <div class="w-full">
        <button class="bg-light-blue text-white text-xl font-bold w-full text-center rounded-7 py-3" @click.prevent="submitLogin">Entrar</button>
      </div>
      <div class="text-center py-4">
        <p class="font-bold">Não é cadastrado? <span class="text-light-blue">Marcar Demonstração</span></p>
      </div>
    </div>
  </div>


</template>

<style>

</style>