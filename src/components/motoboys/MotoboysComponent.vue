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

  mounted() {
    this.getListMotoboys()
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
    },

  }
}

</script>

<template>
  <div class="w-full">
    <header class="pr-16 py-10 w-full flex justify-between">
      <h1 class="text-3xl font-bold text-background-dark-blue ">Motoboys</h1>
      <button @click.prevent="toggleNewMotoboy" class=" w-42   bg-background-dark-blue hover:bg-light-blue text-white font-bold py-2 px-9 rounded-7 inline-flex items-center">
        <i class="fa-regular fa-circle-xmark rotate-45  text-white"></i>
        <span class="ml-2">Adiconar Motoboy</span>
      </button>
    </header>
    <TableMotoboy :motoboys="motoboysList"/>

    <NewMotoboyModal class="" v-if="isOpen === true" @close="toggleNewMotoboy"></NewMotoboyModal>
  </div>
</template>

<style scoped>
</style>