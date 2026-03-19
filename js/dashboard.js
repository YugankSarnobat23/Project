const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleSidebar");
const icon = toggleBtn.querySelector("i");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");

  if (sidebar.classList.contains("collapsed")) {
    icon.classList.replace("fa-chevron-left", "fa-chevron-right");
  } else {
    icon.classList.replace("fa-chevron-right", "fa-chevron-left");
  }
});
function logoutUser() {
  window.location.href = "index.html";
}
function logoutUser() {
  window.location.href = "../index.html";
}
