// definisco una varabile per i secondi che parte da 10

let seconds = 10; // number

// prelevo l'elemento HTML da assegnare alla variabile seconds e strampo i secondi nell'elemento html

document.getElementById("seconds").innerText = seconds;

// definisco un intervallo all'interno di una variabile per decrementare i secondi fino ad arrivare a 0

const countDown = setInterval(function () {
    if (seconds <= 10) {
        seconds--
    } else if (seconds = 0) {
        seconds.innerText = 0;
    }

    // stampa
    document.getElementById("seconds").innerText = seconds;
    printSeconds(seconds);
    
}, 1000);

 
