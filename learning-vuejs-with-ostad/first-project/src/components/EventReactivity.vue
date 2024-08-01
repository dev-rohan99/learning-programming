<script setup>

import { ref } from 'vue';
const location = ref("Dhaka");

const changeLocation = (locationName) => {
    location.value = locationName
    // alert(`Location is ${location}!`);
}

</script>

<template>
    
    <div class="">

        <button @click="changeLocation('Dhaka')" type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Dhaka</button>

        <button @click="changeLocation('Rajshahi')" type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Rajshahi</button>
        <h3>Your current location is {{ location }}</h3>
    </div>

</template>

<style scoped>



</style>
