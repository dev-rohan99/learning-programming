<script setup>

import { reactive, ref } from 'vue';

const accordionIndex = ref(0);

const accordions = reactive([
    {
        heading: "What is Flowbite?",
        content: "The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.",
        isOpen: true
    },
    {
        heading: "What is Flowbite?",
        content: "The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.",
        isOpen: false
    },
    {
        heading: "What is Flowbite?",
        content: "The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.",
        isOpen: false
    },
]);

const toggle = (index) => {
    accordionIndex[index] = !accordionIndex[index];
}

</script>

<template>

    <div id="accordion-open" data-accordion="open">

        <template v-for="(accordion, index) in accordions" :key="index">
            <h2 id="accordion-open-heading-1">
                <button @click="accordion.isOpen = !accordion.isOpen" type="button"
                    class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                    data-accordion-target="#accordion-open-body-1" aria-expanded="true"
                    aria-controls="accordion-open-body-1">
                    <span class="flex items-center"><svg class="w-5 h-5 me-2 shrink-0" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                clip-rule="evenodd"></path>
                        </svg> {{ accordion.heading }}</span>
                    <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 5 5 1 1 5" />
                    </svg>
                </button>
            </h2>

            <div id="accordion-open-body-1" v-show="accordion.isOpen" aria-labelledby="accordion-open-heading-1">
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    <p class="mb-2 text-gray-500 dark:text-gray-400">{{ accordion.content }}</p>
                </div>
            </div>
        </template>

        <!-- indivisual accordion -->
        <hr class="mt-10 mb-10">
        <template v-for="(accordion, index) in accordions" :key="index">
            <h2 id="accordion-open-heading-1 mt-3">
                <button @click="accordionIndex = index" type="button"
                    class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                    data-accordion-target="#accordion-open-body-1" aria-expanded="true"
                    aria-controls="accordion-open-body-1">
                    <span class="flex items-center"><svg class="w-5 h-5 me-2 shrink-0" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                clip-rule="evenodd"></path>
                        </svg> {{ accordion.heading }}</span>
                    <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 5 5 1 1 5" />
                    </svg>
                </button>
            </h2>

            <div id="accordion-open-body-1" v-show="accordionIndex == index" aria-labelledby="accordion-open-heading-1">
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    <p class="mb-2 text-gray-500 dark:text-gray-400">{{ accordion.content }}</p>
                </div>
            </div>
        </template>

    </div>

</template>

<style scoped>



</style>
