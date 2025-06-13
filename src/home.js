import pizzaImage from "./res/rashed-moslem-F76OhvaAYvQ-unsplash.jpg";

const content = document.querySelector("#content");

export default function displayHome() {
  const homeContentDiv = document.createElement("div");
  homeContentDiv.classList.toggle("home-content");

  const imgDiv = document.createElement("div");
  imgDiv.classList.add("img-div");

  const homeImg = document.createElement("img");
  homeImg.src = pizzaImage;
  homeImg.classList.add("home-img");

  const homeText = document.createElement("div");
  homeText.classList.add("home-text-div");

  const heading = document.createElement("h2")
heading.textContent = "Welcome to the home of neapolitan pizza!"

  const p = document.createElement("p")
  p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae provident voluptatibus quaerat. Quidem voluptates, magnam tempore cum doloribus numquam, nemo, nisi eius officia vero aliquid omnis reiciendis esse culpa adipisci."

  imgDiv.appendChild(homeImg);

  homeText.appendChild(heading)
  homeText.appendChild(p)

  homeContentDiv.appendChild(imgDiv);
  homeContentDiv.appendChild(homeText)

  content.appendChild(homeContentDiv);
}
