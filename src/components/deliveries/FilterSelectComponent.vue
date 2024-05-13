<script>
export default {
    name: 'FilterSelectComponent',
    props: {
        label: String 
    },
    data() {
        return {
          
        }
    },
    methods: {
       
    }
}
</script>
<template>
    <div>
        <Label>{{ label }}</Label>
        <select
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>Selecione um filtro</option>
        <option value="asc">Crescente</option>
        <option value="desc">Decrescente</option>
    </select>
</div>
</template>


<style scoped>
</style>