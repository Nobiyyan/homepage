document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar");
  const menuBtn = document.querySelector(".menu-btn");

  // Toggle sidebar visibility
  menuBtn.addEventListener("click", function () {
    sidebar.classList.toggle("show");
  });

  // Close sidebar when clicking outside
  document.addEventListener("click", function (event) {
    if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
      sidebar.classList.remove("show");
    }
  });
});
