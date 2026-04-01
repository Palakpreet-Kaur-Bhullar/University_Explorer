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
