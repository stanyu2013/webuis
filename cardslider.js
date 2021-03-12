function getNext() {
  const sliderElement = document.querySelectorAll(".slider")[0];
  console.log("sliderElement ", sliderElement);
  const rightStyle = getComputedStyle(sliderElement).right;
  console.log("rightStyle ", rightStyle);

  const oldRight = parseInt(
    rightStyle.substring(0, rightStyle.lastIndexOf("px"))
  );
  console.log("oldRight ", oldRight);
  let newRight = "";
  const sliderContainer = document.querySelectorAll(".slider-container")[0];
  let slideWidth = getComputedStyle(sliderContainer).width;
  slideWidth = parseInt(slideWidth.substring(0, slideWidth.lastIndexOf("px")));
  console.log("slideWidth ", slideWidth);
  if (oldRight < slideWidth * 9) {
    newRight =
      parseInt(rightStyle.substring(0, rightStyle.lastIndexOf("px"))) +
      slideWidth +
      "px";
  } else {
    newRight = "0px";
  }
  console.log("newRight ", newRight);
  document.getElementsByClassName("slider")[0].style.right = newRight;
  console.log(
    "document.getElementsByClassName(slider)[0].style.right",
    document.getElementsByClassName("slider")[0].style.right
  );
  document.getElementsByClassName("slider")[0].style.overflowX = "visible";
}
function getPrevious() {
  const sliderElement = document.querySelectorAll(".slider")[0];
  console.log("sliderElement ", sliderElement);
  const rightStyle = getComputedStyle(sliderElement).right;
  console.log("rightStyle ", rightStyle);
  const oldRight = parseInt(
    rightStyle.substring(0, rightStyle.lastIndexOf("px"))
  );
  console.log("oldRight ", oldRight);
  let newLeft = "";
  const sliderContainer = document.querySelectorAll(".slider-container")[0];
  let slideWidth = getComputedStyle(sliderContainer).width;
  slideWidth = parseInt(slideWidth.substring(0, slideWidth.lastIndexOf("px")));
  console.log("slideWidth ", slideWidth);
  if (oldRight <= slideWidth * 9 && oldRight - slideWidth > 0) {
    newLeft =
      parseInt(rightStyle.substring(0, rightStyle.lastIndexOf("px"))) -
      slideWidth +
      "px";
  } else {
    newLeft = "0px";
  }
  console.log("newLeft ", newLeft);
  document.getElementsByClassName("slider")[0].style.right = newLeft;
  console.log(
    "document.getElementsByClassName(slider)[0].style.right",
    document.getElementsByClassName("slider")[0].style.right
  );
  document.getElementsByClassName("slider")[0].style.overflowX = "visible";
}
document.addEventListener(
  "DOMContentLoaded",
  function () {
    document.getElementById("next-btn").addEventListener("click", getNext);
    document
      .getElementById("previous-btn")
      .addEventListener("click", getPrevious);
  },
  false
);
