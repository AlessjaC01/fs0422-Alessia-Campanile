let distanza = document.querySelector("#risultato")
console.log ()
let labels = document.querySelectorAll("label")
console.log ()

let anni = () => {
    let annoNascita = document.querySelector("#annoNascita").value
    let annoAttuale = document.querySelector("#annoAttuale").value
    let risultato = annoNascita - annoAttuale
    if (risultato < 0) {
        distanza.innerHTML = risultato
    }
    if (!isNaN(risultato)) {
        risultato = "Hai" + ' ' + risultato + " anni"
        distanza.innerHTML = risultato

    } else {
        distanza.innerHTML = "mi dispiace, non hai inserito nulla"
    }
    console.log(anni)
}
