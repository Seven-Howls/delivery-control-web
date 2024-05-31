<script>
import axios from 'axios';
import CollaboratorsTable from './CollaboratorsTable.vue';

export default {
  name: 'CollaboratorsComponent',
  components: {
    CollaboratorsTable
  },

  data() {
    return {
      collaboratorsList: [],
    }
  },

  methods: {
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

  <div class="h-screen">
    <div class="text-3xl font-bold text-background-dark-blue pt-10">
      <h1>Colaboradores</h1>
    </div>
    <CollaboratorsTable :collaborators="collaboratorsList"/>
  </div>


</template>