<script>
    import { nextTick, reactive, ref, computed } from 'vue';


    const count = ref(0);
    const state = reactive({ count: 0 });
    const raw = {};
    console.log(state === raw);
    const books = reactive([ref("Vue 3 guide!")]);
    console.log(books[0].value);
    const map = reactive(new Map([['count', ref(0)]]));
    console.log(map.get('count').value);
    const author = reactive({
        name: 'John Doe',
        books: [
            'Vue 2 - Advanced Guide',
            'Vue 3 - Basic Guide',
            'Vue 4 - The Mystery'
        ]
    });

    async function increment() {
        count.value++;
        await nextTick();
        
        return {
            count,
            increment,
        };
    }

    const publishedBooksMessage = computed(() => {
        return author.books.length > 0 ? 'Yes' : 'No';
    });

    const firstName = ref('John');
    const lastName = ref('Doe');

    const fullName = computed({
        // getter
        get() {
            return firstName.value + ' ' + lastName.value
        },
        // setter
        set(newValue) {
            // Note: we are using destructuring assignment syntax here.
            [firstName.value, lastName.value] = newValue.split(' ');
        }
    });
    console.log(fullName?.value);

    const isActive = ref(true)
    const hasError = ref(false)
    const activeClass = ref('active')
    const errorClass = ref('text-danger')

</script>



<template>
    <div>
        
        <a v-on:click="doSomething"> Click </a>
        <div :id="dynamicId">{{ ("ok" === "ok") ? "message" : "non" }}</div>
        <p v-if="seen">Now you see me</p>

        <a v-bind:href="url"> Hello World! </a>
        <!-- shorthand --> <br>
        <a :href="url"> Hello World! </a><br>
        
        <a v-on:click="doSomething"> Click Me </a><br>
        <!-- shorthand -->
        <a @:click="doSomething">Click Me</a>

        <a v-bind:class="url"> ... </a>
        <!-- shorthand -->
        <a :class="url"> ... </a>

        <a v-on:[eventName]="doSomething"> Focus </a>
        <!-- shorthand -->
        <a @[eventName]="doSomething"> Focus </a>

        <!-- This will trigger a compiler warning. -->
        <!-- <a :['foo' + bar]="value"> ... </a> -->

        <form v-on:submit.prevent="onSubmit">
            <button type="submit">Submit</button>
        </form>
        <form @submit.prevent="onSubmit">
            <button type="submit">Submit</button>
        </form> 

        <div>
            <h1>{{ count }}</h1>
            <button v-on:click="increment">Increment</button>
            
            <!-- <h1>{{ state.count }}</h1>
            <button @:click="state.count++">Increment</button> -->
        </div>

        <div>
            <p>Has published books:</p>
            <!-- <span>{{ publishedBooksMessage }}</span> -->
            <span>{{ fullName?.value }}</span>
        </div>

        <!-- class binding -->
        <div :class="{ active: isActive }">Hello world</div>
        <div class="static" :class="{ active: isActive, 'text-danger': hasError }">Hello World</div>
        <div :class="[activeClass, errorClass]"></div>
        <div :class="[isActive ? activeClass : '', errorClass]"></div>
        <MyComponent class="baz boo" />
        <MyComponent class="baz boo" :class="{ active: isActive }" />



    </div>  
</template>




