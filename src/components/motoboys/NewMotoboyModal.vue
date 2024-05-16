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

  <div
    class="fixed left-[50%] top-24 rounded-tl-sidebar p-8 right-0  bg-white h-full border transition-all duration-300">
    <div class="flex justify-between">
      <h1 class="text-xl font-bold text-background-dark-blue">New Motoboy</h1>
      <button @click.prevent="this.$emit('close')">
        <i class="fa-solid fa-xmark text-3xl hover:text-error text-background-dark-blue"></i>
      </button>
    </div>
    <!-- campos info usuario -->
    <div class="flex justify-between items-center">
      <div>
        <label>Nome</label>
        <input type="text" v-model="nome" />
      </div>
      <div>
        <label>Data Nascimento</label>
        <input type="date" v-model="dt_nascimento" />
      </div>
      <div>
        <label>E-mail</label>
        <input type="email" v-model="email" />
      </div>
      <div>
        <label>Telefone</label>
        <input type="phone" v-model="telefone" />
      </div>
    </div>

    <!-- canmpos info endereço do usuario-->
    <div class="flex justify-between items-center">
      <div>
        <label>CEP</label>
        <input type="text" v-model="cep" />
      </div>
      <div>
        <label>Logradouro</label>
        <input type="text" v-model="logradouro" />
      </div>
      <div>
        <label>Numero</label>
        <input type="number" v-model="numero" />
      </div>
      <div>
        <label>Complemento</label>
        <input type="text" v-model="complemento" />
      </div>
      <div>
        <label>Bairro</label>
        <input type="text" v-model="bairro" />
      </div>
      <div>
        <label>Cidade</label>
        <input type="text" v-model="cidade" />
      </div>
      <div>
        <label>UF</label>
        <input type="text" v-model="uf" />
      </div>
    </div>

    <!-- campos info sobre habilitação -->
    <div class="flex justify-between items-center">
      <div>
        <label>Habilitação</label>
        <input type="text" v-model="habilitacao">
      </div>
      <div>
        <label>Placa</label>
        <input type="text" v-model="placa">
      </div>
      <div>
        <label>Vaiculo</label>
        <input type="text" v-model="veiculo">
      </div>
    </div>

    <div>
      <button @click.prevent="cancelarCadastro">Cancelar</button>
      <button @click.prevent="salvarNovoMotoboy">Salvar</button>
    </div>

  </div>


</template>

<style scoped></style>