<script>
import SideBarComponent from './components/sidebar/SideBarComponent.vue'

export default {
  name: 'App',
  components: {
    SideBarComponent
  },
  data() {
    return {
      
    }
  },

}
</script>

<template>
  <SideBarComponent/>
  <div class="px-24">
    <router-view />
  </div>
</template>

<style>

</style>
