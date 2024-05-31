<script>

export default {
  name: 'NewMotoboyModal',

  data() {
    return {
      nome: '',
      dt_nascimento: '',
      email: '',
      telefone: '',
      cep: '',
      logradouro: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
      habilitacao: '',
      placa: '',
      veiculo: '',
    }
  }
}

</script>

<template>

  <div class="fixed top-0 left-0 bg-black/40 z-40 w-full h-screen">
    <div
      class="fixed left-[50%] top-24 rounded-tl-sidebar p-8 right-0  bg-white h-full border transition-all duration-300">
      <div class="flex justify-between">
        <h1 class="text-xl font-bold text-background-dark-blue">Novo Motoboy</h1>
        <button @click.prevent="this.$emit('close')">
          <i class="fa-solid fa-xmark text-3xl hover:text-error text-background-dark-blue"></i>
        </button>
      </div>
      <!-- Formulário -->
      <div class="p-4 bg-white rounded-7 shadow-md">
        <!-- Campos de informação do usuário -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div class="flex flex-col gap-1">
            <label class="text-background-dark-blue text-xl font-bold">Nome</label>
            <input type="text" class="border-2 border-search-gray p-2 text-xl rounded-7 outline-none focus:border-cinza"
              v-model="nome" />
          </div>
          <div class="flex flex-col gap-1">
            <label class="text-background-dark-blue text-xl font-bold">Data Nascimento</label>
            <input type="date" v-model="dt_nascimento"
              class="border-2 border-search-gray p-2 text-xl rounded-7 outline-none focus:border-cinza" />
          </div>
          <div class="flex flex-col gap-1">
            <label class="text-background-dark-blue text-xl font-bold">E-mail</label>
            <input type="email" v-model="email"
              class="border-2 border-search-gray p-2 text-xl rounded-7 outline-none focus:border-cinza" />
          </div>
          <div class="flex flex-col gap-1">
            <label class="text-background-dark-blue text-xl font-bold">Telefone</label>
            <input type="phone" v-model="telefone"
              class="border-2 border-search-gray p-2 text-xl rounded-7 outline-none focus:border-cinza" />
          </div>
        </div>

        <!-- Campos de informação de endereço do usuário -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div class="flex flex-col gap-1">
            <label class="text-background-dark-blue text-xl font-bold">CEP</label>
            <input type="text" v-model="cep"
              class="border-2 border-search-gray p-2 text-xl rounded-7 outline-none focus:border-cinza" />
          </div>
          <div class="flex flex-col gap-1">
            <label class="text-background-dark-blue text-xl font-bold">Logradouro</label>
            <input type="text" v-model="logradouro"
              class="border-2 border-search-gray p-2 text-xl rounded-7 outline-none focus:border-cinza" />
          </div>
          <div class="flex flex-col gap-1">
            <label class="text-background-dark-blue text-xl font-bold">Numero</label>
            <input type="number" v-model="numero"
              class="border-2 border-search-gray p-2 text-xl rounded-7 outline-none focus:border-cinza" />
          </div>
          <div class="flex flex-col gap-1">
            <label class="text-background-dark-blue text-xl font-bold">Complemento</label>
            <input type="text" v-model="complemento"
              class="border-2 border-search-gray p-2 text-xl rounded-7 outline-none focus:border-cinza" />
          </div>
          <div class="flex flex-col gap-1">
            <label class="text-background-dark-blue text-xl font-bold">Bairro</label>
            <input type="text" v-model="bairro"
              class="border-2 border-search-gray p-2 text-xl rounded-7 outline-none focus:border-cinza" />
          </div>
          <div class="flex flex-col gap-1">
            <label class="text-background-dark-blue text-xl font-bold">Cidade</label>
            <input type="text" v-model="cidade"
              class="border-2 border-search-gray p-2 text-xl rounded-7 outline-none focus:border-cinza" />
          </div>
          <div class="flex flex-col gap-1">
            <label class="text-background-dark-blue text-xl font-bold">UF</label>
            <input type="text" v-model="uf"
              class="border-2 border-search-gray p-2 text-xl rounded-7 outline-none focus:border-cinza" />
          </div>
        </div>

        <!-- Campos de informação sobre habilitação -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div class="flex flex-col gap-1">
            <label class="text-background-dark-blue text-xl font-bold">Habilitação</label>
            <input type="text" v-model="habilitacao"
              class="border-2 border-search-gray p-2 text-xl rounded-7 outline-none focus:border-cinza" />
          </div>
          <div class="flex flex-col gap-1">
            <label class="text-background-dark-blue text-xl font-bold">Placa</label>
            <input type="text" v-model="placa"
              class="border-2 border-search-gray p-2 text-xl rounded-7 outline-none focus:border-cinza" />
          </div>
          <div class="flex flex-col gap-1">
            <label class="text-background-dark-blue text-xl font-bold">Veículo</label>
            <input type="text" v-model="veiculo"
              class="border-2 border-search-gray p-2 text-xl rounded-7 outline-none focus:border-cinza" />
          </div>
        </div>

        <!-- Botões de ação -->
        <div class="flex justify-end space-x-4">
          <button @click.prevent="cancelarCadastro" class="bg-error text-white px-4 py-2 rounded-7">Cancelar</button>
          <button @click.prevent="salvarNovoMotoboy"
            class="bg-confirmation text-white px-4 py-2 rounded-7 ">Salvar</button>
        </div>
      </div>


    </div>
  </div>

</template>

<style scoped></style>