const content = document.querySelector("#content");


export default function displayHome() {
    const homeContent = document.createElement("div")
    homeContent.classList.toggle("home-content");
    homeContent.textContent = 'Welcome';
    console.log('displaying home');
    content.appendChild(homeContent)
    
}



