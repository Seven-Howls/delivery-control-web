componente table

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
export default {
  name: 'TableComponent',
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
    headers: {
      // objeto com o cabeçalho da tabela
      type: Object,
      required: true
    },
    itens: {
      // array com os objetos a serem iterados na tabela
      type: Array,
      required: true
    },
    actions: {
      // objeto com o titulo da ação e o nome da função a ser chamada
      type: Object,
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
      <!-- cabecalho da tabela -->
      <div class="flex h-2/3 items-center justify-center">
        <header class="containerTabelaTitulo ">
          <h3 class="text-center w-full text-base 2xl:text-xl" v-for="header in headers" :key="header.title">
            {{ header.title }}
          </h3>
        </header>
      </div>

      <!-- iteração dos itens da tabela -->
      <div class="2xl:max-h-300 max-h-lg-300 overflow-y-auto">

        <div class="flex justify-center flex-col items-center ">
          <div class="  w-full px-9 " v-for="item in items" :key="item.id">
            <div class="flex items-center borda-inferior my-2">
              <div class="flex  justify-around items-center text-cinza font-semibold w-full bg-white">
                <p class="w-full  text-center text-sm 2xl:text-lg">#{{ item.campo1 }}</p>
                <p class="w-full text-center text-sm 2xl:text-lg">{{ item.campo2 }}</p>
                <p class="w-full text-center text-sm 2xl:text-lg">{{ item.campo3 }}</p>
                <p class="w-full text-center text-sm 2xl:text-lg">R$ {{ item.campo4 }}</p>
                <p class="w-full text-center text-sm 2xl:text-lg">{{ item.campo5 }}</p>
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- paginação da tabela -->
      <div class="flex justify-center py-2">


        <div class="flex justify-between items-start w-11/12">
          <div class="relative">

            <button @click="toggleDropdown"
              class="bg-cinza-tabela bg-opacity-16 border-b border-gray-text text-gray-text px-2 py-1">
              {{ label }}
              <font-awesome-icon size="xs" :icon="faChevronDown" />
            </button>

            <div v-if="isOpen" class="absolute z-10 bg-white shadow-md  w-full rounded-lg">
              <div class=" shadow-header">
                <template v-for="n in options">
                  <a href="#" @click="selectOption(n)"
                    class="flex  items-center justify-center   border-gray-text    hover:bg-cinza-tabela">{{
                      n }}</a>
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
</template>F