# React

## 1. Definition

React is an open-source JavaScript library for building user interfaces, primarily for single-page applications (SPAs). It focuses on building reusable UI components and efficiently updating the UI using a virtual DOM.

## 2. Creator & History

- Created by: Facebook (Meta)
- Initial release: 2013
- Creator: Jordan Walke
- Maintained by: Meta & open-source community

## 3. Problem React Solves

Before React:

- Complex DOM manipulation
- Poor UI performance
- Hard-to-maintain UI logic
- Tight coupling between data and UI

React solves:

- Efficient UI updates via Virtual DOM
- Component-based architecture
- Predictable state management
- Reusable UI logic

## 4. Why React Is Important

- Industry standard frontend library
- Used by Facebook, Instagram, Netflix, Airbnb
- Large ecosystem
- Works with web, mobile (React Native), desktop

## 5. Core Principles

- Component-based architecture
- Declarative UI
- One-way data flow
- Virtual DOM
- State-driven rendering

## 6. React Architecture (High Level)

`State / Props => Component Render => Virtual DOM => Diffing Algorithm => Real DOM Update`

## 7. Virtual DOM Explained

- Lightweight copy of real DOM
- React compares old vs new virtual DOM (diffing)
- Only minimal changes applied to real DOM
- Improves performance

## 8. React Project Setup

### Using Vite (Recommended)

```bash
npm create vite@latest my-app
cd my-app
npm install
npm run dev
```

### Using Create React App (Legacy)

`npx create-react-app my-app `
`cd my-app `
`npm start`

## 9. Project Folder Structure

`src/  
	`├── components/  
 `├── pages/  
	`├── hooks/  
 `├── context/  
	`├── services/  
 `├── utils/  
	`├── App.jsx  
 `└── main.jsx`

## 10. JSX

JSX allows writing HTML inside JavaScript.

```jsx
const App = () => {
  return <h1>Hello React</h1>;
};
```

## 11. Components

### Functional Component

```jsx
function Button() {
  return <button>Click</button>;
}
```

## 12. Props

Used to pass data to components.

```jsx
function User({ name }) {
  return <h2>{name}</h2>;
}
```

## 13. State (useState)

```jsx
import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};
```

## 14. useEffect (Side Effects)

```jsx
import { useEffect } from "react";
useEffect(() => {
  console.log("Component mounted");
  return () => {
    console.log("Cleanup");
  };
}, []);
```

## 15. Controlled Components

```jsx
const Input = () => {
  const [value, setValue] = useState("");
  return <input value={value} onChange={(e) => setValue(e.target.value)} />;
};
```

## 16. Lifting State Up

State shared between components by moving it to parent.

## 17. Conditional Rendering

```jsx
{
  isLoggedIn ? <Dashboard /> : <Login />;
}
```

## 18. Lists & Keys

```jsx
users.map((user) => <li key={user.id}>{user.name}</li>);
```

## 19. React Context API

### What is Context API

Context API provides a way to share global data (state) across the component tree without passing props manually at every level.

### Problems Context Solves

- Prop drilling
- Global state management for small to medium apps

### How Context Works

`Context Provider       ↓ All child components       ↓ useContext() to consume data`

### Create Context

```jsx
import { createContext } from "react";
export const AuthContext = createContext(null);
```

### Provide Context

```jsx
import { useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
```

### Consume Context

```jsx
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
const Profile = () => {
  const { user } = useContext(AuthContext);
  return <h1>{user?.name}</h1>;
};
```

## 20. Custom Hooks

```jsx
function useCounter() {
  const [count, setCount] = useState(0);
  return { count, increment: () => setCount(count + 1) };
}
```

## 21. React Router

`npm install react-router-dom`

```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
</BrowserRouter>
```

## 22. Forms Handling

```jsx
const handleSubmit = (e) => {
  e.preventDefault();
};
```

## 23. API Calls

```jsx
useEffect(() => {
  fetch("/api/users")
    .then((res) => res.json())
    .then((data) => setUsers(data));
}, []);
```

## 24. Performance Optimization

- React.memo
- useCallback
- useMemo
- Code splitting
- Lazy loading

## 25. Common Mistakes

- Missing keys in lists
- Unnecessary re-renders
- Putting too much logic in components
- Overusing Context

## 26. React in Your Projects

- Dashboards
- ERP systems
- SaaS applications
- Admin panels
- AI tools frontend

## 27. Interview Questions & Answers

### Beginner

Q: What is React?  
A: A JavaScript library for building UIs.

Q: What is JSX?  
A: Syntax extension to write HTML in JS.

### Intermediate

Q: Difference between state and props?  
A: State is internal, props are external.

Q: What is Context API?  
A: Global state sharing solution.

### Advanced

Q: How React handles re-rendering?  
A: Through state/props changes and diffing.

Q: When not to use Context?  
A: For frequently changing large data.
