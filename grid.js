function openNav() {
  document.getElementById("menu").style.width = "40%";
  document.getElementById("menu").style.display = "block";
}

function closeNav() {
  document.getElementById("menu").removeAttribute("style");
}
document.addEventListener(
  "DOMContentLoaded",
  function () {
    document.getElementById("menu-bar").addEventListener("click", openNav);
    document.getElementById("close-btn").addEventListener("click", closeNav);
  },
  false
);
