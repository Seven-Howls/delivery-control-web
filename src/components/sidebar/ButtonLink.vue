<script>
export default {
  name: 'ButtonLink',
  props: {
    links: {
      type: Array,
      required: true
    }
  },
  computed: {
    currentRoute() {
      console.log(this.$route.path);
      return this.$route.path;
    }
  }
}
</script>

<template>
  <div v-for="link in links" :key="link.title_route" class="">
    <router-link 
      :to="link.link" 
      :class="{
        'flex w-64 justify-between items-center text-white py-2 px-6 text-2xl rounded-l-full': true,
        'bg-custom-gradient border-b border-cinza-tabela': currentRoute === link.link,
        'bg-transparent': currentRoute !== link.link
      }"
    >
      {{ link.title_route }}
      <i :class="link.icone"></i>
    </router-link>
  </div>
</template>

<style scoped>
</style>
