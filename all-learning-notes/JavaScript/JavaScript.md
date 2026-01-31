# JavaScript (ES6+)

## 1. Overview

JavaScript is a high-level, interpreted, single-threaded programming language used to build dynamic and interactive applications. ES6+ refers to modern JavaScript features introduced from ES2015 onward, making code more readable, scalable, and maintainable.

### Why JavaScript Exists

- To make web pages interactive
- To handle client-side logic
- Now also used on servers (Node.js), mobile apps, automation, and AI tooling

### Where You Use It (Your Context)

- Frontend: React, Next.js, Vue.js
- Backend: Node.js, Express, NestJS
- Automation: n8n, workflows
- Real projects: ERP, SaaS, AI apps, marketing automation

---

## 2. Core Concepts

- **Execution Context**: Global, Function, Block
- **Call Stack & Event Loop**
- **Hoisting**
- **Scope**: Global, Function, Block
- **Closures**
- **Asynchronous Programming**
- **Immutability**
- **Functional Programming Basics**

---

## 3. How JavaScript Works (Internals)

### Execution Flow

1. Code enters **Call Stack**
2. Async operations go to **Web APIs**
3. Callbacks/Promises go to **Task Queue / Microtask Queue**
4. **Event Loop** pushes them back to Call Stack

Call Stack → Web APIs → Queue → Event Loop → Call Stack 4. ES6+ Key Features

4.1 let & const

```js
let count = 1;
const PI = 3.14;
let: block-scoped, mutable

const: block-scoped, immutable reference
```

4.2 Arrow Functions

```js
const add = (a, b) => a + b;
```

✅ Shorter syntax
⚠️ No this, arguments, super

4.3 Template Literals

```js
const name = "Abir";
console.log(`Hello ${name}`);
```

4.4 Destructuring

```js
const user = { id: 1, role: "admin" };
const { id, role } = user;
```

4.5 Spread & Rest Operator

```js
const nums = [1, 2, 3];
const copy = [...nums];

function sum(...args) {
  return args.reduce((a, b) => a + b);
}
```

4.6 Default Parameters

```js
function greet(name = "Guest") {
  return `Hello ${name}`;
}
```

4.7 Modules (Very Important)

```js
// export
export const PI = 3.14;

// import
import { PI } from "./math.js";
Used heavily in React, Node, NestJS
```

5. Asynchronous JavaScript
   5.1 Callbacks

```js
setTimeout(() => {
  console.log("Hello");
}, 1000);
5.2 Promises
const fetchData = () => {
  return new Promise((resolve, reject) => {
    resolve("Data loaded");
  });
};
```

5.3 async / await (Production Standard)

```js
async function getUser() {
  try {
    const res = await fetch("/api/user");
    return await res.json();
  } catch (err) {
    console.error(err);
  }
}
```

6. Common Data Structures

```js
Arrays;
const users = [1, 2, 3];
users.map((u) => u * 2);
Objects;
const user = {
  name: "Abir",
  skills: ["JS", "Node", "React"],
};
```

7. Functional Programming Concepts

```js
map
filter
reduce
Pure functions
Immutability
```

```js
const total = [1, 2, 3].reduce((a, b) => a + b, 0);
```

8. Common Mistakes

```txt
Using var
Blocking event loop
Forgetting await
Mutating state directly
Not handling promise rejection
```

9. Interview Questions & Answers

```txt
Beginner
Q: Difference between var, let, const?
A: var is function-scoped, let/const are block-scoped.

Q: What is hoisting?
A: Variables and functions are moved to the top of their scope during compilation.

Intermediate
Q: What is closure?
A: A function that remembers variables from its outer scope even after execution.
```

```js
function outer() {
  let count = 0;
  return () => ++count;
}
```

```
Q: Explain event loop
A: It manages async operations by moving callbacks from queues to call stack.

Advanced
Q: Microtask vs Macrotask?
A: Promises go to microtask queue, setTimeout goes to macrotask.

Q: How JS handles concurrency with single thread?
A: Using event loop + async APIs.
```

10. Real Project Mapping (Your CV)

```txt
Used ES6 modules in NestJS microservices
Async/await in ERP & SaaS APIs
Array methods in React dashboards
Closures & scope handling in automation workflows
```

11. Learning Checklist

```txt
 ES6 syntax
 Async / Await
 Closures

 Event Loop deep dive
 Memory management
 Performance optimization
```
