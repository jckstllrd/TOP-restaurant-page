const content = document.querySelector("#content");

export default function displayMenu() {
  const menuContent = document.createElement("div");
  menuContent.classList.toggle("menu-content");

  const heading = document.createElement("h1");
  heading.textContent = "Mains:";

  const cards = document.createElement("div");
  cards.classList.add("menu-cards");

  for (let i = 0; i < 6; i++) {
    const card = document.createElement("div");
    const name = document.createElement("h3");
    const desc = document.createElement("p");

    card.classList.add("card");
    desc.classList.add("description");

    name.textContent = "Item Name";
    desc.textContent =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi at expedita, earum quam nesciunt neque possimus libero quis in sit eos corrupti necessitatibus voluptate nemo deserunt rerum quisquam dicta exercitationem?";

    card.appendChild(name);
    card.appendChild(desc);
    cards.appendChild(card);
  }

  menuContent.appendChild(heading)
  menuContent.appendChild(cards)


  content.appendChild(menuContent)
}
