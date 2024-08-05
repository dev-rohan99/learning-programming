<script setup>
import { reactive, ref } from 'vue';

const user = reactive({
    name: "Rohan Mostofa Abir",
    age: 22,
    position: "Full Stack Web Developer"
});

const persions = reactive([
    {
        name: "Rohan Mostofa Abir",
        age: 22,
        email: "devrohan599@gmail.com"
    },
    {
        name: "Sheikh Mohammad Abdullah",
        age: 23,
        email: "smabdullah@gmail.com"
    },
    {
        name: "Mamunul Islam",
        age: 26,
        email: "mamunulislam@gmail.com"
    },
]);

const displayImage = ref(false);
const favColor = ref([]);
const color = ref("#564526");
const activeIndex = ref(0);

const getStyle = () => {
    return {
        backgroundColor: color.value
    }
}

</script>

<template>
    
    <div class="my-5">
        
        <form action="https://www.google.com/search" class="max-w-sm mx-auto">
            <h2 class="text-center">{{ color }}</h2>
            <div class="h-[100px] w-[100px] mt-4 rounded-xl mx-auto" :style="getStyle()"></div>
            <div class="mb-5">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input v-model="color" type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
            </div>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>

        <div class="my-10 max-w-sm mx-auto">
            <p>{{ user }}</p>

            <div class="mb-5" v-for="(value, key, index) in user" :key="key">
                <label :for="index" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ key }}</label>
                <input type="text" :id="index" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required v-model="user[key]" />
            </div>

        </div>


        <div class="my-10 max-w-sm mx-auto">

            <h3 class="text-center mb-4">{{ displayImage }}</h3>

            <label class="mb-4" for="checkBox"><input id="checkBox" type="checkbox"> Display random image</label>

            <img v-show="displayImage" :src="`https://source.unsplash.com/random?version=${Math.random()}`" alt="">

        </div>

        <div class="my-10 max-w-sm mx-auto">

            <h3 class="text-center mb-4">{{ favColor }}</h3>
            <label for="red"><input id="red" type="checkbox" value="red" v-model="favColor"> Red</label>
            <label class="ml-4" for="blue"><input id="blue" type="checkbox" value="blue" v-model="favColor"> Blue</label>

        </div>

        <div class="my-10 max-w-sm mx-auto">

            <h2>Select A Persion</h2>
            <p class="mt-5 mb-5">{{ activeIndex }}</p>

            <select id="person" v-model="activeIndex" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Select a person</option>
                <option v-for="(persion, index) in persions" :key="index" :value="index" v>{{ persion.name }}</option>
            </select>

            <hr class="mt-5 mb-5">

            <div class="">
                <div v-for="(value, key, index) in persions[activeIndex]" :key="index">
                    <label :for="`sdsd${index}`" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ value[key] }}</label>
                    <input type="text" :id="`sdsd${index}`" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="key" v-model="persions[activeIndex][key]" :value="value" required />
                </div>
            </div>

        </div>

    </div>

</template>

<style scoped>



</style>
