<script>

export default {
  name: 'FiltersComponent',
  data() {
    return {

    }
  },
  methods: {
    
  }
}
</script>

<template>

  <div class="flex w-full gap-16">
    <div class="flex gap-2 w-44">
      <label class="text-xl font-semibold text-cinza">Status</label>
      <select>
        <option>Pendente</option>
        <option>Entregue</option>
      </select>
    </div>
    <div class="flex gap-2 w-44">
      <label class="text-xl font-semibold text-cinza">Data</label>
      <input type="date"/>
    </div>
  </div>

</template>