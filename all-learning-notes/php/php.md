# PHP

## 1. Definition

PHP (Hypertext Preprocessor) is an open-source, server-side scripting language designed primarily for web development. It is executed on the server and embedded within HTML to generate dynamic web pages.

## 2. Creator & History

- Created by: Rasmus Lerdorf
- First released: 1995
- Originally stood for: Personal Home Page
- Current meaning: Hypertext Preprocessor
- Widely used in web servers and CMS platforms

## 3. Problem PHP Solves

Before PHP:

- Websites were mostly static
- Server-side logic was complex and slow to build
- Database-driven pages were hard to implement

PHP solves:

- Dynamic content generation
- Server-side form handling
- Database interaction
- Session and authentication handling
- Rapid backend development

## 4. Why PHP Is Still Relevant

- Powers ~75% of the web
- Backbone of WordPress, Laravel, Drupal
- Easy deployment on shared hosting
- Strong ecosystem and community
- Cost-effective for small to medium systems

## 5. Advantages of PHP

- Easy to learn and use
- Large ecosystem and libraries
- Strong database support
- Fast development cycle
- Widely supported by hosting providers
- Good performance with modern PHP versions (7+)

## 6. Disadvantages of PHP

- Inconsistent function naming
- Poor architecture if not structured well
- Legacy code issues
- Less strict typing (unless enforced)

## 7. PHP Execution Flow

`Client Request  => Web Server (Apache / Nginx) => PHP Interpreter => Database (MySQL / PostgreSQL) => HTML Response`

## 8. PHP vs JavaScript (Backend)

| Feature     | PHP           | Node.js        |
| ----------- | ------------- | -------------- |
| Execution   | Request-based | Event-driven   |
| Typing      | Weak          | Strong (TS)    |
| Performance | Medium        | High           |
| Scalability | Moderate      | High           |
| Hosting     | Easy          | Requires setup |

## 9. Basic Syntax

```php
<?php
echo "Hello World";
?>
```

## 10. Variables & Data Types

```php
$name = "Abir"; $age = 25; $isActive = true; $skills = ["PHP", "JS"];
```

Data types:

- String
- Integer
- Float
- Boolean
- Array
- Object
- NULL

## 11. Constants

```php
define("SITE_NAME", "MyApp"); const VERSION = "1.0";
```

## 12. Control Structures

### If-Else

```php
if ($age >= 18) {   echo "Adult"; } else {   echo "Minor"; }
```

### Loops

```php
for ($i = 0; $i < 5; $i++) {   echo $i; }
```

## 13. Functions

```php
function add($a, $b) {   return $a + $b; }
```

## 14. Type Declarations (Modern PHP)

```php
function multiply(int $a, int $b): int {   return $a * $b; }
```

## 15. Arrays

### Indexed Array

```php
$numbers = [1, 2, 3];
```

### Associative Array

```php
$user = [   "name" => "Abir",   "role" => "admin" ];
```

## 16. Superglobals

- $\_GET
- $\_POST
- $\_REQUEST
- $\_SESSION
- $\_COOKIE
- $\_SERVER
- $\_FILES

```php
$name = $_POST["name"];
```

## 17. Forms Handling

```php
if ($_SERVER["REQUEST_METHOD"] === "POST") {   echo $_POST["email"]; }
```

## 18. Sessions & Cookies

```php
session_start(); $_SESSION["user_id"] = 1;

setcookie("token", "abc123", time() + 3600);
```

## 19. File Handling

```php
$file = fopen("test.txt", "w"); fwrite($file, "Hello"); fclose($file);
```

## 20. Database Connection (MySQL - PDO)

```php
$conn = new PDO(   "mysql:host=localhost;dbname=test",   "root",   "" );
```

## 21. CRUD Example

```php
$stmt = $conn->prepare("INSERT INTO users (name) VALUES (?)"); $stmt->execute(["Abir"]);
```

## 22. OOP in PHP

```php
class User {   public string $name;    public function __construct($name) {     $this->name = $name;   } }
```

## 23. Access Modifiers

- public
- private
- protected

## 24. Namespaces & Autoloading

```php
namespace App\Controllers;
```

Used heavily in modern PHP frameworks.

## 25. PHP Frameworks

- Laravel
- Symfony
- CodeIgniter
- Yii

Laravel is industry standard for modern PHP.

## 26. PHP in WordPress (Your Context)

- Theme development
- Plugin development
- Hooks & filters
- REST API extensions

## 27. Security Best Practices

- Input validation
- Prepared statements
- Password hashing
- CSRF protection
- XSS prevention

`password_hash("secret", PASSWORD_BCRYPT);`

## 28. Common Mistakes

- SQL injection vulnerabilities
- Mixing logic and HTML
- Not validating input
- Using deprecated functions

## 29. Interview Questions & Answers

### Beginner

Q: What is PHP?  
A: A server-side scripting language.

Q: What is a session?  
A: Server-side storage for user data.

### Intermediate

Q: Difference between GET and POST?  
A: GET is visible in URL, POST is not.

Q: What is PDO?  
A: Secure database abstraction layer.

### Advanced

Q: How PHP handles memory?  
A: Per-request lifecycle with garbage collection.

Q: How to prevent SQL injection?  
A: Prepared statements.
