<template>

    <div v-html="tag"></div>
    <div>
        <h2 :class="{green: colorFull}">Hello World!</h2>
        <button v-on:click="colorFull=!colorFull">CGABGE COLOR</button>

        <form>
            <input placeholder="Email" v-model="form.email" type="text">
            <input placeholder="Password" v-model="form.password" type="password">
            <button v-on:click="login" type="button">login</button>
        </form>
    </div>

    <Child/>

</template>


<script>
    import Child from '../components/Child.vue';
    export default {
    name: "About",
    data() {
        return {
            tag: "<h2>Rohan</h2>",
            colorFull: true,
            form: {
                email: "",
                password: ""
            }
        };
    },
    methods: {
        login() {
            console.log(this.form);
        }
    },
    components: { Child }
}
</script>
