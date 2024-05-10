<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleXmark} from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass ,faFilter} from '@fortawesome/free-solid-svg-icons'
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
      <div class=" flex flex-row borda-inferior p-2 bg-cinza-tabela border-input bg-opacity-16">
      <input type="text" label="pesquisar" class="bg-opacity-0 bg-transparent" >
      <button><font-awesome-icon  class="text-search-gray ":icon="faMagnifyingGlass" size="lg"/> </button>
    </div>
    <div>
      <button><font-awesome-icon  class="text-filter-blue border-radius p-3 bg-cinza-tabela bg-opacity-16 ":icon="faFilter" size="lg" /></button>
    </div>
    
  </div>
</div>
<div>
  <button class=" bg-background-dark-blue hover:bg-light-blue text-white font-bold py-2 px-11 border-radius inline-flex items-center">
    <span><font-awesome-icon class="rotate-45 " :icon="faCircleXmark" /></span> 
    <label  class=" pl-2">Cadastrar </label>
  </button>
</div>
</div>

</template>
<style scoped>
.border-radius{
  border-radius:7px;
}
.border-input{
  border-radius: 10px 10px 0px 0px;
}
.borda-inferior {
  border-bottom: 2px solid #043864;
}
</style>
