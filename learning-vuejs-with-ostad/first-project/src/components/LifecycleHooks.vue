<script setup>

import { onBeforeMount, onMounted, onUpdated, ref } from 'vue';

const status = ref([]);
const apiResponse = ref(null);
const message = ref("Helo world!");

onBeforeMount(() => {
    console.log("Before mount!");
    status.value.push("Before mount!");

    fetch("https://jsonplaceholder.typicode.com/todos/1").then(response => 
        response.json()
    ).then((json) => {
        apiResponse.value = json;
    });
});

onMounted(() => {
    console.log("Mounted");
    status.value.push("Mounted");
});

onUpdated(() => {
    message
});

</script>

<template>
    
    <div class="">
        <h1>{{ status }}</h1>
        <h2>{{ apiResponse }}</h2>
        <h2>{{ message }}</h2>
        <button @click="message = 'Hello from vue!'">Update Message</button>
    </div>

</template>

<style scoped>



</style>
