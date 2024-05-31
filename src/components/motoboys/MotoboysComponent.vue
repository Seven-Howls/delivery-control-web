<script>
import NewMotoboyModal from './NewMotoboyModal.vue';
import TableMotoboy from './TableMotoboy.vue';
import axios from 'axios';
export default {
  name: 'MotoboysComponent',
  components: {
    NewMotoboyModal,
    TableMotoboy
  },

  data() {
    return {
      isOpen: false,
      motoboysList: [],
    }
  },

  methods: {
    toggleNewMotoboy() {
      this.isOpen = !this.isOpen
    },
    async getListMotoboys() {
      try {
        const response = await axios.get(`${this.$store.state.BASE_URL}/motoboys/find-all`, {
          headers: {
            'Authorization': `${localStorage.getItem('authToken')}`
          }
        })
        this.motoboysList = response.data
        console.log(response.data);
      } catch(err) {
        console.log(err);
      }
    }
  }
}

</script>

<template>
  <div class="w-full">
    <header class="px-16 py-10 w-full flex justify-between">
      <h1 class="text-3xl font-bold text-background-dark-blue ">Motoboys</h1>
      <button @click.prevent="toggleNewMotoboy" class="flex w-42 px-4 py-1 items-center gap-2 justify-center bg-background-dark-blue text-white rounded-7 hover:bg-light-blue">
        <i class="fa-solid fa-circle-plus text-white"></i>
        <span>Add Motoboys</span>
      </button>
    </header>
    <TableMotoboy :motoboys="motoboysList"/>

    <NewMotoboyModal class="" v-if="isOpen === true" @close="toggleNewMotoboy"></NewMotoboyModal>
  </div>
</template>

<style scoped>
</style>