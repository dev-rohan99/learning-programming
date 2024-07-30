<script setup>

import { blogs, data } from '../data/data';
const message = "Hello World!";
const date = new Date()
date.toString();
const htmlDate = `<strong>${date}</strong>`;

const blogs2 = {
  src: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  title: "Noteworthy technology acquisitions 2021",
  alt: "Noteworthy technology acquisitions 2021",
  description: "Here are the biggest enterprise technology."
}

</script>

<template>

  <div class="w-[1200px] mx-auto">

    <div class="mb-5 ">
      <h1>{{data.message}}</h1>
      <h4 v-html="htmlDate"></h4>
      <h4>Task for today {{data.task.length}}</h4>
    </div>

    <div class="flex justify-between items-center">

      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <!-- attribute ==> : or v-bind:[attribute] -->
          <a href="#">
              <img :title="blogs[0].title" class="rounded-t-lg" v-bind:src="blogs[0].src" alt="" />
          </a>
          <div class="p-5">
              <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ blogs[0].title }}</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ blogs[0].description }}</p>
              <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
              </a>
          </div>
      </div>

    </div>

    <div class="flex justify-between items-center mt-5">

      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <!-- attribute ==> : or v-bind:[attribute] -->
          <a href="#">
              <img v-bind="blogs2" />
          </a>
          <div class="p-5">
              <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ blogs[0].title }}</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ blogs[0].description }}</p>
              <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
              </a>
          </div>
      </div>

    </div>
  
  </div>

</template>

<style scoped>




</style>
