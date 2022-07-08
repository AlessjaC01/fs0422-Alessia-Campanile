function calcola() {
    let display = document.getElementById("display");
    let totale = eval(display.value)
    display.value = totale
}

function cancella() {
    document.getElementById("display").value="";
}

function aggiungiNumero(bottone){
    let display = document.getElementById("display");
    let simbolo = bottone.getAttribute('data-simbolo');
    display.value += bottone.getAttribute('data-simbolo')
    
}

function isSymbol(carattere){
    const simboli = ['*','/','+','-'];

    if(simboli.includes(carattere)){
        return true;
    }
    return false;
}
