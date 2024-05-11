<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass, faFilter } from '@fortawesome/free-solid-svg-icons'
export default {
  name: 'FiltersComponent',
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      faCircleXmark,
      faMagnifyingGlass,
      faFilter,
      
    }
  },
  methods: {

  }
}
</script>

<template>

  <div class="flex flex-row    w-full">
    <div class="flex flex-row w-11/12 ">
      <div class="flex  gap-2 w-44">
        <div class=" input-search ">
          <input type="text" label="pesquisar" class="bg-opacity-0 bg-transparent focus:outline-none">
          <button><font-awesome-icon class="text-search-gray  hover:text-light-blue " :icon="faMagnifyingGlass"
              size="xl" /> </button>
        </div>
        <div>
          <button><font-awesome-icon class=" btn-filter" :icon="faFilter" size="lg" /></button>
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
</style>
