https://www.youtube.com/watch?v=DAb72PKHqMg


# 🎓 University Explorer

A sleek and modern **University Discovery Web Application** that allows users to search, filter, and explore universities around the world using real-time API data.

The application provides a **fast, responsive, and visually polished interface** where users can easily discover universities, view official websites, filter results by country, sort them alphabetically, and save favorites.

The project focuses on applying **real-world frontend development concepts**, including API integration, asynchronous JavaScript, responsive design, and dynamic DOM manipulation.

---

# 🌍 Project Purpose

The goal of this project is to:

* Practice **working with public APIs**
* Implement **real-world data fetching using Fetch API**
* Apply **JavaScript ES6 concepts**
* Build a **responsive and interactive user interface**
* Work with **dynamic DOM rendering**
* Implement **search, filtering, sorting, and favorites features**

This project simulates how modern applications consume external APIs and present structured data to users.

---

# 🚀 Live Features

### 🔎 Smart University Search

Users can search universities by typing the university name.

Example:

```
victoria
```

The system dynamically fetches matching universities from the API.

---

### 🌎 Country Filter

Users can filter universities by country.

Examples:

* Canada
* United States
* United Kingdom
* Australia
* India
* All Countries

If **All Countries** is selected, the application searches globally.

---

### 🔤 Sorting System

Universities can be sorted alphabetically:

* **Name (A–Z)**
* **Name (Z–A)**

Sorting happens instantly on the client side using JavaScript.

---

### ❤️ Favorites System

Users can mark universities as favorites using the **heart icon**.

Features include:

* Toggle favorite/unfavorite
* Favorites persist during the session
* **View Favorites button** shows only saved universities

---

### 🌐 Direct Website Links

Each university card includes a **Visit Website** button that opens the official university website.

---

### ✨ Modern UI / UX

The UI includes:

* Glassmorphism styled search panel
* Hover animated university cards
* Smooth transitions
* Clean typography
* Emerald accent color palette
* Dark theme design

---

### 📱 Fully Responsive Design

The application is optimized for:

* Desktop
* Tablets
* Mobile devices

Responsive layout automatically adjusts the grid system.

---

# 🛠 Technologies Used

### Frontend

* **HTML5** — Semantic structure
* **CSS3** — Styling and layout
* **JavaScript (ES6+)** — Application logic

### CSS Concepts

* CSS Grid
* Flexbox
* CSS Variables
* Glassmorphism effects
* Transitions & hover animations
* Responsive media queries

### JavaScript Concepts

* `fetch()` API
* `async / await`
* DOM Manipulation
* Event Listeners
* Array Methods:

  * `filter()`
  * `map()`
  * `sort()`
* Optional Chaining
* Dynamic UI rendering

---

# 🌐 API Integration

This project uses the **HipoLabs Universities API**.

API provides a public dataset of universities across multiple countries.

### Base API Endpoint

```
http://universities.hipolabs.com/search
```

---

### Example API Queries

Search by name

```
http://universities.hipolabs.com/search?name=harvard
```

Search by country

```
http://universities.hipolabs.com/search?country=Canada
```

Search by name + country

```
http://universities.hipolabs.com/search?name=Victoria&country=Canada
```

---

### Dynamic API Logic Used

```javascript
let url = `${API_BASE}?name=${encodeURIComponent(name)}`;

if (country) {
  url += `&country=${encodeURIComponent(country)}`;
}
```

This allows the application to **dynamically adjust search queries** depending on the user's selection.

---

# 📥 Data Handling

The application handles API data efficiently:

* Data fetched using `fetch()`
* JSON parsed dynamically
* Results rendered as cards
* Missing fields handled safely
* Optional chaining used to prevent crashes

Example:

```javascript
university.domains?.[0]
```

---

# 🧠 Key Concepts Implemented

This project demonstrates several important development concepts:

* API Integration
* Asynchronous Programming
* Dynamic DOM Rendering
* Responsive UI Development
* Defensive Programming
* Real-world Data Handling
* Event-driven UI updates

---

# 📂 Project Structure

```
University_Explorer
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── assets (optional)
```

### File Descriptions

**index.html**

Contains the main structure of the application.

**style.css**

Handles UI styling including:

* Layout
* Theme
* Animations
* Responsiveness

**script.js**

Contains the entire application logic including:

* API calls
* Search functionality
* Sorting
* Favorites logic
* Dynamic rendering

---

# ⚙️ Setup Instructions

Follow these steps to run the project locally.

---

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/university-explorer.git
```

---

### 2️⃣ Navigate to the project folder

```
cd university-explorer
```

---

### 3️⃣ Open the project

Open the `index.html` file in your browser.

OR run using a local server such as:

* VS Code Live Server
* Python HTTP Server
* Node Live Server

Example:

```
live-server
```

---

# 📸 Application Screenshots

Below are screenshots demonstrating the main features of the application.

---

### Website UI

<img width="1600" height="1039" alt="image" src="https://github.com/user-attachments/assets/c6d1e58f-6d08-4fba-820f-364ba20acf0a" />

---

### Search and Favuories+Like Feature

<img width="1600" height="1039" alt="image" src="https://github.com/user-attachments/assets/40f019b4-f0ba-4b3c-a0a0-8575f1749170" />

---

### Responsive Web Design and Filter & Sorting Feature

<img width="1600" height="1039" alt="image" src="https://github.com/user-attachments/assets/57b6ff01-fadb-4a70-89ea-45ab379d6b9c" />

---

# 🔮 Future Enhancements

Potential improvements that could be added:

* Pagination for large results
* Save favorites using LocalStorage
* Advanced search filters
* University details page
* Map integration
* Dark / Light theme toggle
* University rankings integration

---

# 🤝 Acknowledgment

This project uses the **HipoLabs Universities API** which provides open data for educational purposes.

API Provider:
[https://github.com/Hipo/university-domains-list](https://github.com/Hipo/university-domains-list)

---

# 👨‍💻 Author

Developed by **Manas Sandhu**

A project built to practice:

* Frontend development
* API integration
* Responsive UI design
* Real-world JavaScript applications

