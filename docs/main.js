document.addEventListener("DOMContentLoaded", loadPage)

card = {}

function loadPage(event) {
    loadImage()
}

function loadImage(event) {
    fetch('https://api.scryfall.com/cards/random?q=t%3A"land"+unique%3Aart+atag:plane+year%3E%3D2004')
        .then(response => { return response.json() })
        .then(data => {
            card = data

            let name = document.getElementById("card_set")
            name.innerText = ""

            let artist = document.getElementById("card_artist")
            artist.innerText = card.artist

            let img = document.getElementById("card_img")
            img.src = card.image_uris.art_crop
        })

    
} 

function revealSet(event) {
    let name = document.getElementById("card_set")
    name.innerText = card.set_name
}