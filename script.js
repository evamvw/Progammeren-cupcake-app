console.log("CupcakeCo");

let buttonCreme = document.querySelector("#buttonCreme")
buttonCreme.addEventListener("click", klik);
let cremeImage = document.querySelector("#creme");

function klik() {
        cremeImage.hidden = !cremeImage.hidden;
}

let h1 = document.querySelector(".instructions")
buttonCreme.addEventListener("click", kliktekst1);

function kliktekst1(){
    h1.textContent = "Add sparkles!"
}





let buttonSparkles = document.querySelector("#buttonSparkles")
buttonSparkles.addEventListener("click", klikSparkles);
let sparklesImage = document.querySelector("#sparkles");


function klikSparkles() {
        sparklesImage.hidden = !sparklesImage.hidden
}

buttonSparkles.addEventListener("click", kliktekst2);

function kliktekst2(){
    h1.textContent = "Add the orange!"
}





let buttonOrange = document.querySelector("#buttonOrange")
buttonOrange.addEventListener("click", klikOrange);
let orangeImage = document.querySelector("#orange");


function klikOrange() {
    orangeImage.hidden = !orangeImage.hidden
}

buttonOrange.addEventListener("click", kliktekst3);

function kliktekst3(){
    h1.textContent = "Add the beer!"
    
}





let buttonBeer = document.querySelector("#buttonBeer")
buttonBeer.addEventListener("click", klikBeer);
let beerImage = document.querySelector("#beer");

function klikBeer() {
    beerImage.hidden = !beerImage.hidden
}

buttonBeer.addEventListener("click", kliktekst4);

function kliktekst4(){
    h1.textContent = "Add the umberella!"
    
}





let buttonParaplu = document.querySelector("#buttonParaplu")
buttonParaplu.addEventListener("click", klikParaplu);
let parapluImage = document.querySelector("#paraplu")

function klikParaplu() {
    parapluImage.hidden = !parapluImage.hidden
}

buttonParaplu.addEventListener("click", kliktekst5);

function kliktekst5(){
    h1.textContent = "Wow that's a beautiful cupcake!"

}



buttonParaplu.addEventListener("click", eindKlik);
let h2 = document.querySelector (".timer")

let cupcakeCompleet = false 

function eindKlik() { 
    cupcakeCompleet = true
}

setTimeout(eindeSpel, 10000)

function eindeSpel() {
    if(cupcakeCompleet){
    h2.textContent = "Good job, you won!"

    } else {
        h2.textContent = "Too bad, you lost...."
    }

}



// let secondsPassed = 0 

// setInterval(countSeconds, 10)

// function countSeconds () {
//     secondsPassed -= 1
// }

// if (secondsPassed<= 0) { 
//     h2.textContent = "you lost"
// }

// setTimeout(eindeSpel, 10000) 

// let cupcakecompleet = true 

// functioneindespel 


// else (seconds) { 

// }
    

// }