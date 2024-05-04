<script>

export default {
  name: 'ButtonAdd',

  data() {
    return {

    }
  },

  props: {
    title_button:{
      type: String,
      required: true
    }
  }
}

</script>

<template>

  <div class="container-btn">
    <i class="fa-solid fa-circle-plus"></i>
    <h2>{{ title_button }}</h2>
  </div>

</template>

<style scoped>

.container-btn {
  @apply px-4 py-3 bg-white text-text-dark w-[70%] flex items-center gap-8 rounded-full
}
</style>