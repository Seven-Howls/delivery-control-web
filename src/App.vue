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
  <div class="ml-[16%]">
    <router-view />
  </div>
</template>

<style>

</style>
