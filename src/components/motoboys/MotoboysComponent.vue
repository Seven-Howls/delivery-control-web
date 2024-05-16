<script>
import NewMotoboyModal from './NewMotoboyModal.vue';
export default {
  name: 'MotoboysComponent',
  components: {
    NewMotoboyModal,
  },

  data() {
    return {
      isOpen: false,
    }
  },

  methods: {
    toggleNewMotoboy() {
      this.isOpen = !this.isOpen
      console.log('aqui');
    }
  }
}

</script>

<template>
  <div class="w-full">
    <header class="px-16 py-10 w-full flex justify-between">
      <h1 class="text-3xl font-bold text-background-dark-blue ">Motoboys</h1>
      <button @click.prevent="toggleNewMotoboy" class="flex w-42 px-4 py-1 itens-center justify-center bg-background-dark-blue">
        <i class="fa-solid fa-circle-plus text-white"></i>
        <span>Add Motoboys</span>
      </button>
    </header>

    <NewMotoboyModal class="" v-if="isOpen === true" @close="toggleNewMotoboy"></NewMotoboyModal>
  </div>
</template>

<style scoped>
</style>