<script setup>

const colors = {
    textColor: "text-blue-800",
    textColor2: "text-blue-500",
    bgColor: "bg-blue-50",
    hoverBgColor: "hover:bg-blue-200",
}

const messageType = "success";

if("error" == messageType){
    colors.textColor = "text-red-800";
    colors.textColor2 = "text-red-500";
    colors.bgColor = "bg-red-50";
    colors.hoverBgColor = "hover:bg-red-200";
}

if("success" == messageType){
    colors.textColor = "text-green-800";
    colors.textColor2 = "text-green-500";
    colors.bgColor = "bg-green-50";
    colors.hoverBgColor = "hover:bg-green-200";
}

const weekday = true;

</script>

<template>
    
    <div id="alert-1" class="flex items-center p-4 mb-4 rounded-lg mt-3" :class="[colors.textColor, colors.bgColor]" role="alert">
        <svg class="flex-shrink-0 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
        </svg>
        <span class="sr-only">Info</span>
        <div class="ms-3 text-sm font-semibold uppercase">
            A simple info alert. Give it a click if you like.
        </div>
        <button type="button" class="ms-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 inline-flex items-center justify-center h-8 w-8" :class="[colors.textColor2, colors.bgColor, colors.hoverBgColor]" data-dismiss-target="#alert-1" aria-label="Close">
            <span class="sr-only">Close</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
        </button>
    </div>

    <div class="mt-5">
        <div class="p-3 text-white rounded-lg px-5" :style="weekday ? 'background-color:green' : 'background-color:red'">
            It's a weekday!
        </div>
    </div>

    <!-- FOR MULTIPLE FEATURES -->
    <div class="mt-5">
        <div class="p-3 text-white rounded-lg px-5" :style="weekday ? ['background-color:green', 'font-weight:700'] : 'background-color:red'">
            It's a weekday!
        </div>
    </div>

</template>


<style scoped>



</style>
