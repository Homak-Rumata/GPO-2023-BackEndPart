(async function () {let response = await fetch("/getstepsimage");
let blob = await response.text();

let place = document.getElementById("Steps");

while (place.firstChild){
    place.removeChild(place.firstChild);
}

place.innerHTML = blob;
})()
