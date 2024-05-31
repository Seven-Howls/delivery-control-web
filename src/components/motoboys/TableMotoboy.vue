<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import FiltersComponent from '../deliveries/FiltersComponent.vue'
export default {
  name: 'TableMotoboy',
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

      motoboys_: {
        0: {
          nome: 'Joao',
          cpf: '097.032.016-13',
          celular: '(32) 99816-2682',
          media_entrega: 26
        },
        1: {
          nome: 'Pedro',
          cpf: '970.302.610-31',
          celular: '(32) 99816-9999',
          media_entrega: 30
        },
        2: {
          nome: 'Luiz',
          cpf: '999.999.999-99',
          celular: '(32) 99899-9999',
          media_entrega: 99
        },
      }
    }
  },

  props: {
    motoboys: {
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
          <h3 class="text-center w-full text-base 2xl:text-xl">Nome</h3>
          <h3 class="text-center w-full text-base 2xl:text-xl">CPF</h3>
          <h3 class="text-center w-full text-base 2xl:text-xl">Celular</h3>
          <h3 class="text-center w-full text-base 2xl:text-xl">Media Entregas</h3>
        </header>
      </div>
      <div>

      </div>
      <div class="2xl:max-h-300 max-h-lg-300 overflow-y-auto">

        <div class="flex justify-center flex-col items-center ">
          <div class="  w-full px-9 " v-for="motoboy in motoboys" :key="motoboy.id">
            <div class="flex items-center borda-inferior my-2">
              <div class="flex  justify-around items-center text-cinza font-semibold w-full bg-white">
                <p class="w-full  text-center text-sm 2xl:text-lg">#{{ motoboy.nome }}</p>
                <p class="w-full text-center text-sm 2xl:text-lg">{{ motoboy.cpf }}</p>
                <p class="w-full text-center text-sm 2xl:text-lg">{{ motoboy.celular }}</p>
                <p class="w-full text-center text-sm 2xl:text-lg">R$ 0 </p>
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="flex justify-center py-2">


        
      </div>
    </div>
  </div>


</template>

<style scoped>
.containerTabelaTitulo {
  @apply flex w-11/12 rounded-table-header justify-around text-center bg-light-blue py-2 relative -top-5 z-0 text-white shadow-header;
}



.borda-inferior {
  border-bottom: 2px solid #d9d9d9;
}



select {
  border: none !important;
}
</style>