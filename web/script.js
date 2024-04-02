document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.querySelector(".sidebar");
  const menuToggleBtn = document.createElement("div");
  menuToggleBtn.classList.add("menu-toggle-btn");
  menuToggleBtn.innerHTML = "&#9776;";
  document.body.appendChild(menuToggleBtn);

  menuToggleBtn.addEventListener("click", function () {
    sidebar.style.left = sidebar.style.left === "0px" ? "-280px" : "0px";
    menuToggleBtn.style.left = sidebar.style.left === "0px" ? "280px" : "20px";
  });

  // Close sidebar when clicking outside
  document.addEventListener("click", function (event) {
    if (!sidebar.contains(event.target) && event.target !== menuToggleBtn) {
      sidebar.style.left = "-280px";
      menuToggleBtn.style.left = "20px";
    }
  });
});
