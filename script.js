const API_BASE = "http://universities.hipolabs.com/search";

async function fetchUniversities(country = "India", name = "") {
  const url = `${API_BASE}?country=${country}&name=${name}`;
  
  try {
    showLoader();

    const response = await fetch(url);
    const data = await response.json();

    displayUniversities(data);
  } catch (error) {
    showError("Failed to fetch data");
    console.error(error);
  } finally {
    hideLoader();
  }
}


function displayUniversities(universities) {
  const container = document.getElementById("results");
  container.innerHTML = "";

  if (universities.length === 0) {
    container.innerHTML = "<p>No results found</p>";
    return;
  }

  universities.forEach(uni => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${uni.name}</h3>
      <p>${uni.country}</p>
      <a href="${uni.web_pages[0]}" target="_blank">Visit Website</a>
    `;

    container.appendChild(card);
  });
}

function showLoader() {
  document.getElementById("loader").classList.remove("hidden");
}

function hideLoader() {
  document.getElementById("loader").classList.add("hidden");
}

function showError(message) {
  const container = document.getElementById("results");
  container.innerHTML = `<p class="error">${message}</p>`;
}

function handleSearch() {
  const query = document.getElementById("searchInput").value;
  fetchUniversities("India", query);
}

