<script setup>

    import { ref, reactive, computed, onMounted, watch, toRaw, watchEffect, watchPostEffect } from "vue";
    import BlogPost from "../components/BlogPost.vue";

    defineProps({
        title: String,
        likes: Number
    })

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

    const message = ref('');
    const checked = ref(false);
    const toggle = ref(false);
    const dynamicTrueValue = ref("Ohh yes let's go!");
    const dynamicFalseValue = ref("Ohh nope!");
    const checkedNames = ref([]);
    const picked = ref('');
    const selected = ref('');
    const msg = ref('');
    const msg2 = ref('');
    const selectedTwo = ref([]);

    const selectedItem = ref('A');
    const options = ref([
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
    ]);

    onMounted(() => {
        console.log(`the component is now mounted.`)
    });
    setTimeout(() => {
        onMounted(() => {
            console.log("this won't work.");
        })
    }, 100);

    const question = ref("");
    const answare = ref('Questions usually contain a question mark. ;-)');
    // watch works directly on a ref
    watch(question, async (newQuestion, oldQuestion) => {
        if(newQuestion.indexOf("?") > -1){
            answer.value = 'Thinking...';
            try{
                const res = await fetch('https://yesno.wtf/api');
                answare.value = (await res.json()).answare;
            }catch(err){
                answer.value = 'Error! Could not reach the API. ' + error;
            }
        }
    }, { immediate: true });

    const x = ref(0);
    const y = ref(0);

    // single ref
    watch(x, (newX) => {
        console.log(`X is now ${(newX)}`);
    }, { immediate: true });
    // getter
    watch(() => x.value + y.value, (sum) => {
        console.log(`sum of x + y is: ${toRaw(sum)}`);
    },);
    // array of multiple sources
    watch([x, () => y.value], ([newX, newY]) => {
        console.log(`x is ${newX} and y is ${newY}`)
    }, { immediate: true });

    const obj = reactive({ count: 0 });
    // instead, use a getter:
    watch(() => obj.count, (count) => {
            console.log(`count is: ${count}`)
    }, { immediate: true });

    const todoId = ref(1);
    const data = ref(null);

    watch(todoId, async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`);
        data.value = await response.json();
        console.log(data.value);
    }, { immediate: true });

    watchEffect(async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`)
        data.value = await response.json();
        console.log(data.value);
    });

    // watch(source, callback, {
    //     flush: 'post'
    // });
    // watchEffect(callback, {
    //     flush: 'post'
    // });

    watchPostEffect(() => {
        /* executed after Vue updates */
    });

    // this one will be automatically stopped
    watchEffect(() => {});

    // ...this one will not!
    setTimeout(() => {
    watchEffect(() => {})
    }, 100);

    const unwatch = watchEffect(() => {});
    // ...later, when no longer needed
    unwatch();
    // data to be loaded asynchronously
    const dataTwo = ref(null);
    watchEffect(() => {
        if (dataTwo.value) {
            // do something when data is loaded
        }
    });
    const input = ref(null);
    onMounted(() => {
        input.value.focus();
    });
    console.log(input);

    watchEffect(() => {
        if(input.value) {
            input.value.focus();
        }else {
            // not mounted yet, or the element was unmounted (e.g. by v-if)
            console.log("Not mounted yet!");
        }
    });

    const list = ref([
        "One",
        "Two",
        "Three"
    ]);
    const itemRefs = ref([]);
    onMounted(() => console.log(itemRefs.value));

    const a = 1;
    const b = ref(2);
    // Compiler macros, such as defineExpose, don't need to be imported
    defineExpose({
        a,
        b
    });

    const posts = ref([
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
    ]);
    const postFontSize = ref(1);

    // camelCase in JavaScript
    const BlogPosts = {
        props: ['postTitle'],
        emits: ['updatePost'],
        template: `<h3>{{ postTitle }}</h3>`
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

        <!-- Form Input Bindings -->
        <div>
            <input :value="text" @input="event => text = event.target.value">
            <input v-model="text">
            <!-- <p>Message is: {{ message }}</p>
            <input v-model="message" placeholder="edit me" /> -->

            <span>Multiline message is:</span>
            <p style="white-space: pre-line;">{{ message }}</p>
            <textarea v-model="message" placeholder="add multiple lines"></textarea>

            <input type="checkbox" id="checkbox" v-model="checked" />
            <label for="checkbox">{{ checked }}</label>

            <div>Checked names: {{ checkedNames }}</div>
            <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
            <label for="jack">Jack</label>
            <input type="checkbox" id="john" value="John" v-model="checkedNames">
            <label for="john">John</label>
            <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
            <label for="mike">Mike</label>

            <div>Picked: {{ picked }}</div>
            <input type="radio" id="one" value="ONE" v-model="picked">
            <label for="one">ONE</label>
            <input type="radio" id="two" value="TWO" v-model="picked">
            <label for="two">TWO</label>

            <div>Selected: {{ selected }}</div>
            <select v-model="selected">
                <option value="" disabled>-- Select one --</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </select>

            <div>Selected: {{ selectedTwo }}</div>
            <select v-model="selectedTwo" multiple>
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </select>

            <div>Selected: {{ selectedItem }}</div>
            <select v-model="selectedItem">
                <option v-for="option in options" :key="option.value" :value="option.value">{{ option.text }}</option>
            </select>

            <!-- `toggle` is either true or false -->
            <input id="togg" type="checkbox" v-model="toggle" />
            <label for="togg">{{ toggle }}</label>
            <input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />
            <input type="checkbox" v-model="toggle" :true-value="dynamicTrueValue" :false-value="dynamicFalseValue" />

            <select v-model="selected">
                <!-- inline object literal -->
                <option :value="{ number: 123 }">123</option>
            </select>
            <br><br>

            <!-- synced after "change" instead of "input" -->
            <input v-model.lazy="msg" />

            <input v-model.number="age" />
            <input v-model.trim="msg2" />
        </div>

        <!-- Watchers -->
        <div>
            <p>
                Ask a yes/no question:
                <input v-model="question" />
            </p>
            <p>{{ answer }}</p>
        </div>

        <!-- Template Refs -->
        <div>
            <input ref="input">
            <ul>
                <li v-for="item in list" ref="itemRefs">{{ item }}</li>
            </ul>
            <input :ref="(el) => { console.log(el) }">
        </div>

        <!-- Components Basics -->
        <div>
            <BlogPost title="My journey with Vue" />
            <BlogPost v-for="post in posts" :key="post.id" :title="post.title" />
            <div :style="{ fontSize: postFontSize + 'em' }">
                <BlogPost
                    v-for="post in posts"
                    :key="post.id"
                    :title="post.title"
                />
            </div>
            <!-- Component changes when currentTab changes -->
            <!-- <component :is="tabs[currentTab]"></component> -->

            <!-- kebab-case in HTML -->
            <!-- <BlogPosts post-title="hello!" @update-post="onUpdatePost"></BlogPosts> -->
            <table>
                <blog-post-row></blog-post-row>
            </table>
            <table>
                <tr is="vue:blog-post-row"></tr>
            </table>
        </div>

        <div>
            <button @click="$emit('someEvent')">click me</button>

            <button @click="$emit('increaseBy', 1)">Increase by 1</button>

            <button type="submit">
                <slot>Helllo</slot>
            </button>
        </div>

    </div>
</template>


