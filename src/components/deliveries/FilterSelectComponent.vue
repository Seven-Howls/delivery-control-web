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
    <div class="flex flex-col">
        <Label>{{ label }}</Label>
        <select
        class=" ">
        <option selected>Selecione um filtro</option>
        <option value="asc">Crescente</option>
        <option value="desc">Decrescente</option>
    </select>
</div>
</template>


<style scoped>
.select-style{
    
}
</style>