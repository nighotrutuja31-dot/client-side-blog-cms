# 📝 Blogify – Client-Side Blog CMS

**Blogify** is a modern, responsive, and interactive **Client-Side Blog Content Management System (CMS)** developed using **HTML5, CSS3, and JavaScript**.

The application allows users to create, manage, edit, preview, search, filter, publish, save drafts, like, and delete blog posts. Blog data is stored directly in the browser using **LocalStorage**, so no backend server or database is required.

---

## 📌 Project Overview

Blogify provides a clean and professional interface for managing blog content completely on the client side.

The project demonstrates how JavaScript can be used to build a functional content management system with CRUD operations and browser-based data persistence.

The application includes a modern dashboard, image-based blog cards, featured stories, search functionality, category/status filtering, post previews, and responsive design.

---

## 🎯 Objective

The main objectives of this project are:

- Build a functional client-side Blog CMS
- Implement CRUD operations using JavaScript
- Store blog data using LocalStorage
- Allow users to create and edit blog posts
- Support Draft and Published statuses
- Add cover images to blog posts
- Implement post search and filtering
- Provide a complete blog post preview
- Create a responsive and professional user interface

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Structure and content |
| CSS3 | Styling, animations and responsive design |
| JavaScript | Application logic and CRUD functionality |
| LocalStorage | Client-side data persistence |
| JSON | Data serialization and storage |

---

## ✨ Main Features

### 📝 Create Blog Posts

Users can create a new story by entering:

- Cover Image URL
- Story Title
- Author
- Category
- Short Description
- Story Content
- Publication Status
- Featured Status

---

### ✏️ Edit Blog Posts

Existing blog posts can be edited without creating duplicate posts.

The application uses the unique post ID to identify and update the selected story.

---

### 🗑️ Delete Blog Posts

Users can delete unwanted posts.

A confirmation dialog is displayed before permanently removing a post.

---

### 📢 Published and 📄 Draft Posts

Every post can have one of two publication statuses:

```text
📢 Published
📄 Draft
```

Users can filter the content based on these statuses.

---

### ⭐ Featured Posts

Users can mark important stories as:

```text
⭐ Featured
```

Featured stories can be viewed separately using the Featured filter.

---

### 🖼️ Cover Images

Each blog post can contain a cover image.

Users can provide an image URL while creating a post.

The application also provides an image preview before saving the story.

If no image URL is provided, a default technology image is automatically used.

---

### 🔍 Search

Users can search blog posts by:

- Title
- Author
- Category
- Content

Search results update dynamically while typing.

---

### 🔽 Post Filtering

Blog posts can be filtered using:

```text
All
Published
Drafts
⭐ Featured
```

---

### 👁️ Post Preview

Users can preview a complete blog article before closing or editing it.

The preview displays:

- Cover image
- Category
- Title
- Author
- Publication date
- Status
- Reading time
- Full blog content

---

### ❤️ Like System

Users can like blog posts.

The total number of likes is automatically displayed on the dashboard.

---

### ⏱️ Reading Time

The application automatically calculates an estimated reading time based on the number of words in the blog content.

Example:

```text
⏱ 1 min
```

---

### 📊 Dashboard Statistics

The dashboard displays:

```text
Total Posts
Published Posts
Draft Posts
Total Likes
```

The statistics are automatically updated whenever content changes.

---

### 💾 LocalStorage

All blog posts are stored in the browser using:

```javascript
localStorage
```

The application uses the following LocalStorage key:

```text
blogifyPosts
```

Therefore, blog data remains available after refreshing the browser.

---

## 📁 Project Structure

```text
client-side-blog-cms/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## ⚙️ How to Run the Project

### Step 1 – Open the Project

Open the project folder in **Visual Studio Code**.

---

### Step 2 – Check the Files

Make sure the folder contains:

```text
index.html
style.css
script.js
README.md
```

---

### Step 3 – Install Live Server

In VS Code:

```text
Extensions
→ Search "Live Server"
→ Install
```

---

### Step 4 – Run the Application

Right-click:

```text
index.html
```

Select:

```text
Open with Live Server
```

The Blogify website will open in your browser.

---

## 💾 LocalStorage Implementation

The application saves blog data using:

```javascript
localStorage.setItem(
    "blogifyPosts",
    JSON.stringify(posts)
);
```

The saved data is retrieved using:

```javascript
JSON.parse(
    localStorage.getItem("blogifyPosts")
) || [];
```

This allows the application to maintain blog data without a backend database.

---

## 🔄 CRUD Operations

The project implements all four basic CRUD operations.

### Create

Creates a new blog post and stores it in LocalStorage.

### Read

Retrieves saved blog posts and displays them dynamically.

### Update

Allows users to edit existing blog posts.

### Delete

Removes a selected blog post after confirmation.

---

## 🖼️ Image Handling

The project supports image URLs for blog cover images.

Example:

```text
https://example.com/blog-image.jpg
```

The entered image is displayed in:

- Image preview
- Blog card
- Full post preview

If the image URL is unavailable, the application automatically uses a default image.

---

## 📱 Responsive Design

The website is designed to work on different screen sizes.

Supported devices include:

- 💻 Desktop
- 💻 Laptop
- 📱 Tablet
- 📱 Mobile

The layout automatically adjusts the blog cards, dashboard, navigation, forms, and preview windows according to screen size.

---

## 🎨 UI Features

The application contains:

- Modern navigation bar
- Hero section
- Featured story
- Dashboard statistics
- Blog cards
- Cover images
- Search bar
- Filter buttons
- Create/Edit modal
- Image preview
- Full post preview
- Like button
- Delete confirmation
- Toast notifications
- Responsive layout
- Modern footer

---

## 🧪 Testing

The following functionalities have been tested:

| Test Case | Result |
|---|---|
| Create a blog post | ✅ Passed |
| Add cover image | ✅ Passed |
| Image preview | ✅ Passed |
| Edit a post | ✅ Passed |
| Delete a post | ✅ Passed |
| Draft status | ✅ Passed |
| Published status | ✅ Passed |
| Featured post | ✅ Passed |
| Search posts | ✅ Passed |
| Filter posts | ✅ Passed |
| Preview post | ✅ Passed |
| Like post | ✅ Passed |
| Reading-time calculation | ✅ Passed |
| LocalStorage persistence | ✅ Passed |
| Responsive layout | ✅ Passed |

---

## 📚 JavaScript Concepts Used

This project demonstrates practical use of:

```text
Variables
Arrays
Objects
Functions
DOM Manipulation
Event Handling
Form Handling
Form Validation
LocalStorage
JSON
Array.filter()
Array.find()
Array.findIndex()
Array.reduce()
Array.sort()
Array.unshift()
Date Object
Template Literals
Conditional Statements
String Methods
```

---

## 🔐 Data Structure

Each blog post is stored as a JavaScript object containing:

```text
id
title
author
category
excerpt
content
image
status
featured
likes
createdAt
updatedAt
```

Example:

```javascript
{
    id: "123456",
    title: "The Future of Web Development",
    author: "Rutuja",
    category: "Technology",
    excerpt: "Explore modern web development...",
    content: "Web development is continuously evolving...",
    image: "image-url",
    status: "published",
    featured: true,
    likes: 24,
    createdAt: "2026-10-01",
    updatedAt: "2026-10-01"
}
```

---

## 🧑‍💻 User Workflow

The basic workflow of the application is:

```text
Open Blogify
      ↓
View Dashboard
      ↓
Create New Story
      ↓
Add Image + Content
      ↓
Choose Draft / Published
      ↓
Save Story
      ↓
Story Appears on Dashboard
      ↓
Search / Filter
      ↓
Preview / Like / Edit / Delete
      ↓
Data Saved in LocalStorage
```

---

## 📈 Learning Outcomes

By developing this project, I gained practical experience in:

- Frontend web development
- HTML5 semantic structure
- CSS3 responsive design
- JavaScript programming
- DOM manipulation
- Event handling
- CRUD operations
- LocalStorage
- JSON data management
- Form validation
- Dynamic content rendering
- Search and filtering
- Image handling
- Git and GitHub workflow

---

## 🎓 Internship Task

**Organization:** VEDA Technology

**Internship:** Web Development Internship

**Task:** Client-Side Blog CMS

**Level:** Level 2

**Day:** Day 30

---

## 👩‍💻 Developer

**Rutuja Nighot**

MCA Student  
Aspiring Data Analyst  
Web Development Learner

### Technical Skills

```text
HTML5
CSS3
JavaScript
Python
SQL
Excel
Data Visualization
Git
GitHub
```

---

## ⭐ Acknowledgement

This project was developed as part of the **VEDA Technology Web Development Internship** to gain practical experience in frontend development, JavaScript CRUD operations, LocalStorage, responsive UI design, image handling, and client-side content management.

---

## 📄 License

This project is created for educational and internship purposes.