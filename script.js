const API_BASE = "http://universities.hipolabs.com/search";

// Fetch universities
async function fetchUniversities(country, name) {
  const url = `${API_BASE}?country=${country}&name=${name}`;

  try {
    showLoader();

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    displayUniversities(data);
  } catch (error) {
    showError("❌ Failed to fetch data. Please try again.");
    console.error(error);
  } finally {
    hideLoader();
  }
}

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
      <p><strong>Domain:</strong> ${uni.domains[0]}</p>
      <a href="${uni.web_pages[0]}" target="_blank">🌐 Visit Website</a>
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
