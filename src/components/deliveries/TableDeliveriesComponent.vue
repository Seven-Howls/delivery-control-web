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
  <div class="mt-12 ">
    <div class="flex justify-center">
        <header
          class="containerTabelaTitulo borderradius">
          <h3 class="text-center w-full text-xl">Entrega</h3>
          <h3 class="text-center w-full text-xl">Entregador</h3>
          <h3 class="text-center w-full text-xl">Data</h3>
          <h3 class="text-center w-full text-xl">Valor</h3>
          <h3 class="text-center w-full text-xl">Status</h3>
        </header>
    </div>
    <div class="shadow-md">
    <details class="question py-4" v-for="delivery in deliveries" :key="delivery.id">
      <summary class="flex items-center">
        <div class="flex justify-around items-center  w-full bg-white py-2 ">
          <p class="w-full text-center">#001</p>
          <p class="w-full text-center">Tinkercard</p>
          <p class="w-full text-center">01/01/0101</p>
          <p class="w-full text-center">R$ 99,99</p>
          <p class="w-full text-center">Pendente</p>
        </div>
      </summary>
      <div class="mt-4 leading-normal text-md ">I lived near lake Eerie and I really miss sunsets over the water. Fuga
        perspiciatis quidem sunt animi. We can all grab at the chance to be handsome farmers. YEAH you can have 21 sons
        that'll be blood when they marry my daughters. And the pain that we left at the station will stay in a jar
        behind us. We can pickle the pain into blue ribbon winners at county contests....
        Gosh. I loved her to bits</div>
      </details>
      
    </div>

  </div>
</template>

<style scoped>

.containerTabelaTitulo {
  @apply flex w-11/12 drop-shadow-md justify-around  text-center bg-light-blue  py-2 text-white  borderradius
}
.borderradius{
  border-radius: 7px;
}

</style>