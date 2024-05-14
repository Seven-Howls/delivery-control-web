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