const content = document.querySelector("#content");

export default function displayAbout() {
    const aboutContent = document.createElement("div")
    aboutContent.classList.toggle("about-content");

    const heading = document.createElement("h1")
    heading.textContent = "About"

    aboutContent.appendChild(heading)
    
    const contact = document.createElement("div")
    contact.classList.add("contact-details")

    const address = document.createElement("p")
    address.textContent = "Address: 17 Pizza Lane, Pizzaville, Pizza"
    contact.appendChild(address)


    const email = document.createElement("p")
    email.textContent = "Email: genericemail@gmail.com"
    contact.appendChild(email)

    const phone = document.createElement("p")
    phone.textContent = "Phone: 080095PIZZA"
    contact.appendChild(phone)

aboutContent.appendChild(contact)

    content.appendChild(aboutContent)
    
}