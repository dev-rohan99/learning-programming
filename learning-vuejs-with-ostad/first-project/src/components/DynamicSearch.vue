<script setup>

import { ref } from 'vue';
import { countries } from "../data/data";

const search = ref("");

const getFilteredCountries = () => {
    return countries.filter((country) => {
        return country.name.toLowerCase().startsWith(search.value.toLowerCase());
    })
}

</script>

<template>
    
    <div class="my-5">

        <div class="my-10 max-w-sm mx-auto">

            <div>
                <label for="sdsd" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Search Country</label>
                <input type="text" id="sdsd" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Country" v-model="search" />
            </div>

            <h3 class="text-center text-[16x] font-bold mt-5 mb-5">{{ search }}</h3>

            <hr class="mt-5 mb-5">

            <div class="">
                <ul class="list-none">
                    <li class="p-3 px-4 rounded-lg bg-gray-200 border-2 border-gray-400 mb-3" v-for="(country, key, index) in getFilteredCountries()" :key="index">{{ country.name }}</li>
                </ul>
            </div>

        </div>

    </div>

</template>

<style scoped>



</style>
