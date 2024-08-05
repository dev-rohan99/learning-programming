<script setup>
import { ref } from 'vue';


const message = ref("You pressed ");
const space = ref(0);

const spacePressed = () => {
    space.value++;
    message.value = `Space pressed ${space.value} times!`;
}

const pressedWhat = (event) => {
    message.value = `You pressed ${event.key}`;
}

const buttonPressed = (event) => {
    message.value = `You clicked the button!`;
}

const ctrlRightClick = () => {
    message.value = `Ctrl + Right Clicked!`;
}

const divClicked = () => {
    alert("Div Clicked;");
}

const buttonClicked = () => {
    alert("Button Clicked;");
}

</script>

<template>
    
    <div class="my-5">
        <form action="https://www.google.com/search" class="max-w-sm mx-auto">
            <h2 class="text-center">{{ message }}</h2>
            <div class="mb-5">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input @keyup.space="spacePressed" type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
            </div>
            <div class="mb-5">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input @keyup="pressedWhat($event)" type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <button @click.prevent="buttonPressed()" type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

            <button @click.ctrl.right.prevent="ctrlRightClick()" type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-5">Ctrl + Right Click</button>
        </form>

        <div @click="divClicked()" class="mx-auto w-[500px] flex justify-center items-center py-10 bg-gray-300 rounded-xl mt-10">
            <button @click.stop="buttonClicked()" type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Alternative</button>
        </div>
    </div>

</template>

<style scoped>



</style>
