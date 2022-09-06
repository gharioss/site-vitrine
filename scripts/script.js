import { intro_elements, horaires, informations, actualities } from "../data/intro.js"


var first_loop = document.getElementById("first-loop")

for (const i in intro_elements) {

    let main_div = document.createElement("div")
    let title = document.createElement("h4")
    let text = document.createElement("p")

    title.innerText = intro_elements[i].title
    text.innerText = intro_elements[i].text

    main_div.appendChild(title)
    main_div.appendChild(text)
    first_loop.appendChild(main_div)
}


var horaires_data = document.getElementById("horaires-data")

for (const i in horaires) {

    let horaire_div = document.createElement("div")
    let day = document.createElement("p")
    let horaire = document.createElement("p")

    day.innerText = horaires[i].day
    horaire.innerText = horaires[i].horaire

    horaire_div.appendChild(day)
    horaire_div.appendChild(horaire)
    horaires_data.appendChild(horaire_div)
}


var informations_section = document.getElementById("informations_section")

for (const i in informations) {

    let information_div = document.createElement("div")
    let icons = document.createElement("i")
    let information_title = document.createElement("h4")
    let information_text = document.createElement("p")

    icons.className = informations[i].icon
    information_title.innerText = informations[i].title
    information_text.innerText = informations[i].text

    information_div.appendChild(icons)
    information_div.appendChild(information_title)
    information_div.appendChild(information_text)
    informations_section.appendChild(information_div)
}

var actualities_section = document.getElementById("actualities_section")

for (const i in actualities) {

    let information_div = document.createElement("div")
    let link = document.createElement("a")
    let picture = document.createElement("img")
    let actuality_title = document.createElement("h3")
    let actuality_text = document.createElement("p")

    link.setAttribute("href", "#")

    picture.src = actualities[i].image
    actuality_title.innerText = actualities[i].title
    actuality_text.innerText = actualities[i].text

    link.appendChild(picture)
    link.appendChild(actuality_title)
    link.appendChild(actuality_text)
    information_div.appendChild(link)
    actualities_section.appendChild(information_div)
}