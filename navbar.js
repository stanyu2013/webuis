function openNav() {
  document.getElementById("menu").style.width = "100%";
}

function closeNav() {
  document.getElementById("menu").removeAttribute("style");
}
document.addEventListener(
  "DOMContentLoaded",
  function () {
    document.getElementById("menu-bar").addEventListener("click", openNav);
    document.getElementById("close-btn").addEventListener("click", closeNav);

    function myFunction(x) {
      if (x.matches) {
        // If media query matches
        document.getElementById("menu").removeAttribute("style");
        // adding click events for links
        let links = document.getElementsByTagName("a");
        for (let i = 0; i < links.length; i++) {
          links[i].addEventListener("click", closeNav);
        }
      }
    }

    let x = window.matchMedia("(max-width: 996px)");
    myFunction(x); // Call listener function at run time
    x.addListener(myFunction); // Attach listener function on state changes

    let y = window.matchMedia("(min-width: 996px)");
    myFunction(y);
    y.addListener(myFunction);
  },
  false
);
