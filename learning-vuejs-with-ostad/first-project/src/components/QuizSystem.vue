<script setup>

import { reactive } from 'vue';

const countries = reactive([
    {
        "name": "Bangladesh",
        "capital": "Dhaka"
    },
    {
        "name": "India",
        "capital": "New Delhi"
    },
    {
        "name": "United States",
        "capital": "Washington, D.C."
    },
    {
        "name": "United Kingdom",
        "capital": "London"
    },
    {
        "name": "Canada",
        "capital": "Ottawa"
    },
    {
        "name": "Australia",
        "capital": "Canberra"
    },
    {
        "name": "Germany",
        "capital": "Berlin"
    },
    {
        "name": "France",
        "capital": "Paris"
    },
    {
        "name": "Japan",
        "capital": "Tokyo"
    },
    {
        "name": "Brazil",
        "capital": "Brasília"
    }
]);

const capitals = ["Dhaka", "New Delhi", "Washington, D.C.", "London", "Ottawa", "Canberra", "Berlin", "Paris", "Tokyo", "Brasília"];

const getScore = () => {
    let score = 0;
    countries.forEach(country => {
        if(country.answer === country.capital){
            score += 10;
        }
    });
    return score;
}

const getRandomCapitals = () => {
    // return capitals;
    return capitals.sort(() => Math.random() - 0.5);
}

</script>

<template>
    
    <div class="my-5">
        
        <h2 class="text-[45px] mb-5 text-center">Vue Quiz</h2>

        <h5 class="mb-10 text-[20px] text-center">Your score is <span class="p-1 px-3 bg-green-600 text-white rounded-lg ml-4"><span class="font-bold">{{ getScore() }}</span> out of 100</span></h5>

        <div v-for="(country, countryIndex) in countries" :key="countryIndex" class="mt-5">
            <div class="p-5 bg-gray-300 rounded-lg text-black border-3 border-[#ddd]">
                <h5 class="mb-5">What is the capital of {{ country.name }}?</h5>

                <div class="">
                    <label v-for="(item, index) in getRandomCapitals()" :key="index" class="mr-3 p-2 px-3 bg-gray-400 rounded-xl" :for="`quiz--${countryIndex}-${index}`"><input v-model="country.answer" :name="`quiz-${countryIndex}`" :id="`quiz--${countryIndex}-${index}`" type="radio" :value="item"> {{ item }}</label>
                </div>
            </div>
        </div>

    </div>

</template>

<style scoped>



</style>
