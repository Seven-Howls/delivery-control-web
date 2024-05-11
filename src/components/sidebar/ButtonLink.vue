<script>

export default {
  name: 'ButtonLink',

  data() {
    return {

    }
  },

  props: {
    links: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  
  <div v-for="link in links" :key="link.title_route" class=" w-11/12">
    <router-link :to="link.link" class="flex gap-4 text-white py-2 px-6 text-2xl rounded-l-full bg-light-blue">
      <i :class="link.icone " ></i>
      {{ link.title_route }}
    </router-link>
  </div>


</template>

<style scoped>

</style>