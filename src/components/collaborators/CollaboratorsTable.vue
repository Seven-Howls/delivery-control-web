<script>
import DetailsCollaborators from './DetailsCollaborators.vue';
export default {
  name: 'CollaboratorsTable',
  components: {
    DetailsCollaborators
  },

  data() {
    return {
      collaboratorSelected: {},
      isOpen: false
    }
  },

  props: {
    collaborators: {
      type: Array,
      required: true
    }
  },

  mounted() {

  },

  methods: {
    formatCpf(cpf) {
      return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    },

    openDetails(collaborator) {
      this.collaboratorSelected = collaborator
      this.isOpen = true
    },

    closeDetails() {
      this.collaboratorSelected = {}
      this.isOpen = false
    }
  }
}

</script>

<template>

  <div class="w-11/12 2xl:top-16 relative top-15">
    <div class="shadow-header   bg-white">
      <div class="flex h-2/3 items-center justify-center">
        <header class="containerTabelaTitulo ">
          <h3 class="text-center w-full text-base 2xl:text-xl">Nome</h3>
          <h3 class="text-center w-full text-base 2xl:text-xl">CPF</h3>
          <h3 class="text-center w-full text-base 2xl:text-xl">Celular</h3>
        </header>
      </div>
      <div>

      </div>
      <div class="2xl:max-h-300 max-h-lg-300 overflow-y-auto">

        <div class="flex justify-center flex-col items-center ">
          <div class="w-full px-9 " v-for="collaborator in collaborators" :key="collaborator.id">
            <div class="flex items-center borda-inferior">
              <button @click.prevent="openDetails(collaborator.usuarioColaborador)"
                class="flex justify-around items-center py-2 text-cinza font-semibold w-full bg-white hover:font-bold hover:bg-cinza-tabela">
                <p class="w-full  text-center text-sm 2xl:text-lg">{{ collaborator.usuarioColaborador.nome }}</p>
                <p class="w-full text-center text-sm 2xl:text-lg">{{ formatCpf(collaborator.usuarioColaborador.cpf) }}
                </p>
                <p class="w-full text-center text-sm 2xl:text-lg">{{ collaborator.usuarioColaborador.celular }}</p>
              </button>
              <div></div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <DetailsCollaborators v-if="isOpen === true" :collaborator="collaboratorSelected" @close="closeDetails" />
  </div>


</template>

<style scoped>
.containerTabelaTitulo {
  @apply flex w-11/12 rounded-table-header justify-around text-center bg-light-blue py-2 relative -top-5 z-0 text-white shadow-header;
}



.borda-inferior {
  border-bottom: 2px solid #d9d9d9;
}



select {
  border: none !important;
}
</style>