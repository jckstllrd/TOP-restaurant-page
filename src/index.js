import "./styles.css";
import displayHome from "./home.js";
import displayMenu from "./menu.js";
import displayAbout from "./about.js";

const displayController = (function () {
  const homeBtn = document.querySelector(".home");
  const menuBtn = document.querySelector(".menu");
  const aboutBtn = document.querySelector(".about");
  const content = document.querySelector("#content");

  function clearDisplay() {
    content.removeChild();
  }

  return { clearDisplay };
})();
