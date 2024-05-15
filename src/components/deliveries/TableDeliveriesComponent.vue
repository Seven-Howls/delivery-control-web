<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import FiltersComponent from './FiltersComponent.vue';

export default {
  name: 'TableDeliveriesComponent',
  components: {
    FontAwesomeIcon,
    FiltersComponent,
    faChevronDown,
  },
  data() {
    return {
      faChevronDown,
      label: "Selecione ",
      faEllipsisVertical,
      options: [10, 15, 20],
      selectedRows: 5,
      isOpen: false,

    }
  },
  props: {
    deliveries: {
      type: Array,
      required: true
    }
  },

  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        document.addEventListener('click', this.closeDropdownOnClickOutside);
      } else {
        document.removeEventListener('click', this.closeDropdownOnClickOutside);
      }
    },
    selectOption(option) {
      this.label = option + '  Linhas'
    },
    closeDropdownOnClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false;
        document.removeEventListener('click', this.closeDropdownOnClickOutside);
      }
    }
  }



}
</script>

<template>

  <div class="w-11/12 2xl:top-16 relative top-15">
    <div class="shadow-header   bg-white">
      <div class="flex h-2/3 items-center justify-center">
        <header class="containerTabelaTitulo ">
          <h3 class="text-center w-full text-base 2xl:text-xl">Entrega</h3>
          <h3 class="text-center w-full text-base 2xl:text-xl">Entregador</h3>
          <h3 class="text-center w-full text-base 2xl:text-xl">Data</h3>
          <h3 class="text-center w-full text-base 2xl:text-xl">Valor</h3>
          <h3 class="text-center w-full text-base 2xl:text-xl">Status</h3>
        </header>
      </div>
      <div>

      </div>
      <div class="2xl:max-h-300 max-h-lg-300 overflow-y-auto">

        <div class="flex justify-center flex-col items-center ">
          <div class="  w-full px-9 " v-for="delivery in deliveries" :key="delivery.id">
            <div class="flex items-center borda-inferior my-2">
              <div class="flex  justify-around items-center text-cinza font-semibold w-full bg-white">
                <p class="w-full  text-center text-sm 2xl:text-lg">#{{ delivery.id }}</p>
                <p class="w-full text-center text-sm 2xl:text-lg">{{ delivery.name }}</p>
                <p class="w-full text-center text-sm 2xl:text-lg">{{ delivery.date }}</p>
                <p class="w-full text-center text-sm 2xl:text-lg">R$ {{ delivery.value }}</p>
                <p class="w-full text-center text-sm 2xl:text-lg">{{ delivery.status }}</p>
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="flex justify-center py-2">


        <div class="flex justify-between items-start w-11/12">
          <div class="relative">

            <button @click="toggleDropdown"
                    class="bg-cinza-tabela bg-opacity-16 border-b border-gray-text text-gray-text px-2 py-1">
             {{ label }}
             <font-awesome-icon size="xs" :icon="faChevronDown"/>
            </button>

            <div v-if="isOpen" 
                 class="absolute z-10 bg-white shadow-md  w-full rounded-lg">
              <div class=" shadow-header">
                <template v-for="n in options">
                  <a href="#" @click="selectOption(n)" class="flex  items-center justify-center   border-gray-text    hover:bg-cinza-tabela">{{ n }}</a>
                </template>
              </div>
            </div>
          </div>
          <div class="">
            
          </div>



        </div>
      </div>
    </div>
  </div>


</template>

<style scoped>
.containerTabelaTitulo {
  @apply flex w-11/12 rounded-table-header justify-around text-center bg-light-blue py-2 relative -top-5 z-[1] text-white shadow-header;
}



.borda-inferior {
  border-bottom: 2px solid #d9d9d9;
}



select {
  border: none !important;
}
</style>