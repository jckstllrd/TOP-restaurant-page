import displayHome from "./home.js";
import displayMenu from "./menu.js";
import displayAbout from "./about.js";

const displayController = (function () {
  const content = document.querySelector("#content");

  function clearDisplay() {
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
  }

  function handleButtonClick(e) {
    console.log(e.target);
    if (e.target.classList == "home") {
      clearDisplay();
      displayHome();
    } else if (e.target.classList == "menu") {
      clearDisplay();
      displayMenu();
    } else if (e.target.classList == "about") {
      clearDisplay();
      displayAbout();
    }
  }

  function initialiseNav() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.addEventListener("click", handleButtonClick);
    });
  }

  function start() {
    initialiseNav();

    // Change back to home once completed
    displayAbout();
  }

  return { start };
})();

export { displayController };
