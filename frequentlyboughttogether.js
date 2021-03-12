document.addEventListener("DOMContentLoaded", function () {
  console.log("loaded");
  document.getElementById("firstdot").addEventListener(
    "click",
    function () {
      console.log("firstdot");
      document.getElementById("first").style.display = "block";
      document.getElementById("second").style.display = "none";
      document.getElementById("third").style.display = "none";
    },
    false
  );
  document.getElementById("seconddot").addEventListener(
    "click",
    function () {
      console.log("seconddot");
      document.getElementById("second").style.display = "block";
      document.getElementById("first").style.display = "none";
      document.getElementById("third").style.display = "none";
    },
    false
  );
  document.getElementById("thirddot").addEventListener(
    "click",
    function () {
      console.log("thirddot");
      document.getElementById("third").style.display = "block";
      document.getElementById("first").style.display = "none";
      document.getElementById("second").style.display = "none";
    },
    false
  );
});
