// definisco una varabile per i secondi che parte da 10

let seconds = 10; // number

// prelevo l'elemento HTML da assegnare alla variabile seconds e strampo i secondi nell'elemento html

document.getElementById("seconds").innerText = seconds;

// definisco un intervallo all'interno di una variabile per decrementare i secondi fino ad arrivare a 0

const countDown = setInterval(function () {
     seconds-- ;
    if (seconds >= 1) {
        printSeconds(seconds);
    } else {
        // stampo in pagina 
        document.getElementById("seconds").innerText = "Buon anno!";
        // fermo l'intervallo
        clearInterval(countDown);
        console.log("Buon anno!");
    }
    
}, 1000);

 
