/**
 * Description: la funzione ci permette di stampare uno 0 davanti ai secondi
 * @param {number} s
 */
function printSeconds (s) {
    let sSts = (s < 10)? ("0" + s.toString()) : s.toString();

    clearInterval(s.toString());

    document.getElementById("seconds").innerText = sSts;
}

