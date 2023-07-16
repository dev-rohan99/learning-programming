<script setup>

    import { ref, reactive, computed } from "vue";

    const activeColor = ref('red');
    const fontSize = ref(30);

    const parentMessage = ref('Parent');
    const items = ref([{message: 'Foo'}, {message: 'Bar'}]);
    const awesome = ref(false);

    const myObject = reactive({
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
    })
    const todos = reactive([
        {
            name: 'How to do lists in Vue',
            isComplete: false
        },
        {
            name: 'How to do lists in Vue',
            isComplete: true
        }
    ]);
    const numbers = ref([1, 2, 3, 4, 5]);
    const evenNumbers = computed((n) => {
        return numbers.value.filter((n) => n % 2 === 0);
    });
    const count = ref(0);
    const name = ref('Vue.js');

    function greet(val){
        if(val){
            alert(`Hello ${val}!`);
        }else if(val === ""){
            alert(`Hello ${name.value}!`);
        }
    }
    function warn(message, event) {
        // now we have access to the native event
        if (event) {
            event.preventDefault()
        }
        alert(message)
    }
    function submit(){
        alert("Founded!");
    }
    function onPageDown(){
        alert("Founded!");
    }
    function clear(){
        alert("Founded!");
    }
    function doSomething(){
        alert("Founded!");
    }
    function onClick(){
        alert("Founded!");
    }
    function onCtrlClick(){
        alert("Founded!");
    }
    function onClickTwo(){
        alert("Founded!");
    }

</script>


<template>
    <div>

        <div class="">
            <div class="container">
                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="#">WebSiteName</a>
                        </div>
                        <ul class="nav navbar-nav">
                            <li class="active"><a href="/">Home</a></li>
                            <li><a href="#">Page 1</a></li>
                            <li><a href="#">Page 2</a></li>
                            <li><a href="#">Page 3</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>

        <div>
            <div :style="{ color: activeColor, fontSize: `${fontSize}px` }">Hello</div>

            <button @click="awesome = !awesome" class="btn btn-dark mt-5 mb-3">Toggle</button>
            <h3 v-if="awesome">Vue is awesome!</h3>
            <h3 v-else>Oh no!</h3>
            <h3 v-show="false">Hide this tag!</h3>

            <div v-if="type === 'A'">A</div>
            <div v-else-if="type === 'B'">B</div>
            <div v-else-if="type === 'C'">C</div>
            <div v-else>Not A/B/C</div>
        </div>

        <div>
            <ul>
                <li v-for="item in items">{{ item.message }}</li>
                <li v-for="({message}, index) in items">{{ parentMessage + " - " + index + " - " + message }}</li>
            </ul>

            <ul>
                <li v-for="value in myObject">
                    {{ value }}
                </li>

                <li v-for="(value, key) in myObject">
                    {{ key }}: {{ value }}
                </li>
            </ul>

            <ul>
                <!-- <li v-for="todo in todos" v-if="!todo.isComplete">
                    {{ todo.name }}
                </li> -->

                <template v-for="todo in todos">
                    <li v-if="!todo.isComplete">
                        {{ todo.name }}
                    </li>
                </template>

                <li v-for="n in evenNumbers">{{ n }}</li>
            </ul>
        </div>
        <p>{{ 16 % 2 }}</p>

        <!-- Event Handling -->
        <div>
            <button @click="count++" class="btn btn-light">Couter</button>
            <p>Count is: {{ count }}</p>

            <button @click="greet('Rohan')" class="btn btn-success">Greeting</button>
            <button @click="greet" class="btn btn-success">Greeting</button>

            <!-- using $event special variable -->
            <button @click="warn('Form cannot be submitted yet.', $event)">Submit</button>
            <!-- using inline arrow function -->
            <button @click="(event) => warn('Form cannot be submitted yet.', event)">Submit</button>

            <!-- the click event's propagation will be stopped -->
            <a @click.stop="doThis">Hello world!</a>
            <!-- the submit event will no longer reload the page -->
            <form @submit.prevent="onSubmit">
                <button type="submit" class="btn btn-success">Submit</button>
            </form>
            <!-- modifiers can be chained -->
            <a @click.stop.prevent="doThat">Hello</a>
            <!-- just the modifier -->
            <form @submit.prevent>
                <button type="submit" class="btn btn-success">Submit</button>
            </form>
            <!-- only trigger handler if event.target is the element itself -->
            <!-- i.e. not from a child element -->
            <div @click.self="doThat">Hello</div>

            <!-- use capture mode when adding the event listener -->
            <!-- i.e. an event targeting an inner element is handled here before being handled by that element -->
            <div @click.capture="doThis">
                <span class="">Hello world</span>
            </div>

            <!-- the click event will be triggered at most once -->
            <a @click.once="doThis">Hello world!</a>

            <!-- the scroll event's default behavior (scrolling) will happen -->
            <!-- immediately, instead of waiting for `onScroll` to complete  -->
            <!-- in case it contains `event.preventDefault()`                -->
            <div @scroll.passive="onScroll">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos dicta, optio aut voluptatum enim a non, doloribus amet pariatur culpa adipisci rerum velit quia numquam, quod dolor ab illum possimus!</div>

            <!-- only call `submit` when the `key` is `Enter` -->
            <input @keyup.enter="submit" />
            <input @keyup.page-down="onPageDown" />
            <!-- Alt + Enter -->
            <input @keyup.alt.enter="clear" />
            <!-- Ctrl + Click -->
            <div @click.ctrl="doSomething">Do something</div>
            <!-- this will fire even if Alt or Shift is also pressed -->
            <button @click.ctrl="onClick">A</button>
            <!-- this will only fire when Ctrl and no other keys are pressed -->
            <button @click.ctrl.exact="onCtrlClick">A</button>
            <!-- this will only fire when no system modifiers are pressed -->
            <button @click.exact="onClickTwo">A</button>
        </div>

        <div>
            <input :value="text" @input="event => text = event.target.value">
            <input v-model="text">
            <p>Message is: {{ message }}</p>
            <input v-model="message" placeholder="edit me" />
        </div>

    </div>
</template>


