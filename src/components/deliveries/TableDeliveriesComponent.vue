<script>

export default {
  name: 'TableDeliveriesComponent',
  data() {
    return {

    }
  },
  props: {
    deliveries: {
      type: Array,
      required: true
    }
  },

  methods: {
    
  }


}
</script>

<template>
  <div class="mt-12">
    <header
      class="containerTabelaTitulo">
      <h3 class="text-center w-full text-xl">Entrega</h3>
      <h3 class="text-center w-full text-xl">Entregador</h3>
      <h3 class="text-center w-full text-xl">Data</h3>
      <h3 class="text-center w-full text-xl">Valor</h3>
      <h3 class="text-center w-full text-xl">Status</h3>
    </header>
    <details class="question py-4" v-for="delivery in deliveries" :key="delivery.id">
      <summary class="flex items-center">
        <div class="flex justify-around w-full bg-cinza py-2 ml-auto">
          <p class="w-full">#001</p>
          <p class="w-full">Tinkercard</p>
          <p class="w-full">01/01/0101</p>
          <p class="w-full">R$ 99,99</p>
          <p class="w-full">Pendente</p>
        </div>
      </summary>
      <div class="mt-4 leading-normal text-md ">I lived near lake Eerie and I really miss sunsets over the water. Fuga
        perspiciatis quidem sunt animi. We can all grab at the chance to be handsome farmers. YEAH you can have 21 sons
        that'll be blood when they marry my daughters. And the pain that we left at the station will stay in a jar
        behind us. We can pickle the pain into blue ribbon winners at county contests....
        Gosh. I loved her to bits</div>
    </details>


  </div>
</template>

<style scoped>

.containerTabelaTitulo {
  @apply flex w-full justify-around divide-x-2 text-center bg-light-blue  py-2 text-white divide-white 
}

</style>