<script>
import ButtonLink from './ButtonLink.vue';

export default {
  name: 'SideBarComponente',
  components: {
    ButtonLink
  },
  data() {
    return {
      routes: [
        { 
          title_route: 'Dashboard',
          link: '/dashboard',
          icone: 'fa-solid fa-chart-line'
        },
        {
          title_route: 'Entregas',
          link: '/deliveries-history',
          icone: 'fa-solid fa-truck-ramp-box' 
        },
        {
          title_route: 'Entregadores',
          link: '/motoboys',
          icone: 'fa-solid fa-person-biking'
        },
        {
          title_route: 'Colaboradores',
          link: '/collaborators',
          icone: 'fa-solid fa-users'
        },
      ]
    }
  }
}
</script>
<template>

  <div class="container-logo">
    <img src="../../assets/logo.png" alt="logo" />
    <h1>Delivery Control</h1>
  </div>
  <div class="container-sidebar">
    <div class="container-nav">
      <div class="flex flex-col gap-8 w-full h-full items-end py-12">
        <ButtonLink :links="routes" />
      </div>
    </div>
  </div>

</template>

<style scoped>
.container-sidebar {
  @apply fixed left-0 top-24 bg-transparent flex flex-col w-[4%] hover:w-[16%] 
  h-full z-40 transition-all duration-500
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