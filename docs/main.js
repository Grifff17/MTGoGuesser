document.addEventListener("DOMContentLoaded", loadPage)
//document.getElementById("get_card").onclick = loadImage();

function loadPage(event) {
    loadImage()
}

function loadImage(event) {
    fetch('https://api.scryfall.com/cards/random?q=t%3A"basic+land"+unique%3Aart+atag:plane')
        .then(response => { return response.json() }
        ).then(data => {
            let name = document.getElementById("card_set")
            name.innerText = data.set_name

            let img = document.getElementById("card_img")
            img.src = data.image_uris.art_crop
        })

    
} 