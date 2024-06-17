<script>
import axios from 'axios';
import CollaboratorsTable from './CollaboratorsTable.vue';
import NewCollaborators from './NewCollaborators.vue'
export default {
  name: 'CollaboratorsComponent',
  components: {
    CollaboratorsTable,
    NewCollaborators
  },

  data() {
    return {
      collaboratorsList: [],
      isOpen: false
    }
  },

  mounted() {
    this.getCollaborators() 
  },

  methods: {
    toggleModal() {
      this.isOpen = !this.isOpen
    },
    async getCollaborators() {
      try {
        const response = await axios.get(`${this.$store.state.BASE_URL}/collaborator/findall`, {
          headers: {
            'Authorization': `${localStorage.getItem('authToken')}`
          }
        })
        this.collaboratorsList = response.data
        console.log(this.collaboratorsList);
      } catch(err) {
        console.log(err);
      }
    }
  }
}

</script>

<template>

  <div class="">
    <div class=" flex w-full justify-between  pt-10 pr-16">
      <h1 class="text-3xl font-bold text-background-dark-blue">Colaboradores</h1>
      <button @click.prevent="toggleModal" class=" w-42   bg-background-dark-blue hover:bg-light-blue text-white font-bold py-2 px-9 rounded-7 inline-flex items-center">
        <i class="fa-regular fa-circle-xmark rotate-45  text-white"></i>
        <span class="ml-2">Adiconar Colaborador</span>
      </button>
    </div>
    <CollaboratorsTable :collaborators="collaboratorsList"/>
    <NewCollaborators v-if="isOpen === true" @close="toggleModal"/>
  </div>


</template>