<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass, faFilter } from '@fortawesome/free-solid-svg-icons'
import FilterSelectComponent from './FilterSelectComponent.vue';

export default {
  
  components: {
    FontAwesomeIcon,
    FilterSelectComponent,

  },
  data() {
    return {
      faCircleXmark,
      faMagnifyingGlass,
      faFilter,
      filterShow: false,
    }
  },
  methods: {
    toggleFilterPanel() {
      this.filterShow = !this.filterShow;
    },
    applyFilters(filterText) {
      this.$emit('applyFilters', filterText); 
      console.log(filterText)
    }
  }
}
</script>

<template>

  <div class="flex flex-row   w-11/12 h-10 relative top-7 ">
    <div class="flex flex-row w-11/12 ">
      <div class="flex  gap-2 w-44">
        <div class=" input-search ">
          <input type="text" label="pesquisar" class="bg-opacity-0 bg-transparent focus:outline-none" @input="applyFilters($event.target.value)">
          <button><font-awesome-icon class="text-search-gray  hover:text-light-blue " :icon="faMagnifyingGlass"
              size="xl" /> </button>
              
        </div>
        
        <div>
          <button @click="toggleFilterPanel"><font-awesome-icon class=" btn-filter" :icon="faFilter"
              size="lg" /></button>
        </div>
        <div>
          <button class="btn-clear-filter h-full w-40">
        <span><font-awesome-icon class="rotate-45 " :icon="faCircleXmark" /></span>
        <label class=" ">Limpar</label>
      </button>
        </div>
      </div>
    </div>
    <div>
      <button class="btn-create">
        <span><font-awesome-icon class="rotate-45 " :icon="faCircleXmark" /></span>
        <label class=" pl-2">Cadastrar </label>
      </button>

    </div>

  </div>
 
  
</template>
<style scoped>
.input-search {
  @apply flex flex-row borda-inferior p-2 bg-cinza-tabela rounded-search-input bg-opacity-16
}

.btn-create {
  @apply bg-background-dark-blue hover:bg-light-blue text-white font-bold py-2 px-11 rounded-7 inline-flex items-center
}

.btn-filter {
  @apply text-filter-blue hover:text-light-blue rounded-7 p-3 bg-cinza-tabela bg-opacity-16
}

.borda-inferior {
  border-bottom: 2px solid #043864;
}

.btn-clear-filter {
  @apply bg-error hover:bg-light-blue text-white font-bold   rounded-7 flex justify-center items-center
}

</style>
