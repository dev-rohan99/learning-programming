<script setup>

import { ref } from 'vue';

const images = [
    {
        thumb: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
        full: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    },
    {
        thumb: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
        full: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    },
    {
        thumb: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
        full: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    },
    {
        thumb: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
        full: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
    },
    {
        thumb: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
        full: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
    },
]

const fullImage = ref("https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg");

const setImage = (image) => {
    fullImage.value = image.full
}

</script>

<template>
    
    <div class="grid gap-4">
        <div>
            <img class="h-[600px] object-cover w-full max-w-full rounded-lg" :src="fullImage" alt="">
        </div>
        <div class="grid grid-cols-5 gap-4">
            <div @click="setImage(image)" v-for="(image, index) in images" :key="index">
                <img class="h-auto max-w-full rounded-lg" :src="image.thumb" alt="">
            </div>
        </div>
    </div>

</template>

<style scoped>



</style>
