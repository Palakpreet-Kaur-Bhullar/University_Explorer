const API_BASE = "http://universities.hipolabs.com/search";
let allUniversities = []; 
let favorites = JSON.parse(localStorage.getItem("uni_favs")) || [];
let showingFavorites = false; 


function debounceSearch() {
    applyFiltersAndSort();
}

async function fetchUniversities(country = "") {
    try {
        document.getElementById("loader").classList.remove("hidden");
        const url = `${API_BASE}?country=${encodeURIComponent(country)}`;
        const response = await fetch(url);
        const data = await response.json();
        
        allUniversities = data.filter(uni => uni.name); 
        applyFiltersAndSort(); 
    } catch (error) {
        console.error("Fetch error:", error);
    } finally {
        document.getElementById("loader").classList.add("hidden");
    }
}

function applyFiltersAndSort() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const sortOrder = document.getElementById("sortSelect").value;

    let data = showingFavorites 
        ? allUniversities.filter(uni => favorites.includes(uni.name)) 
        : allUniversities;

    const filteredData = data.filter(uni => 
        uni.name.toLowerCase().includes(searchTerm)
    );


    filteredData.sort((a, b) => sortOrder === "asc" 
        ? a.name.localeCompare(b.name) 
        : b.name.localeCompare(a.name)
    );

    displayUniversities(filteredData);
}

function displayUniversities(universities) {
    const container = document.getElementById("results");
    container.innerHTML = "";

    if (universities.length === 0) {
        container.innerHTML = `<p style="grid-column: 1/-1; text-align:center; opacity:0.5; padding-top: 50px;">No results found.</p>`;
        return;
    }


    const fragment = document.createDocumentFragment();
    
    universities.forEach(uni => {
        const isFav = favorites.includes(uni.name);
        const card = document.createElement("div");
        card.className = "card";
        
        card.innerHTML = `
            <button class="fav-btn" aria-label="Toggle Favorite">${isFav ? '❤️' : '🤍'}</button>
            <h3>${uni.name}</h3>
            <p><strong>Country:</strong> ${uni.country}</p>
            <p><strong>Domain:</strong> ${uni.domains?.[0] || "N/A"}</p>
            <a href="${uni.web_pages?.[0] || "#"}" target="_blank">🌐 Visit Website</a>
        `;


        card.querySelector(".fav-btn").addEventListener("click", () => toggleFavorite(uni.name));
        fragment.appendChild(card);
    });
    
    container.appendChild(fragment);
}

function toggleFavorite(name) {
    if (favorites.includes(name)) {
        favorites = favorites.filter(n => n !== name);
    } else {
        favorites.push(name);
    }
    localStorage.setItem("uni_favs", JSON.stringify(favorites));
    applyFiltersAndSort();
}

function toggleViewFavorites() {
    showingFavorites = !showingFavorites;
    document.getElementById("favToggle").innerText = showingFavorites ? "View All" : "View Favorites";
    applyFiltersAndSort();
}

function toggleTheme() {
    const isLight = document.body.classList.toggle("light-mode");
    localStorage.setItem("theme", isLight ? "light" : "dark");
    document.getElementById("themeToggle").innerText = isLight ? "🌙" : "☀️";
}

function clearAllFilters() {
    document.getElementById("searchInput").value = "";
    document.getElementById("countrySelect").selectedIndex = 0;
    showingFavorites = false;
    document.getElementById("favToggle").innerText = "View Favorites";
    fetchUniversities(""); 
}

function handleSearch() {
    const country = document.getElementById("countrySelect").value;
    fetchUniversities(country);
}

window.onload = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
        document.getElementById("themeToggle").innerText = "🌙";
    }
    fetchUniversities(""); 
};
