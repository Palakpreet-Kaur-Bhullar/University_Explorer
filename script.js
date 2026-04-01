// Using the .it domain which is currently the stable endpoint for this API
const API_BASE = "http://universities.hipolabs.com/search";
// OR try the secondary mirror if the above fails:
// const API_BASE = "https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json";

async function fetchUniversities(country, name) {
  // 1. Build the URL dynamically
  let url = `${API_BASE}?name=${encodeURIComponent(name)}`;
  
  // 2. Only add the country parameter if it's not empty ("All")
  if (country) {
    url += `&country=${encodeURIComponent(country)}`;
  }

  try {
    showLoader();
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    
    const data = await response.json();
    displayUniversities(data);
  } catch (error) {
    showError("❌ Failed to fetch data. Please try again.");
    console.error("Fetch error:", error);
  } finally {
    hideLoader();
  }
}

// Also, update the initial load at the bottom so it starts with "All" instead of just India
window.onload = () => {
  fetchUniversities("", ""); // Passing an empty string for "All"
};

// Display results dynamically
function displayUniversities(universities) {
  const container = document.getElementById("results");
  container.innerHTML = "";

  if (universities.length === 0) {
    container.innerHTML = "<p>No universities found.</p>";
    return;
  }

  universities.forEach((uni) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
  <h3>${uni.name}</h3>
  <p><strong>Country:</strong> ${uni.country}</p>
  <p><strong>Domain:</strong> ${uni.domains?.[0] || "N/A"}</p>
  <a href="${uni.web_pages?.[0] || "#"}" target="_blank">🌐 Visit Website</a>
`;

    container.appendChild(card);
  });
}

// Handle search button
function handleSearch() {
  const searchInput = document.getElementById("searchInput").value.trim();
  const country = document.getElementById("countrySelect").value;

  fetchUniversities(country, searchInput);
}

// Loader functions
function showLoader() {
  document.getElementById("loader").classList.remove("hidden");
}

function hideLoader() {
  document.getElementById("loader").classList.add("hidden");
}

// Error display
function showError(message) {
  const container = document.getElementById("results");
  container.innerHTML = `<p class="error">${message}</p>`;
}

// Initial load
window.onload = () => {
  fetchUniversities("India", "");
};
