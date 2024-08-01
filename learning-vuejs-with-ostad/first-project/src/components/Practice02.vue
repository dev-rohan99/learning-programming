<script setup>
import { ref } from 'vue';


const weather = {
    type: ref("S"),
    location: "Dhaka"
}

const green = "bg-green-600";
const weathers = false;

</script>

<template>
    
    <div class="flex justify-center mt-5 mb-5">

        
        <div :class="green"
            class="card  min-w-sm max-w-sm border border-gray-100 transition-shadow test  shadow-lg hover:shadow-shadow-xl w-full text-purple-50 rounded-md">
            <h2 class="text-md mb-2 px-4 pt-4">
                <div class="flex justify-between">
                    <div class="badge relative top-0">
                        <span class="mt-2 py-1 h-12px text-md font-semibold w-12px  rounded right-1 bottom-1 px-4">{{ weather.location }}</span></div>
                    <span class="text-lg font-bold " v-if="weather.type == 'S'">Sunny</span>
                    <span class="text-lg font-bold " v-else-if="weather.type == 'PC'">Partly Cloudy</span>
                    <span class="text-lg font-bold " v-else-if="weather.type == 'R'">Rainy</span>
                    <span class="text-lg font-bold " v-else-if="weather.type == 'T'">Thunderstorm</span>
                    <span class="text-lg font-bold " v-else>Cylone</span>
                </div>
            </h2>

            <!-- v-show ==> for more advance data load features = but v-show not supported in template -->

            <img v-show="weather.type == 'S'" class="w-[150px] mx-auto" src="https://www.svgrepo.com/show/29731/sunny.svg" alt="">
            <img v-show="weather.type == 'PC'" class="w-[150px] mx-auto" src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png" alt="">
            <img v-show="weather.type == 'R'" class="w-[150px] mx-auto" src="https://www.svgrepo.com/show/212029/rain-weather.svg" alt="">
            <img v-show="weather.type == 'T'" class="w-[150px] mx-auto" src="https://cdn-icons-png.flaticon.com/512/1959/1959321.png" alt="">
            <img v-show="weather.type == 'C'" class="w-[150px] mx-auto" src="https://cdn-icons-png.flaticon.com/512/4842/4842550.png" alt="">

            <div class="text-md pt-4 pb-4 px-4">
                <div class="flex justify-between items-center">
                    <div class="space-y-2">
                        <span class="flex space-x-2 items-center"><svg height="20" width="20" viewBox="0 0 32 32" class="fill-current"><path d="M13,30a5.0057,5.0057,0,0,1-5-5h2a3,3,0,1,0,3-3H4V20h9a5,5,0,0,1,0,10Z"></path><path d="M25 25a5.0057 5.0057 0 01-5-5h2a3 3 0 103-3H2V15H25a5 5 0 010 10zM21 12H6V10H21a3 3 0 10-3-3H16a5 5 0 115 5z"></path></svg> <span>27km/h</span></span><span class="flex space-x-2 items-center"><svg height="20" width="20" viewBox="0 0 32 32" class="fill-current"><path d="M16,24V22a3.2965,3.2965,0,0,0,3-3h2A5.2668,5.2668,0,0,1,16,24Z"></path><path d="M16,28a9.0114,9.0114,0,0,1-9-9,9.9843,9.9843,0,0,1,1.4941-4.9554L15.1528,3.4367a1.04,1.04,0,0,1,1.6944,0l6.6289,10.5564A10.0633,10.0633,0,0,1,25,19,9.0114,9.0114,0,0,1,16,28ZM16,5.8483l-5.7817,9.2079A7.9771,7.9771,0,0,0,9,19a7,7,0,0,0,14,0,8.0615,8.0615,0,0,0-1.248-3.9953Z"></path></svg> <span>32%</span></span>
                    </div>

                    <div>
                        <h1 class="text-6xl"> 12° </h1>
                    </div>
                </div>
            </div>
        </div>

        <!-- group condition system -->

        <div :class="weathers ? 'bg-green-600' : 'bg-yellow-600'"
            class="card  min-w-sm max-w-sm border border-gray-100 transition-shadow test  shadow-lg hover:shadow-shadow-xl w-full text-purple-50 rounded-md">
            <h2 class="text-md mb-2 px-4 pt-4">
                <div class="flex justify-between">
                    
                    <!-- <div v-show="weather.type == 'S'">
                        <div class="badge relative top-0">
                            <img class="w-[150px] mx-auto" src="https://www.svgrepo.com/show/29731/sunny.svg" alt="">
                        </div>
                        <span class="text-lg font-bold ">Sunny</span>
                    </div> -->
                    
                    <template v-if="weather.type == 'S'">
                        <div class="badge relative top-0">
                            <img class="w-[150px] mx-auto" src="https://www.svgrepo.com/show/29731/sunny.svg" alt="">
                        </div>
                        <span class="text-lg font-bold ">Sunny</span>
                    </template>

                    <template v-else-if="weather.type == 'PC'">
                        <div class="badge relative top-0">
                            <img class="w-[150px] mx-auto" src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png" alt="">
                        </div>
                        <span class="text-lg font-bold ">Partly Cloudy</span>
                    </template>

                    <template v-else-if="weather.type == 'R'">
                        <div class="badge relative top-0">
                            <img class="w-[150px] mx-auto" src="https://www.svgrepo.com/show/212029/rain-weather.svg" alt="">
                        </div>
                        <span class="text-lg font-bold ">Rainy</span>
                    </template>

                    <template v-else-if="weather.type == 'T'">
                        <div class="badge relative top-0">
                            <img class="w-[150px] mx-auto" src="https://cdn-icons-png.flaticon.com/512/1959/1959321.png" alt="">
                        </div>
                        <span class="text-lg font-bold ">Thunderstorm</span>
                    </template>

                    <template v-else-if="weather.type == 'C'">
                        <div class="badge relative top-0">
                            <img class="w-[150px] mx-auto" src="https://cdn-icons-png.flaticon.com/512/4842/4842550.png" alt="">
                        </div>
                        <span class="text-lg font-bold ">Cylone</span>
                    </template>

                </div>
            </h2>

            

            <div class="text-md pt-4 pb-4 px-4">
                <div class="flex justify-between items-center">
                    <div class="space-y-2">
                        <span class="flex space-x-2 items-center"><svg height="20" width="20" viewBox="0 0 32 32" class="fill-current"><path d="M13,30a5.0057,5.0057,0,0,1-5-5h2a3,3,0,1,0,3-3H4V20h9a5,5,0,0,1,0,10Z"></path><path d="M25 25a5.0057 5.0057 0 01-5-5h2a3 3 0 103-3H2V15H25a5 5 0 010 10zM21 12H6V10H21a3 3 0 10-3-3H16a5 5 0 115 5z"></path></svg> <span>27km/h</span></span><span class="flex space-x-2 items-center"><svg height="20" width="20" viewBox="0 0 32 32" class="fill-current"><path d="M16,24V22a3.2965,3.2965,0,0,0,3-3h2A5.2668,5.2668,0,0,1,16,24Z"></path><path d="M16,28a9.0114,9.0114,0,0,1-9-9,9.9843,9.9843,0,0,1,1.4941-4.9554L15.1528,3.4367a1.04,1.04,0,0,1,1.6944,0l6.6289,10.5564A10.0633,10.0633,0,0,1,25,19,9.0114,9.0114,0,0,1,16,28ZM16,5.8483l-5.7817,9.2079A7.9771,7.9771,0,0,0,9,19a7,7,0,0,0,14,0,8.0615,8.0615,0,0,0-1.248-3.9953Z"></path></svg> <span>32%</span></span>
                    </div>

                    <div>
                        <h1 class="text-6xl"> 12° </h1>
                    </div>
                </div>
            </div>

        </div>


    </div>

    <!-- <div class="text-center">
        <select class="p-4" id="" v-model="weather.type">
            <option>SELECT</option>
            <option value="S">Sunny</option>
            <option value="PC">Partly Cloudy</option>
            <option value="R">Rainy</option>
            <option value="T">Thunderstorm</option>
            <option value="C">Cyclone</option>
        </select>
    </div> -->

</template>


<style scoped>



</style>
