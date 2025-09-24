# 📚 Phase 1 Curriculum: Interactive Fullstack Web Development (Frontend-Only)

## 🎯 Objective
Teach learners with no technical background to build complete, interactive websites using HTML, CSS, and JavaScript. Backend behavior is simulated entirely in-browser. Course includes exercises, quizzes, and code challenges with test cases. Learners earn verifiable certificates upon completion.

---

## 🧱 Technology Stack

### 🔹 Frontend
- **HTML5** – Structure and semantics
- **CSS3** – Styling and responsive design
- **JavaScript (ES6+)** – Interactivity and logic
- **Custom Code Editor** – Textarea-based with live preview
- **iframe.srcdoc** – Real-time rendering of learner code

### 🔹 Backend Simulation
- **localStorage** – CRUD simulation and progress tracking
- **JavaScript Test Harness** – Validates learner code against test cases

### 🔹 Authentication
- **Gmail Login (OAuth 2.0)** – Single sign-on for learners

### 🔹 Backend (PHP)
- **Progress Tracking** – Stores learner module status
- **Course Purchase & Access Control** – Paid course management
- **Certificate Issuance** – Generates verifiable certificates
- **Quiz & Code Submission API** – Validates and stores learner responses

---

## 🗂️ Course Modules (12 Weeks)

| Week | Module | Outcome |
|------|--------|---------|
| 1 | HTML Basics | Create static pages with headings, links, images |
| 2 | CSS Styling | Apply colors, fonts, spacing, layout |
| 3 | JavaScript Basics | Use variables, functions, events |
| 4 | DOM Manipulation | Modify page content dynamically |
| 5 | Forms & Validation | Build forms and validate input |
| 6 | Simulated REST API | CRUD with localStorage |
| 7 | Project: Todo App | Full CRUD app with form, list, delete |
| 8 | Responsive Design | Mobile-first layouts with media queries |
| 9 | Component Thinking | Reusable UI blocks with vanilla JS |
| 10 | Admin Panel UI | Dashboard layout with multiple views |
| 11 | Admin Panel Logic | CRUD logic for users/products/posts |
| 12 | Final Project | Build and export a complete website

---

## 🧪 Learning Features

### 🔸 Exercises
- Embedded in each module
- Auto-run with live preview
- Stored locally and synced to backend

### 🔸 Quizzes
- Multiple-choice questions
- Instant feedback
- Score stored in PHP backend

### 🔸 Code Challenges
- Problem statement + editor
- Test cases run in-browser
- Results synced to backend

---

## 🔐 Authentication & Access

- Gmail login via OAuth 2.0
- Learner profile stored in PHP backend
- Course access gated by purchase status
- Certificate issued upon completion

---

## 🛠️ Implementation Strategy

### 🔹 Frontend
- HTML shell with:
  - Code editor
  - Live preview
  - Tabs for HTML/CSS/JS
  - Run button
  - Quiz and exercise panels

### 🔹 Backend (PHP)
- `login.php` – Gmail OAuth handler
- `progress.php` – Tracks learner progress
- `purchase.php` – Handles course buying
- `submit.php` – Stores quiz/code results
- `certificate.php` – Generates downloadable certificate

---

## 📦 Deployment

- Frontend hosted statically (HTML/CSS/JS)
- Backend hosted on PHP server
- All communication via secure HTTPS
- No third-party tracking, privacy-first

