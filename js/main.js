const menuIcon = document.getElementById("toggle");
const toggleUl = document.getElementById("toggle-ul");

// to toggle the menu bar in mobile devices
menuIcon.addEventListener("click", function () {
  toggleUl.classList.toggle("show-ul");
});
