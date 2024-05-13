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
  <SideBarComponent class="overflow-y-hidden"/>
  <div class=" overflow-y-hidden">
    <router-view />
  </div>
</template>

<style>

</style>
