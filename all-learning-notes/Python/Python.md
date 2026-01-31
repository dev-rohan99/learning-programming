# Python

## 1. Definition

Python is a high-level, interpreted, general-purpose programming language known for its simplicity, readability, and versatility. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming.

## 2. Creator & History

- Created by: Guido van Rossum
- First released: 1991
- Named after: Monty Python
- Design philosophy: Readability and simplicity
- Python Enhancement Proposals (PEP): Community-driven evolution (e.g., PEP 8, PEP 20)

## 3. Problems Python Solves

Before Python:

- Complex syntax in low-level languages
- Slower development cycles
- Hard-to-maintain codebases

Python solves:

- Rapid development with simple syntax
- Cross-platform compatibility
- Easy automation and scripting
- Strong support for data processing, AI, backend APIs

## 4. Why Python Is Important Today

- Dominant language in AI/ML & data science
- Widely used for automation and scripting
- Popular for backend APIs (FastAPI, Django)
- Large ecosystem and community
- Used by Google, Netflix, Instagram, Spotify

## 5. Advantages of Python

- Very readable and beginner-friendly
- Huge standard library
- Massive third-party ecosystem
- Rapid prototyping
- Strong community support
- Cross-platform

## 6. Disadvantages of Python

- Slower execution compared to compiled languages
- Global Interpreter Lock (GIL)
- Not ideal for mobile apps
- Runtime type errors without typing discipline

## 7. Python Execution Model

- Interpreted language
- Code executed line by line
- Uses Python Virtual Machine (PVM)

`Python Source Code => Bytecode (.pyc) => Python Virtual Machine => Execution`

## 8. Python Versions

- Python 2 (deprecated)
- Python 3 (current standard)
- Recommended: Python 3.10+

## 9. Basic Syntax

```python
print("Hello, World")
```

10. Variables & Data Types

```python
name = "Abir"
age = 25
is_active = True
skills = ["Python", "JS"]
```

Data types:
`int`
`float`
`str`
`bool`
`list`
`tuple`
`set`
`dict`
`None`

11. Type Casting

```python
x = int("10")
y = str(20)
```

12. Control Flow

```python If-Else
if age >= 18:
    print("Adult")
else:
    print("Minor")
Loops
for i in range(5):
    print(i)

while age > 18:
    age -= 1
```

13. Functions

```python
def add(a, b):
    return a + b
```

14. Type Hints (Modern Python)

```python
def multiply(a: int, b: int) -> int:
    return a * b
```

15. Default & Keyword Arguments

```python
def greet(name="Guest"):
    return f"Hello {name}"
```

16. Lists, Tuples, Sets

```python
nums = [1, 2, 3]
coords = (10, 20)
unique = {1, 2, 3}
```

17. Dictionaries

```python
user = {
    "name": "Abir",
    "role": "admin"
}
```

18. List Comprehension

```python
squares = [x*x for x in range(5)]
```

18. Exception Handling

```python
try:
    x = int("abc")
except ValueError:
    print("Invalid number")
finally:
    print("Done")
```

19. File Handling

```python
with open("test.txt", "w") as f:
    f.write("Hello")
```

20. Modules & Packages

```python
import math
from math import sqrt
```

21. Virtual Environments
    venv
    pipenv
    poetry
    python -m venv env
22. Object-Oriented Programming

```python
class User:
    def __init__(self, name):
        self.name = name

    def greet(self):
        return f"Hello {self.name}"
```

24. Inheritance

```python
class Admin(User):
    def access(self):
        return "Full access"
```

25. Decorators

```python
def logger(func):
    def wrapper():
        print("Calling function")
        func()
    return wrapper
```

26. Lambda Functions

```python
add = lambda a, b: a + b
```

26. Common Python Libraries

```txt
requests
numpy
pandas
flask
fastapi
django
matplotlib
```

28. Python for Backend Development

```txt
Flask: Lightweight APIs
FastAPI: High-performance APIs
Django: Full-stack framework
Used in microservices & REST APIs
```

28. Python for Automation (Your Context)

```txt
n8n custom scripts
File processing
API integrations
Cron jobs
Data scraping
```

29. Python for AI & Data

```txt
NumPy (numerical computing)
Pandas (data analysis)
TensorFlow / PyTorch
OpenAI / ML pipelines
```

31. Performance Optimization

```txt
Use generators
Avoid unnecessary loops
Use built-in functions
C extensions when needed
```

31. Common Mistakes

```txt
Ignoring virtual environments
Poor exception handling
Writing non-PEP8 code
Blocking I/O in APIs
```

32. Security Best Practices

```txt
Input validation
Secure dependencies
Environment variables for secrets
Avoid eval()
```

34. Interview Questions & Answers - Beginner

```txt
Q: What is Python?
A: A high-level interpreted programming language.

Q: What is PEP 8?
A: Python style guide.

Intermediate
Q: Difference between list and tuple?
A: List is mutable, tuple is immutable.

Q: What is virtual environment?
A: Isolated dependency environment.

Advanced
Q: What is GIL?
A: Global Interpreter Lock that allows one thread at a time.

Q: How Python handles memory?
A: Reference counting + garbage collection.
```
