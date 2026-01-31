# TypeScript

## 1. Definition

TypeScript is a statically typed, object-oriented programming language developed and maintained by Microsoft. It is a strict superset of JavaScript that adds optional static typing and compiles down to plain JavaScript.

## 2. Creator & History

- Created by: Microsoft
- Lead Architect: Anders Hejlsberg
- First released: 2012
- Designed for large-scale JavaScript applications

## 3. Problem TypeScript Solves

JavaScript works well for small projects, but as applications grow, it causes:

- Runtime errors due to dynamic typing
- Difficult refactoring
- Poor scalability in large teams
- Lack of strict contracts between components
- Bugs discovered too late (in production)

TypeScript solves these by introducing:

- Compile-time type checking
- Explicit contracts (interfaces, types)
- Better tooling and IDE support
- Safer refactoring

## 4. Why TypeScript Is Important in Modern Development

- Used by Angular, NestJS, Prisma, Next.js
- Industry standard for enterprise applications
- Reduces production bugs significantly
- Makes code self-documenting

## 5. Advantages of TypeScript

- Static typing
- Early error detection
- Improved code readability
- Better autocomplete & IntelliSense
- Scalable for large codebases
- Easier collaboration in teams
- Strong backend support (Node, NestJS)

## 6. Disadvantages of TypeScript

- Learning curve for beginners
- Requires build step (compilation)
- More initial setup
- Overengineering if misused

## 7. TypeScript vs JavaScript

| Feature         | JavaScript | TypeScript   |
| --------------- | ---------- | ------------ |
| Typing          | Dynamic    | Static       |
| Error detection | Runtime    | Compile-time |
| Refactoring     | Risky      | Safe         |
| Scalability     | Limited    | High         |
| IDE support     | Moderate   | Excellent    |

## 8. TypeScript Compilation Flow

TypeScript code does not run directly.
TypeScript (.ts) => TypeScript Compiler (tsc) => JavaScript (.js) => Browser / Node.js

## 9. Basic Types

```ts
let isActive: boolean = true;
let age: number = 25;
let username: string = "Abir";
let scores: number[] = [90, 80, 70];
```

10. Special Types
    any
    Disables type checking (dangerous).

```ts
let value: any = 10;
value = "text";
unknown
Safer alternative to any.

let data: unknown;

if (typeof data === "string") {
  console.log(data.toUpperCase());
}
void
Used for functions that return nothing.

function logMessage(): void {
  console.log("Hello");
}
never
Function that never finishes execution.

function throwError(): never {
  throw new Error("Fatal error");
}
```

11. Type Inference
    TypeScript can automatically infer types.

```ts
let count = 10; // inferred as number
```

12. Functions with Types

```ts
function add(a: number, b: number): number {
  return a + b;
}

const subtract = (a: number, b: number): number => a - b;
```

13. Optional & Default Parameters

```ts
function greet(name: string = "Guest"): string {
  return `Hello ${name}`;
}
```

15. Interfaces
    Used to define object structure.

```ts
interface User {
  id: number;
  name: string;
  email?: string;
}

const user: User = {
  id: 1,
  name: "Abir",
};
```

15. Type Aliases
    Alternative to interfaces, more flexible.

```ts
type ID = number | string;

type Product = {
  id: ID;
  price: number;
};
```

16. Union Types

```ts
type Status = "loading" | "success" | "error";
18. Intersection Types
type Person = {
  name: string;
};

type Employee = Person & {
  salary: number;
};
```

18. Enums

```ts
enum Role {
  ADMIN,
  USER,
  GUEST,
}
```

19. Generics
    Used to create reusable, type-safe components.

```ts
function identity<T>(value: T): T {
  return value;
}

identity<number>(10);
identity<string>("Hello");
20. Classes & Access Modifiers
class User {
  constructor(
    public name: string,
    private age: number,
    protected role: string
  ) {}

  getAge(): number {
    return this.age;
  }
}
```

21. Type Assertions

```ts
const input = document.getElementById("email") as HTMLInputElement;
```

22. Utility Types

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial<User>;
type ReadonlyUser = Readonly<User>;
type UserPreview = Pick<User, "id" | "name">;
```

---

23. TypeScript in Backend (Your Projects)

```txt
NestJS controllers & services
DTO validation
Prisma ORM
Microservices communication
API contract enforcement
```

---

23. Common Mistakes

```txt
Overusing any
Not enabling strict mode
Ignoring compiler warnings
Mixing runtime logic with types
```

---

26. Interview Questions & Answers - Beginner

```txt
Q: What is TypeScript?
A: A statically typed superset of JavaScript.

Q: Why use TypeScript?
A: To catch errors early and scale applications.
```

---

```txt
Intermediate
Q: Difference between interface and type?
A: Interface is extendable, type supports unions.

Q: What is generics?
A: A way to write reusable type-safe code.
```

---

```txt
Advanced
Q: What is structural typing?
A: Type compatibility based on structure, not name.

Q: How TypeScript helps in microservices?
A: Enforces API contracts and reduces integration bugs.
```
