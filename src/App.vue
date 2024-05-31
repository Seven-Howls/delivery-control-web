<script>
import SideBarComponent from './components/sidebar/SideBarComponent.vue'

export default {
  name: 'App',
  components: {
    SideBarComponent
  },
  data() {
    return {
      showSidebar: false 
    };
  },
  created() {
    if(localStorage.getItem('authToken') == '') {
      this.$router.push({ path: '/login' });
    } else {
      console.log('autenticado');
    }
  },
  watch: {
    '$route.path': {
      immediate: false, 
      handler(newPath) {
        this.showSidebar = !newPath.includes('/login'); 
      }
    }
  }
  

}
</script>

<template>
  <div>
    <SideBarComponent v-if="showSidebar" />
    <div :class="{ 'pl-52': showSidebar, 'pl-0': !showSidebar }">
      <router-view />
    </div>
  </div>
</template>

<style>

</style>
