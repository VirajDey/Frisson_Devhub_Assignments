document.getElementById("add-more-btn").addEventListener("click", function () {
  const selectedAffiliation = document.querySelector(
    'input[name="affiliation"]:checked'
  );
  if (!selectedAffiliation) {
    alert("Please select an affiliation type first.");
    return;
  }

  const container = document.getElementById("dynamic-fields-container");
  const affiliationType = selectedAffiliation.value;

  // Create a new section for the selected affiliation
  const section = document.createElement("div");
  section.className = "dynamic-section";
  section.innerHTML = `
    <label>Name of ${affiliationType}</label>
    <input type="text" placeholder="Enter ${affiliationType} Name" />
    <label>${affiliationType} Role</label>
    <input type="text" placeholder="Enter ${affiliationType} Role" />
    <button type="button" class="remove-btn"><i class="fa-solid fa-xmark"></i></button>
  `;

  // Add event listener to the remove button
  section.querySelector(".remove-btn").addEventListener("click", function () {
    container.removeChild(section);
  });

  container.appendChild(section);
});

function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");

  navLinks.classList.toggle("active");

  const isOpen = navLinks.classList.contains("active");
  menuIcon.style.display = isOpen ? "none" : "block";
  closeIcon.style.display = isOpen ? "block" : "none";
}

function toggleSearch() {
  const searchContainer = document.getElementById("responsiveSearch");
  searchContainer.classList.toggle("active");
}
