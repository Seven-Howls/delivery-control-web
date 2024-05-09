<script>

export default {
  name: 'TableDeliveriesComponent',
  data() {
    return {
      options: [5, 10, 15, 20],
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
  <div class="mt-12 relative">
    <div class="flex justify-center">
      <header class="containerTabelaTitulo borderradius absolute w-11/12">
        <h3 class="text-center w-full text-xl">Entrega</h3>
        <h3 class="text-center w-full text-xl">Entregador</h3>
        <h3 class="text-center w-full text-xl">Data</h3>
        <h3 class="text-center w-full text-xl">Valor</h3>
        <h3 class="text-center w-full text-xl">Status</h3>
      </header>
    </div>
    <div class="shadow-md py-4 bg-white relative">
      <div class="flex justify-center flex-col items-center">
        <details class="question py-4   w-11/12 " v-for="delivery in deliveries" :key="delivery.id">
          <summary class="flex items-center borda-inferior ">
            <div class="flex justify-around items-center text-cinza font-semibold   w-full bg-white  ">
              <p class="w-full text-center text-xl">#001</p>
              <p class="w-full text-center text-xl">ThenMarques Silva </p>
              <p class="w-full text-center text-xl">01/01/0101</p>
              <p class="w-full text-center text-xl">R$ 99,99</p>
              <p class="w-full text-center text-xl">Pendente</p>
            </div>
          </summary>
          <div class="mt-4 leading-normal text-md ">
            I lived near lake Eerie and I really miss sunsets over the water. Fuga perspiciatis quidem sunt animi. We can
            all grab at the chance to be handsome farmers. YEAH you can have 21 sons that'll be blood when they marry my
            daughters. And the pain that we left at the station will stay in a jar behind us. We can pickle the pain into
            blue ribbon winners at county contests.... Gosh. I loved her to bits
          </div>
        </details>
      </div>
      <div class="flex justify-center">
        <div class="flex justify-between items-start w-11/12">
          <div class=" ">
            <select v-model="selectedRows" id="rows">
                  <option v-for="n in options" :value="n">{{ n }}</option>
                </select>
            <label for="rows">Linhas</label>
          </div>
          <div class="">
          
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.containerTabelaTitulo {
  @apply flex w-11/12 boxshadow  justify-around text-center bg-light-blue py-2 text-white borderradius;
}
.boxshadow{
  box-shadow: 0px 1px 14px 2px rgb(0 0 0 / 25%);
}
.borderradius {
  border-radius: 7px;
}

.borda-inferior {
  border-bottom: 2px solid #d9d9d9;
}

.absolute {
  position: absolute;
  top: -25px; 
  z-index: 1; 
}
</style>