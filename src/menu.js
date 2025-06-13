const content = document.querySelector("#content");

export default function displayMenu() {
    const menuContent = document.createElement("div")
    menuContent.classList.toggle("menu-content");
    menuContent.textContent = 'Welcome to Menu';
    console.log('displaying menu');
    content.appendChild(menuContent)
    
}