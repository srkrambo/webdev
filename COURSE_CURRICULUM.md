# 📚 Detailed Course Curriculum: Interactive Fullstack Web Development

This document provides a detailed, week-by-week breakdown of the curriculum. It is designed for learners with no prior technical experience and focuses on hands-on, interactive learning.

---

## 📖 Week 0: A Foundational Primer – "Hello, Web!"

**Objective:** To build a solid mental model of how websites work and to get comfortable with the basic tools and concepts before writing a single line of code.

| Topic | Core Concepts | Interactive Example | Exercise |
|-------|---------------|---------------------|----------|
| **1. What is Code?** | - Explaining code as a set of instructions for computers.<br>- Analogy: A recipe for a computer to follow.<br>- Difference between human language and programming language. | - Show a simple, non-scary code snippet (e.g., `<h1>Hello, World!</h1>`).<br>- Explain what it does in plain English. | - **Quiz:** Multiple-choice questions on what code is and its purpose. |
| **2. How Websites Work** | - The roles of the Client (your browser), the Server (where the website lives), and the Internet.<br>- What happens when you type a URL and press Enter.<br>- Introduction to HTML, CSS, and JavaScript as the "three pillars" of the web (Noun, Adjective, Verb). | - A visual diagram showing the client-server relationship.<br>- A live demo: Open browser developer tools to show the HTML of a popular website. | - **Drag-and-Drop:** Match terms (Client, Server, HTML, CSS, JS) to their descriptions. |
| **3. Your Toolkit** | - Introduction to the course's code editor and live preview.<br>- How to use the different panels (HTML, CSS, JS).<br>- The importance of the "Run" button. | - A guided tour of the user interface.<br>- Learners type "Hello!" into the HTML panel and see it appear in the preview. | - **Task:** Change the "Hello!" text to their own name and see the live update. |
| **4. Thinking in Steps** | - Introduction to computational thinking and breaking down problems.<br>- Analogy: Making a sandwich – you need to follow a sequence of steps.<br>- The concept of an algorithm as a step-by-step plan. | - Plan the steps to create a very simple "About Me" page (e.g., 1. Add a heading. 2. Add a paragraph. 3. Add a picture). | - **Sequencing:** Order a jumbled list of steps to correctly describe a simple task (like making tea). |

---

## 💻 Weeks 1-16: The Core Curriculum

---

### ⭐ Week 1: HTML Fundamentals – Building a Web Page

**Objective:** Learn the essential tags and concepts to structure any web page, from basic text to complex tables.

| Topic | Core Concepts | Interactive Example | Exercise |
|-------|---------------|---------------------|----------|
| **1. Document Structure** | - The `<!DOCTYPE>`, `<html>`, `<head>`, and `<body>` elements.<br>- The role of the `<head>`: `<title>`, `<meta>` for charset and viewport. | - Create a boilerplate `index.html` file with all necessary structural tags. | - **Task:** Create a new HTML page and give it a unique title that appears in the browser tab. |
| **2. Text & Headings**| - Headings (`<h1>`-`<h6>`), Paragraphs (`<p>`).<br>- Text formatting: `<strong>`, `<em>`, `<b>`, `<i>`, `<mark>`, `<small>`, `<del>`, `<ins>`, `<sub>`, `<sup>`.<br>- Quotations: `<blockquote>`, `<q>`, `<abbr>`, `<address>`, `<cite>`. | - Build a blog post with a main title, subtitles, and paragraphs containing various text formatting. | - **Challenge:** Recreate a Wikipedia-style article intro with headings, a blockquote, and citations. |
| **3. Links & Attributes** | - The `<a>` tag for hyperlinks.<br>- The `href`, `target`, and `title` attributes.<br>- Linking to external pages, internal sections (`#id`), and email (`mailto:`). | - Create a personal "About Me" page with a link to your favorite website and a link to a "Contact" section further down the page. | - **Task:** Create an image that acts as a link. |
| **4. Images & File Paths** | - The `<img>` tag.<br>- `src` and `alt` attributes.<br>- Understanding relative vs. absolute file paths.<br>- Adding a `<link>` for a favicon. | - Build a photo gallery. Images should be in a separate `/images` folder. Add a custom favicon to the page. | - **Challenge:** Create a "company logo" section where the logo is a clickable link to the homepage. |
| **5. Lists & Tables** | - Unordered (`<ul>`), Ordered (`<ol>`), and Description (`<dl>`) lists.<br>- **Tables Deep Dive:** `<table>`, `<thead>`, `<tbody>`, `<tfoot>`, `<tr>`, `<th>`, `<td>`.<br>- Spanning columns (`colspan`) and rows (`rowspan`). | - Create a "Top 5" list and a recipe with ingredients in a `<ul>` and instructions in an `<ol>`.<br>- Build a complex table showing a weekly schedule with merged cells for longer events. | - **Task:** Create a product comparison table with features listed for multiple products. |
| **6. Structural Elements** | - Block vs. Inline elements.<br>- Generic containers: `<div>` (block) and `<span>` (inline).<br>- Grouping with `class` and uniquely identifying with `id`.<br>- Using comments `<!-- ... -->` to organize code. | - Structure a basic page layout using `<div>`s for a header, main content, and footer. Assign appropriate `id`s and `class`es. | - **Challenge:** Refactor the blog post from earlier to use `<div>`s to group the article header and content separately. |

---

### ⭐ Week 2: Semantic HTML & Advanced Topics

**Objective:** Move beyond basic structure to write more meaningful, accessible, and feature-rich HTML using modern best practices.

| Topic | Core Concepts | Interactive Example | Exercise |
|-------|---------------|---------------------|----------|
| **1. Semantic Layout** | - Why semantics matter (SEO, accessibility, clarity).<br>- Layout tags: `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`, `<aside>`. | - Rebuild the `<div>`-based layout from Week 1 using the new semantic layout tags. | - **Challenge:** Create the semantic structure for a news website homepage with a main header, multiple `<article>` sections, and a sidebar (`<aside>`). |
| **2. Forms Deep Dive** | - The `<form>` element and its attributes (`action`, `method`).<br>- **Form Controls:** `<label>`, `<input>` (all major types: text, password, checkbox, radio, submit, button, number, date, color, range, file), `<textarea>`, `<select>` with `<option>` and `<optgroup>`, `<fieldset>`, `<legend>`.<br>- **Input Attributes:** `name`, `value`, `placeholder`, `required`, `readonly`, `disabled`, `maxlength`. | - Build a comprehensive "User Registration" form with fields for all common data types, organized with fieldsets. | - **Challenge:** Create a "Settings" page form with various controls like a color picker for theme, a range slider for font size, and checkboxes for notification preferences. |
| **3. Media: Audio & Video**| - The `<audio>` and `<video>` elements.<br>- Common attributes: `src`, `controls`, `autoplay`, `muted`, `loop`.<br>- Providing multiple source files for compatibility. | - Embed a product demo video with controls enabled. Below it, add an audio player for a testimonial. | - **Task:** Create a video background for a webpage's hero section (autoplayed, muted, looped). |
| **4. Graphics: SVG & Canvas** | - **SVG:** Introduction to Scalable Vector Graphics. Embedding an SVG file with `<img>` or using inline `<svg>` tags for simple shapes.<br>- **Canvas:** Introduction to the `<canvas>` element for drawing graphics with JavaScript. | - Display a company logo using an SVG file.<br>- Use a simple `<canvas>` element to draw a colored rectangle (JavaScript interaction will be minimal for now). | - **Challenge:** Find a simple icon online as an SVG and embed its code directly into your HTML page. |
| **5. Advanced & Meta** | - The `<iframe>` for embedding external content.<br>- Character Entities (`&copy;`, `&amp;`), Symbols, and Emojis.<br>- The importance of `charset` and `URL encoding`.<br>- A brief look at how CSS and JavaScript are connected to HTML. | - Embed a Google Map into a "Contact Us" page using an `<iframe>`. | - **Task:** Write a paragraph that includes special characters, a copyright symbol, and an emoji using their HTML entity codes. |

---

### ⭐ Week 3: CSS Fundamentals – Styling the Web

**Objective:** Learn the core CSS properties that control the look and feel of your website, from colors and backgrounds to the essential box model.

| Topic | Core Concepts | Interactive Example | Exercise |
|-------|---------------|---------------------|----------|
| **1. Applying CSS** | - 3 ways to apply CSS: Inline, Internal (`<style>`), and External (`<link>`).<br>- CSS Syntax: `selector { property: value; }`.<br>- Basic Selectors: Element, ID (`#`), Class (`.`), and grouping. | - Style a simple HTML page using all three methods to see how they interact and which one takes precedence. | - **Challenge:** Create an external stylesheet that sets a default background color for the `<body>` and a different color for all `<p>` tags. |
| **2. Colors & Backgrounds**| - `color` for text.<br>- `background-color`.<br>- `background-image`, `background-repeat`, `background-position`, `background-attachment`.<br>- Color formats: HEX, RGB, HSL. | - Style a "hero" section of a webpage with a large background image and a semi-transparent color overlay to make the text readable. | - **Task:** Create a "card" element with a solid background color and a different text color. |
| **3. The Box Model** | - **Deep Dive:** `margin`, `padding`, `border`, `width`, `height`.<br>- Understanding how every element is a box.<br>- `border-width`, `border-style`, `border-color`, and shorthand.<br>- Margin collapsing. | - Create a gallery of images. Use padding to create space inside each image's border, and margin to create space between the images. | - **Challenge:** Create a layout with two boxes side-by-side and precisely control the space between them and around them using margins. |
| **4. Text & Font Styling** | - `font-family` (websafe & fallbacks), `font-size` (px, em, rem), `font-weight`, `font-style`.<br>- `text-align`, `text-decoration`, `text-transform`, `line-height`, `letter-spacing`.<br>- Using Google Fonts. | - Style a blog article to be highly readable, using a serif font for the body, a sans-serif font for headings, and proper line height. | - **Challenge:** Create a "fancy" heading with a custom Google Font, text shadow, and uppercase transformation. |

---

### ⭐ Week 4: Intermediate CSS – Layouts & Styling

**Objective:** Go beyond basic properties to learn how to position elements, style common HTML components like lists, tables, and forms.

| Topic | Core Concepts | Interactive Example | Exercise |
|-------|---------------|---------------------|----------|
| **1. Positioning** | - The `position` property: `static`, `relative`, `absolute`, `fixed`, `sticky`.<br>- `top`, `right`, `bottom`, `left`.<br>- The `z-index` property for stacking elements. | - Create a "sticky" navigation bar that stays at the top of the screen when scrolling. Add a "Back to Top" button that is `fixed` to the bottom-right. | - **Challenge:** Create a modal pop-up window that appears in the center of the screen over a dark overlay. |
| **2. Display & Float** | - The `display` property: `block`, `inline`, `inline-block`, `none`.<br>- The legacy `float` property and the `clear` fix for clearing floats.<br>- Understanding when to use `display` vs. `position`. | - Build a simple two-column layout where a sidebar `float`s to the left of the main content. Use the `clear` property in the footer. | - **Task:** Create a horizontal navigation menu by setting list items to `display: inline-block`. |
| **3. Styling Lists & Links** | - Removing default list styles (`list-style-type`).<br>- Styling links with pseudo-classes: `:link`, `:visited`, `:hover`, `:active`.<br>- Using attribute selectors to style links (e.g., `a[target="_blank"]`). | - Style a navigation menu: remove bullets, add padding, and create a hover effect where the background color changes. | - **Challenge:** Create custom-styled "bullet points" for a list using CSS pseudo-elements. |
| **4. Styling Tables & Forms**| - **Tables:** `border-collapse`, styling `<th>` vs `<td>`, zebra-striping with `:nth-child()`.<br>- **Forms:** Styling inputs, textareas, buttons, and labels. Styling inputs based on state (`:focus`, `:required`, `:valid`, `:invalid`). | - Style the "User Registration" form from Week 2 to be clean and user-friendly.<br>- Style the "Weekly Schedule" table from Week 1 with collapsed borders and alternating row colors. | - **Challenge:** Create a "search" input field that gets a glowing border when it is in focus. |

---

### ⭐ Week 5: Modern CSS Layouts – Flexbox & Grid

**Objective:** Master the two modern CSS layout modules, Flexbox and Grid, to build any kind of responsive web layout with ease.

| Topic | Core Concepts | Interactive Example | Exercise |
|-------|---------------|---------------------|----------|
| **1. Flexbox Intro** | - What is Flexbox? 1-dimensional layout.<br>- The Flex Container (`display: flex`) and Flex Items.<br>- Main axis and Cross axis. | - Create a container `<div>` and turn it into a flex container. Watch how the child items align. | - **Task:** Create a simple row of three boxes. |
| **2. Flex Container** | - `flex-direction` (row, column).<br>- `justify-content` (aligning on the main axis).<br>- `align-items` (aligning on the cross axis).<br>- `flex-wrap` for wrapping items.<br>- `gap` for spacing. | - Build a perfectly centered login form in the middle of the page.<br>- Build a responsive navigation bar that wraps on smaller screens. | - **Challenge:** Create a "card" component with a header, body, and footer, where the footer is always pushed to the bottom, regardless of content height. |
| **3. Grid Intro** | - What is Grid? 2-dimensional layout.<br>- The Grid Container (`display: grid`).<br>- `grid-template-columns` and `grid-template-rows`.<br>- The `fr` unit for flexible tracks. | - Create a simple 3-column photo gallery layout using `grid`. | - **Task:** Create a basic 2x2 grid of colored boxes. |
| **4. Grid Container** | - `grid-gap` / `gap` for spacing.<br>- Explicitly placing items with `grid-column` and `grid-row`.<br>- Spanning items across tracks.<br>- `grid-template-areas` for named layouts. | - Build a full-page "Holy Grail" layout (header, left-sidebar, main content, right-sidebar, footer) using `grid-template-areas`. | - **Challenge:** Create a complex dashboard layout with items of different sizes spanning multiple columns and rows. |

---

### ⭐ Week 6: Advanced CSS & Responsive Design

**Objective:** Add professional polish to your websites with animations and advanced techniques, and ensure they work perfectly on all devices.

| Topic | Core Concepts | Interactive Example | Exercise |
|-------|---------------|---------------------|----------|
| **1. Transitions** | - The `transition` property.<br>- Animating properties on state change (like `:hover`).<br>- `transition-property`, `transition-duration`, `transition-timing-function`, `transition-delay`. | - Create a button that smoothly changes color and size when the user hovers over it. | - **Challenge:** Build a "card" that flips over on hover to reveal more information (using `transform` and `transition`). |
| **2. Animations** | - `@keyframes` for defining animation sequences.<br>- The `animation` property and its sub-properties (`animation-name`, `animation-duration`, `animation-iteration-count`, etc.). | - Create a loading spinner using a looping `@keyframes` animation. | - **Challenge:** Make a heading that animates in from the side of the page when the page loads. |
| **3. Advanced Techniques**| - CSS Variables (`--main-color: blue;`) for reusable values.<br>- `calc()` to perform calculations.<br>- Advanced selectors: pseudo-elements (`::before`, `::after`), attribute selectors (`[type="..."]`).<br>- Gradients (`linear-gradient`, `radial-gradient`). | - Create a themeable website where changing a few CSS variables at the root level changes the entire site's color scheme.<br>- Use `::before` to add decorative quotes to a `<blockquote>`. | - **Task:** Create a button with a gradient background. |
| **4. Responsive Design** | - **Deep Dive:** The Mobile-First approach.<br>- Media Queries (`@media`) for applying styles based on screen size, orientation, and resolution.<br>- Making images and videos responsive.<br>- Building responsive typography. | - Take the "Holy Grail" layout from Week 5 and make it fully responsive. The sidebars should stack on top of the main content on mobile screens. | - **Challenge:** Create a responsive pricing table that is a horizontal row on desktop and stacks vertically on mobile. |

---

### ⭐ Week 7: JavaScript Fundamentals

**Objective:** Learn the basic building blocks of JavaScript, including variables, data types, operators, and control flow.

| Topic | Core Concepts | Interactive Example | Exercise |
|-------|---------------|---------------------|----------|
| **1. Intro to JS** | - Adding JS to a page (`<script>` tag).<br>- Statements, Syntax, Comments.<br>- `console.log()` for debugging. | - Write your first script that logs "Hello, World!" to the browser console. | - **Task:** Create an HTML page with a script that logs a message of your choice. |
| **2. Variables & Scope** | - Declaring variables with `var`, `let`, and `const`.<br>- Understanding global, function, and block scope.<br>- Hoisting. | - Write a script that shows the difference between `let` and `var` inside a loop. | - **Challenge:** Create a script with a global variable and a function that tries to modify it. |
| **3. Data Types** | - Primitives: String, Number, Boolean, Null, Undefined, BigInt, Symbol.<br>- The Object data type.<br>- The `typeof` operator. | - Create variables of different data types and log their `typeof` to the console. | - **Quiz:** Match the data type to its description (e.g., "true or false" -> Boolean). |
| **4. Operators** | - Arithmetic (`+`, `-`, `*`, `/`, `%`, `**`).<br>- Assignment (`=`, `+=`, `-=`).<br>- Comparison (`==`, `===`, `!=`, `!==`, `>`, `<`).<br>- Logical (`&&`, `||`, `!`). | - Write a script that takes a number and checks if it is even and greater than 10. | - **Task:** Write a script to calculate the area of a rectangle. |
| **5. Control Flow** | - Conditional statements: `if`, `else if`, `else`.<br>- The `switch` statement.<br>- Loops: `for`, `while`, `do...while`.<br>- `break` and `continue`. | - Write a `for` loop that prints numbers 1 to 10. If a number is 7, `break` the loop.<br>- Write a `switch` statement that logs a different message for different days of the week. | - **Challenge:** Write a "FizzBuzz" program. Loop from 1 to 100; for multiples of 3 print "Fizz", for 5 print "Buzz", and for both print "FizzBuzz". |

---

### ⭐ Week 8: JavaScript Core Concepts – Functions, Objects, & Arrays

**Objective:** Master the core pillars of JavaScript: functions for reusable logic, objects for structured data, and arrays for collections.

| Topic | Core Concepts | Interactive Example | Exercise |
|-------|---------------|---------------------|----------|
| **1. Functions** | - Defining functions (declarations, expressions, arrow functions).<br>- Parameters and default values.<br>- The `return` statement.<br>- The `this` keyword in different contexts. | - Create a function `calculateTax(price, rate = 0.07)` that returns the price plus tax. | - **Challenge:** Write a function that acts as a simple calculator, taking two numbers and an operator (`+`, `-`, etc.) as input. |
| **2. Objects** | - Object literals `{}`.<br>- Accessing properties (dot vs. bracket notation).<br>- Object methods (functions as properties).<br>- Object constructors and the `new` keyword. | - Create a `user` object with properties like `firstName`, `lastName`, and a method `getFullName()` that returns the full name. | - **Challenge:** Create a `Car` constructor to produce multiple car objects with properties like `make`, `model`, and `year`. |
| **3. Arrays** | - Array literals `[]`.<br>- Accessing elements by index.<br>- Common properties like `length`.<br>- Basic methods: `push`, `pop`, `shift`, `unshift`, `splice`. | - Create an array of your favorite foods. Add a new one, then remove the first one. | - **Task:** Create a "shopping list" array and write functions to `addItem` and `removeItem`. |
| **4. Advanced Array Methods**| - **Iteration Deep Dive:** `forEach`, `map`, `filter`, `reduce`, `find`, `findIndex`, `some`, `every`.<br>- `sort()` with a compare function.<br>- `slice`, `concat`, `join`. | - Given an array of numbers, use `map` to create a new array with each number doubled.<br>- Given an array of objects, use `filter` to find all users older than 30. | - **Challenge:** Given an array of products with prices, use `reduce` to calculate the total cost of all items in a shopping cart. |

---

### ⭐ Week 9: The Document Object Model (DOM)

**Objective:** Learn how to use JavaScript to interact with and dynamically control the content and structure of a web page.

| Topic | Core Concepts | Interactive Example | Exercise |
|-------|---------------|---------------------|----------|
| **1. DOM Intro** | - What is the DOM? The document as a tree of nodes.<br>- The `window` vs. the `document` object. | - Open the browser console on any page and inspect the `document` object. | - **Task:** Log `document.body` to the console. |
| **2. Selecting Elements**| - `getElementById`, `getElementsByTagName`, `getElementsByClassName`.<br>- Modern methods: `querySelector` (for one) and `querySelectorAll` (for many). | - Select a `<p>` tag by its ID and change its text color using the console. | - **Challenge:** Select all elements with a specific class (`.card`) and add a border to each one using a loop. |
| **3. Manipulating Elements** | - Getting/setting content: `textContent` vs. `innerHTML`.<br>- Modifying attributes: `getAttribute`, `setAttribute`, `removeAttribute`.<br>- Modifying styles: `element.style`.<br>- Modifying classes: `classList` (`add`, `remove`, `toggle`). | - Build a "Light/Dark Mode" toggle button that adds/removes a `.dark-mode` class to the `<body>`. | - **Challenge:** Create an image carousel where clicking "next" and "prev" buttons changes the `src` attribute of an `<img>` tag. |
| **4. Events** | - **Event Handling:** `addEventListener` and `removeEventListener`.<br>- Common events: `click`, `mouseover`, `mouseout`, `keydown`, `keyup`, `submit`, `change`, `load`.<br>- The `event` object.<br>- Event bubbling, capturing, and delegation. | - Create a form that logs the input value to the console only when the "submit" button is clicked, preventing the page from reloading (`event.preventDefault()`). | - **Challenge:** Build an interactive "Todo List". Use event delegation on the `<ul>` to handle clicks on "delete" buttons for each todo item. |
| **5. Creating & Deleting** | - `document.createElement()`.<br>- Appending elements: `appendChild`, `prepend`, `before`, `after`.<br>- Removing elements: `removeChild`, `element.remove()`. | - Extend the Todo List: when the form is submitted, create a new `<li>` element and append it to the `<ul>`. | - **Challenge:** In the Todo List, when a "delete" button is clicked, remove the entire `<li>` parent element from the DOM. |

---

### ⭐ Week 10: Asynchronous JavaScript & Web APIs

**Objective:** Understand how to handle asynchronous operations and interact with browser APIs to fetch data and build more powerful applications.

| Topic | Core Concepts | Interactive Example | Exercise |
|-------|---------------|---------------------|----------|
| **1. Asynchronous JS** | - The Event Loop, Call Stack, and Callback Queue.<br>- Callbacks and "Callback Hell".<br>- **Promises:** `new Promise()`, `.then()`, `.catch()`, `.finally()`.<br>- `async` and `await` syntax for cleaner async code. | - Use `setTimeout` to simulate a network request that takes 2 seconds to complete, using a callback to handle the result.<br>- Convert the `setTimeout` example to use a Promise. | - **Challenge:** Create a function that returns a Promise which resolves with a random number after 1 second. |
| **2. Fetch API** | - Making network requests with `fetch()`.<br>- Handling the response Promise.<br>- Using the `.json()` method to parse data.<br>- Handling `fetch` errors. | - Use the Fetch API to get data from a public API (e.g., a random user API) and display the user's name on the page. | - **Challenge:** Create a weather app. Fetch data from a weather API and display the current temperature for a city the user inputs. |
| **3. JSON** | - What is JSON (JavaScript Object Notation)?<br>- Syntax rules.<br>- `JSON.stringify()` (JS object to JSON string).<br>- `JSON.parse()` (JSON string to JS object). | - Create a JS object, convert it to a JSON string, and then parse it back into an object. | - **Task:** Store a complex object in `localStorage` by first stringifying it. |
| **4. Web Storage** | - `localStorage` vs. `sessionStorage`.<br>- `setItem()`, `getItem()`, `removeItem()`, `clear()`.<br>- Storing strings vs. complex data with JSON. | - Create a form where the user can input their name. Save the name to `localStorage`. When they revisit the page, greet them by name. | - **Challenge:** Build a "Settings" page where user preferences (e.g., theme, notifications) are saved as an object in `localStorage`. |

---

### ⭐ Week 11: Modern JavaScript & Project Structure

**Objective:** Learn modern JavaScript features like modules and classes, and how to structure code for larger, more maintainable applications.

| Topic | Core Concepts | Interactive Example | Exercise |
|-------|---------------|---------------------|----------|
| **1. ES6+ Features** | - Destructuring (arrays and objects).<br>- Spread (`...`) and Rest (`...`) operators.<br>- Template Literals with `${}`.<br>- A deeper look at Arrow Functions. | - Refactor a function that takes an object as an argument to use destructuring for its parameters.<br>- Use the spread operator to merge two arrays. | - **Task:** Convert a string concatenation to use a template literal. |
| **2. JS Modules** | - The need for modules.<br>- `export` and `import` (named vs. default).<br>- Structuring code across multiple files.<br>- Using `<script type="module">`. | - Create a `math.js` file that exports `add` and `subtract` functions. Import and use them in a `main.js` file. | - **Challenge:** Refactor the Todo App logic into multiple files: one for DOM manipulation, one for `localStorage` logic, and a main script. |
| **3. Error Handling** | - `try...catch...finally` blocks.<br>- The `Error` object.<br>- `throw` for creating custom errors. | - Wrap a `JSON.parse()` call in a `try...catch` block to handle cases where the string is not valid JSON. | - **Task:** Modify the weather app to show a user-friendly error message if the `fetch` call fails. |
| **4. Project: Refined Todo App** | - Rebuild the Todo app from scratch using all advanced concepts.<br>- **Structure:** Use JS Modules.<br>- **Data:** Use a `class` to define a Todo item.<br>- **Logic:** Handle all events and `localStorage` interactions within specific modules.<br>- **Error Handling:** Use `try...catch` for data parsing. | - A complete, well-structured, multi-file Todo application that is robust and maintainable. | - **Final Challenge for this week:** Add an "edit" functionality to the Todo app. |

---

---

## 📖 Phase 2: Advanced Projects & Backend Integration

---

### ⭐ Week 12: Project - Building an Admin Panel UI

**Objective:** Apply advanced HTML and CSS skills to build a complex, responsive, multi-view dashboard layout, as outlined in the `README`.

| Phase | Description | Key Skills |
|-------|-------------|------------|
| **1. Planning & Layout** | - Design a wireframe for a multi-view admin panel (e.g., Dashboard, Users, Products).<br>- Build the main shell using CSS Grid and/or Flexbox for a fixed sidebar and main content area. | UI/UX Planning, CSS Grid, Flexbox, Semantic HTML |
| **2. Building Views** | - Create the different "pages" or "views" as separate sections within the HTML.<br>- Build out the UI for each view: data tables for Users/Products, summary cards for the Dashboard. | `<table>` styling, `class`-based visibility |
| **3. UI Components** | - Build and style common UI components needed for the panel.<br>- Create a reusable modal (pop-up window) for creating/editing items.<br>- Style all form elements for a consistent and professional look and feel. | Advanced CSS, `:focus` states, CSS Variables |
| **4. Responsiveness** | - Use media queries to ensure the entire admin panel is usable on all screen sizes.<br>- The sidebar should collapse or stack on mobile.<br>- Tables should be scrollable or reformat on small screens. | Responsive Design, Media Queries, Mobile-First thinking |

---

### ⭐ Week 13: Project - Admin Panel CRUD Logic

**Objective:** Use advanced JavaScript to wire up the Admin Panel, creating a full CRUD application that runs on `localStorage`.

| Phase | Description | Key Skills |
|-------|-------------|------------|
| **1. State Management** | - Create a global `state` object in JavaScript to be the single source of truth for all data (users, products, etc.).<br>- Write functions to initialize the state from `localStorage`. | JS Objects, `localStorage`, `JSON.parse` |
| **2. Rendering from State** | - Write `render` functions that take the state data and build the HTML for the tables and views.<br>- When data changes, the app should re-render the relevant parts of the UI. | DOM Manipulation (`createElement`, `innerHTML`), Array Methods (`.map`, `.forEach`) |
| **3. Create & Update** | - Wire up the "Create New" modal form.<br>- On submit, add the new item to the state array, save to `localStorage`, and re-render the view.<br>- Implement the "Edit" button to pre-fill the form and update an existing item in the state. | Event Handling, Form Validation, Array Methods (`.push`, `.findIndex`) |
| **4. Delete & View Switching**| - Implement the "Delete" button with a confirmation step.<br>- Wire up the navigation links in the sidebar to switch between different views by changing a `currentView` property in the state and re-rendering. | Event Delegation, Array `.filter()`, State Management |

---

### ⭐ Week 14: Introduction to Backend with PHP

**Objective:** Get a gentle introduction to server-side programming to understand how a real backend works.

| Topic | Core Concepts | Interactive Example | Exercise |
|-------|---------------|---------------------|----------|
| **1. What is a Backend?** | - Client vs. Server revisited.<br>- The role of a backend: handling requests, interacting with a database, business logic.<br>- Intro to PHP: basic syntax, variables, and `echo`. | - Set up a local PHP server.<br>- Create a `hello.php` file that prints "Hello, World!". | - **Task:** Create a PHP script that prints your name and age. |
| **2. Handling Requests** | - How the web works: HTTP GET and POST requests.<br>- Reading request data in PHP using `$_GET` and `$_POST`. | - Create a simple HTML form that sends data to a PHP script via a POST request. The PHP script will then `echo` back the data it received. | - **Challenge:** Create a simple calculator where two numbers are sent from a form to a PHP script that calculates and displays the sum. |
| **3. Working with Files** | - Simulating a database using a JSON file.<br>- Reading from a file in PHP: `file_get_contents`.<br>- Writing to a file in PHP: `file_put_contents`.<br>- Working with JSON data: `json_encode`, `json_decode`. | - Create a `GET` endpoint (`/api/users.php`) that reads an array of users from a `users.json` file and prints it. | - **Task:** Test the new API endpoint by visiting the URL in your browser. |
| **4. Building a Basic API** | - Creating a simple router to handle different request types (e.g., `if ($_SERVER['REQUEST_METHOD'] === 'POST')`).<br>- Implementing a `POST` endpoint that receives new user data, adds it to the JSON file, and saves it. | - Create a `POST` endpoint for your users API. Use a tool like Postman or `fetch` in the browser console to send a POST request and add a new user. | - **Challenge:** Add logic to your API to handle deleting a user based on an ID sent in the request. |

---

### ⭐ Week 15: Connecting Frontend to a Real Backend

**Objective:** Complete the full-stack loop by replacing the `localStorage` logic in the Admin Panel with `fetch` calls to the new PHP backend.

| Phase | Description | Key Skills |
|-------|-------------|------------|
| **1. Reading Data** | - In the Admin Panel JavaScript, remove the `localStorage.getItem` logic.<br>- Replace it with a `fetch` call to your `GET` `/api/users.php` endpoint.<br>- Populate the initial state with the data from the server. | `fetch`, Promises, `async/await`, `useEffect`-like logic on page load |
| **2. Creating Data** | - Modify the "Create New" form submission logic.<br>- Instead of pushing to a local array and saving to `localStorage`, send a `POST` request with the new data to your PHP API using `fetch`. | `fetch` with `method: 'POST'`, setting `headers` and `body` |
| **3. Updating Data** | - Implement the "Update" functionality.<br>- This will require a new API endpoint in PHP that can identify a user by ID and update their data.<br>- The frontend will send a `POST` or `PUT` request with the updated data. | `fetch` with `method: 'POST'`, API routing |
| **4. Deleting Data** | - Implement the "Delete" functionality.<br>- Create a "delete" API endpoint in PHP that removes a user based on an ID.<br>- The frontend will send a `POST` or `DELETE` request to this endpoint. | `fetch` with `method: 'POST'`, handling request parameters |

---

### ⭐ Week 16: Final Capstone Project – Build Your Own Website

**Objective:** Synthesize all skills learned across the entire 15-week curriculum to design, build, and deploy a complete, interactive, full-stack-simulated website from scratch. The project is chosen by the learner to maximize engagement.

| Phase | Description | Key Skills |
|-------|-------------|------------|
| **1. Ideation & Design** | - Brainstorm project ideas (e.g., portfolio, recipe book, simple game, product landing page).<br>- Plan the features and draw a simple wireframe of the UI. | Project planning, UI/UX thinking |
| **2. Scaffolding & UI** | - Set up the project files and structure.<br>- Build the complete HTML and CSS for the user interface.<br>- Ensure the design is responsive. | HTML, CSS, Responsive Design, Flexbox/Grid |
| **3. Core Logic & Interactivity** | - Implement the main functionality using JavaScript.<br>- Manipulate the DOM, handle user events, and manage application state. | JavaScript, DOM Manipulation, Events, Functions, State Management |
| **4. Data Persistence** | - Integrate `localStorage` to save and retrieve data, so the user's work persists across sessions. | `localStorage`, JSON, CRUD operations |
| **5. Final Polish & Export** | - Add finishing touches, test for bugs, and ensure a good user experience.<br>- Export the final project files as a complete, standalone website. | Debugging, Testing, Code Quality |
