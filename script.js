console.log("CupcakeCo");

let h1 = document.querySelector("h1")
let buttonCreme = document.querySelector("#buttonCreme")
let cremeImage = document.querySelector("#creme");

buttonCreme.addEventListener("click", addCreme);


let buttonSparkles = document.querySelector("#buttonSparkles")
let sparklesImage = document.querySelector("#sparkles");

buttonSparkles.addEventListener("click", addSparkles);


let orangeImage = document.querySelector("#orange");
let buttonOrange = document.querySelector("#buttonOrange")

buttonOrange.addEventListener("click", addOrange );


let buttonBeer = document.querySelector("#buttonBeer")
let beerImage = document.querySelector("#beer");


buttonBeer.addEventListener("click", addBeer);


let parapluImage = document.querySelector("#paraplu")
let buttonParaplu = document.querySelector("#buttonParaplu")

buttonParaplu.addEventListener("click", addParaplu);


let h2 = document.querySelector (".timer")
let cupcakeCompleet = false 

buttonParaplu.addEventListener("click", eindKlik);



function addCreme() {
        cremeImage.hidden = !cremeImage.hidden;
        h1.textContent = "Add sparkles!"
}


function addSparkles() {
        sparklesImage.hidden = !sparklesImage.hidden
        h1.textContent = "Add the orange!"
}


function addOrange() {
    orangeImage.hidden = !orangeImage.hidden
    h1.textContent = "Add the beer!"
}



function addBeer() {
    beerImage.hidden = !beerImage.hidden
    h1.textContent = "Add the umberella!"
}



function addParaplu() {
    parapluImage.hidden = !parapluImage.hidden
    h1.textContent = "Wow that's a beautiful cupcake!"
}




setTimeout(eindeSpel, 10000)


function eindKlik() { 
    cupcakeCompleet = true
    console.log("compleet")
}


function eindeSpel() {
    if(cupcakeCompleet){
    h2.textContent = "Good job, you won!"

    } else {
        h2.textContent = "Too bad, you lost...."
    }
}


