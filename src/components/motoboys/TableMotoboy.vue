<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEllipsisVertical, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import FiltersComponent from '../deliveries/FiltersComponent.vue'
import DetailsMotoboy from './DetailsMotoboy.vue'
import axios from 'axios'
export default {
  name: 'TableMotoboy',
  components: {
    FontAwesomeIcon,
    FiltersComponent,
    faChevronDown,
    DetailsMotoboy
  },
  data() {
    return {
      faChevronDown,
      label: "Selecione ",
      faEllipsisVertical,
      options: [10, 15, 20],
      selectedRows: 5,
      isOpen: false,
      motoboySelected: {},
      currentPage: 1,
      url: `${this.$store.state.BASE_URL}/motoboys/find-all`
    }
  },

  props: {
    motoboys: {
      type: Array,
      required: true
    }
  },

  methods: {
    formatCpf(cpf) {
      return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    },
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
    },

    openDetails(motoboy) {
      this.motoboySelected = motoboy
      this.isOpen = true
    },
    closeDetails() {
      this.motoboySelected = {}
      this.isOpen = false
    },
    async fetchDeliveries(page) {
      const url = `${this.url}?page=${page}&perPage=${this.selectedRows}`;
      try {
        const response = await axios.get(url, {
          headers: {
            'Authorization': `${localStorage.getItem('authToken')}`
          }
        });
        this.$emit('update:motoboy', response.data);
      } catch (error) {
        console.error("Error fetching deliveries:", error);
      }
    },
    async goToNextPage() {
      this.currentPage++;
      await this.fetchDeliveries(this.currentPage);
    },
    async goToPrevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        await this.fetchDeliveries(this.currentPage);
      }
    }
  }
}
</script>

<template>
  <div class="w-11/12 2xl:top-16 relative top-15">
    <div class="shadow-header bg-white">
      <div class="flex h-2/3 items-center justify-center">
        <header class="containerTabelaTitulo">
          <h3 class="text-center w-full text-base 2xl:text-xl">Nome</h3>
          <h3 class="text-center w-full text-base 2xl:text-xl">CPF</h3>
          <h3 class="text-center w-full text-base 2xl:text-xl">Celular</h3>
          <h3 class="text-center w-full text-base 2xl:text-xl">Media Entregas</h3>
        </header>
      </div>
      <div>
      </div>
      <div class="2xl:max-h-300 max-h-lg-300 overflow-y-auto pb-6">
        <div class="flex justify-center flex-col items-center ">
          <div class="w-full px-9" v-for="motoboy in motoboys.motoboys" :key="motoboy.id">
            <div class="flex items-center borda-inferior">
              <button @click.prevent="openDetails(motoboy)"
                class="flex justify-around items-center py-2 text-cinza font-semibold w-full bg-white hover:font-bold hover:bg-cinza-tabela">
                <p class="w-full text-center text-sm 2xl:text-lg">{{ motoboy.usuario.nome }}</p>
                <p class="w-full text-center text-sm 2xl:text-lg">{{ formatCpf(motoboy.usuario.cpf) }}</p>
                <p class="w-full text-center text-sm 2xl:text-lg">{{ motoboy.usuario.celular }}</p>
                <p class="w-full text-center text-sm 2xl:text-lg">R$ 0</p>
              </button>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between py-8 px-8">
        <button @click="goToPrevPage" :disabled="currentPage === 1" class="btn-pagination">Anterior</button>
        <span>Página {{ currentPage }}</span>
        <button @click="goToNextPage" class="btn-pagination">Próxima</button>
      </div>
    </div>
    <DetailsMotoboy v-if="isOpen" :motoboy="motoboySelected.usuario" :motoboy-id="motoboySelected.id"
      @close="closeDetails" @atualizarTabela="atualizarTabela" />
  </div>
</template>

<style scoped>
.containerTabelaTitulo {
  @apply flex w-11/12 rounded-table-header justify-around text-center bg-light-blue py-2 relative -top-5 z-0 text-white shadow-header;
}

.borda-inferior {
  border-bottom: 2px solid #d9d9d9;
}
.btn-pagination {
  @apply bg-background-dark-blue hover:bg-light-blue text-white font-bold py-2 px-4 rounded-7;
  disabled: opacity-50;
}
select {
  border: none !important;
}
</style>
