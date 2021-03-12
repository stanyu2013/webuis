function openClose(section, openOrClose) {
	const expandedMenus = document.querySelectorAll(".menu-expanded");
	expandedMenus.forEach(setVisibility);
	function setVisibility(item) {
		const sectionTitle = section + "-section";
		console.log('sectionTitle ', sectionTitle);
		console.log('item ' + item.id);
		if (openOrClose === "expand") {
			if (item.id == sectionTitle) {
				item.style.visibility = "visible";
			}
		} else if (openOrClose === "close") {
			if (item.id == sectionTitle) {
				item.style.visibility = "hidden";
			}
		}
	}
}
document.addEventListener(
  "DOMContentLoaded",
  function () {
	const tabs = document.querySelectorAll(".main-btn");
	tabs.forEach(setListener);
	function setListener(tab) {
		const section = tab.id;
		console.log(section)
		document.getElementById(section).addEventListener("mouseover", 
		function() {
			console.log("expand");
			openClose(section, "expand");
		});
		document.getElementById(section).addEventListener("mouseleave",
		function(){
			console.log("close");
			openClose(section, "close");
		});
	}
  });