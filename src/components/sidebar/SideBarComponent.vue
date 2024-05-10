<script>
import ButtonAdd from './ButtonAdd.vue';
import ButtonLink from './ButtonLink.vue';
export default {
  name: 'SideBarComponente',
  components: {
    ButtonAdd,
    ButtonLink
  },
  data() {
    return {
      routes: [
        { title_route: 'Dashboard', link: 'dashboard', icone: 'fa-light fa-table-columns' },
        { title_route: 'Entregas', link: 'deliveries-history', icone: 'fa-light fa-cart-plus' },
        { title_route: 'Entregadores', link: 'entregadores', icone: 'fa-light fa-motorcycle' },
      ]
    }
  }
}
</script>
<template>

  <div class="container-sidebar">
    <div class="container-logo">
      <img src="../../assets/logo.png" alt="logo" />
      <h1>Delivery Control</h1>
    </div>
    <div class="container-nav">
      
      <div class="flex flex-col gap-8 w-full h-full items-end py-12">
        <ButtonLink :links="routes"/>
      </div>
    </div> 
    <div class="w-ful">
      <button class="">Logout</button>
    </div>
  </div>

</template>

<style scoped>
.container-sidebar {
  @apply fixed left-0 top-0 bg-transparent flex flex-col w-[16%] h-full
}

.container-logo {
  @apply flex items-center px-4 py-3 gap-4
}

.container-logo img {
  @apply w-16
}

.container-logo h1 {
  @apply text-xl text-text-dark font-bold
}

.container-nav {
  @apply bg-background-dark-blue w-[100%] h-[100%] rounded-tr-sidebar py-20
}
</style>