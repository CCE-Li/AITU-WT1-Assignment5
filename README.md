# Assignment #5 — JavaScript Basics (DOM Manipulation & Events)

Web Technologies assignment that covers the fundamentals of JavaScript in the browser: variables and
operators, DOM manipulation, event handling, and a small interactive application built on top of them.

**Student:** LiYixin
**Group:** SE-2526
**University:** Astana IT University

## Live demo

The project is published with GitHub Pages:

**https://cce-li.github.io/AITU-WT1-Assignment5/**

## Project structure

```
.
├── index.html              Home page with the overview and links to every task
├── css/
│   └── style.css           Shared stylesheet for all pages
├── js/
│   ├── task0.js            ... one JavaScript file per task
│   ├── task1.js
│   ├── task2.js
│   ├── task3.js
│   ├── task4.js
│   ├── task5.js
│   ├── task6.js
│   ├── task7.js
│   └── task8.js
├── part1/
│   ├── task0.html          Task 0. First Script
│   └── task1.html          Task 1. Variables & Operators
├── part2/
│   ├── task2.html          Task 2. Changing Content
│   ├── task3.html          Task 3. Changing Styles
│   └── task4.html          Task 4. Creating & Removing Elements
├── part3/
│   ├── task5.html          Task 5. Mouse Events
│   ├── task6.html          Task 6. Keyboard Events
│   └── task7.html          Task 7. Calculator
└── part4/
    └── task8.html          Task 8. Interactive To-Do List
```

Every page is a separate file, and the navigation bar at the top links to all of them.

## Tasks

### Part 1. Introduction to JavaScript

| Task | Page | What it demonstrates |
| --- | --- | --- |
| Task 0. First Script | [part1/task0.html](part1/task0.html) | An HTML page that includes an external JavaScript file, prints the student's name and group with `console.log()`, and shows the alert "Hello, JavaScript World!" |
| Task 1. Variables & Operators | [part1/task1.html](part1/task1.html) | Variables of different data types (string, number, boolean), arithmetic operations and string concatenation, printed to the console |

### Part 2. DOM Manipulation

| Task | Page | What it demonstrates |
| --- | --- | --- |
| Task 2. Changing Content | [part2/task2.html](part2/task2.html) | A button that changes the text of a paragraph |
| Task 3. Changing Styles | [part2/task3.html](part2/task3.html) | A button that changes the background color of a `<div>` and another one that changes the font size of its text |
| Task 4. Creating & Removing Elements | [part2/task4.html](part2/task4.html) | "Add Item" creates a new `<li>` element, "Remove Item" deletes the last one |

### Part 3. Events

| Task | Page | What it demonstrates |
| --- | --- | --- |
| Task 5. Mouse Events | [part3/task5.html](part3/task5.html) | A box that changes color on `mouseover` and restores the original color on `mouseout` |
| Task 6. Keyboard Events | [part3/task6.html](part3/task6.html) | An input field whose value is shown in real time through the `keyup` event |
| Task 7. Calculator | [part3/task7.html](part3/task7.html) | A calculator that performs addition, subtraction, multiplication and division |

### Part 4. Mini Project

| Task | Page | What it demonstrates |
| --- | --- | --- |
| Task 8. Interactive To-Do List | [part4/task8.html](part4/task8.html) | Adds tasks from an input field, marks them as completed with a strike-through effect, deletes them, and keeps every task in a JavaScript array (no local storage) |

## How to run locally

The project is plain HTML, CSS and JavaScript, so no build step or dependencies are required.

1. Clone the repository:

   ```bash
   git clone https://github.com/CCE-Li/AITU-WT1-Assignment5.git
   cd AITU-WT1-Assignment5
   ```

2. Open `index.html` in a browser, or serve the folder with any static server:

   ```bash
   python -m http.server 8000
   ```

   and open <http://localhost:8000>.

3. Open the browser DevTools console (`F12` → Console) to see the output produced by the scripts.

## Notes

* Task 0 shows an alert dialog as soon as the page loads — this is required by the assignment.
* Tasks are stored in memory only. Reloading the to-do page clears the list, as requested.
* All interactive elements write their results to the browser console, which makes the JavaScript
  behaviour easy to observe during the assignment defense.

## Technologies

HTML5, CSS3 (Flexbox and Grid), vanilla JavaScript (ES6): `document.getElementById()`, `createElement()`,
`append()`, `remove()`, `addEventListener()`, event delegation, the `event` object and array methods
(`push()`, `find()`, `filter()`, `forEach()`).
