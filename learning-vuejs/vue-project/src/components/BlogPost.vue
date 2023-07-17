<script setup>

    const props = defineProps(['title']);
    const emits = defineEmits(['enlarge-text']);
    console.log(props.title);
    console.log(emits('enlarge-text'));

</script>


<template>
    
    <h4>{{ props.title }}</h4>
    <button @click="$emit('enlarge-text')">Enlarge text</button>

</template>

<style scoped>

    .alert-box {
    /* ... */
    }
    
</style>
