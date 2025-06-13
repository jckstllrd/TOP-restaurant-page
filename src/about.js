const content = document.querySelector("#content");

export default function displayAbout() {
    const aboutContent = document.createElement("div")
    aboutContent.classList.toggle("about-content");
    aboutContent.textContent = 'About section';
    console.log('displaying about');
    content.appendChild(aboutContent)
    
}