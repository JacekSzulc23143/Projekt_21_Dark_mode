const body = document.querySelector("body");
const btn = document.querySelector("button");

document.getElementById("h1Text").textContent = "light mode";

// funkcja zmieniająca kolor
const handleDarkMode = () => {
	if (body.getAttribute("data-mode") === "light") {
		body.setAttribute("data-mode", "dark");
		document.getElementById("h1Text").textContent = "dark mode";
	} else {
		body.setAttribute("data-mode", "light");
		document.getElementById("h1Text").textContent = "light mode";
	}
};

btn.addEventListener("click", handleDarkMode);
