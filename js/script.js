/*
Consegna
L'utente clicca su un bottone che genererà una griglia di 
gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora 
di azzurro ed emetto un messaggio in console con il numero della 
*/

//al click del button play genera una griglia 10 x 10
// ogni card ha numero progressivo da 1 a 100
// al click di ogni cella la cella cliccata si colora di azzurro
// ed emette un messaggio in console con il numero della cella
// cliccata


const playButtonEl =  document.getElementById("play-button");
const cardGridEl = document.getElementById("card-grid");
standardTextEl = document.getElementById("standard-text");
playButtonEl.addEventListener("click", function(){
    standardTextEl.textContent = "";
    cardGridEl.style.display = "flex"; 
    for (let i = 1; i < 101; i++){
        const newElement = createSquareElement(i);

        newElement.addEventListener("click", function(){
            newElement.classList.toggle("square-selected");
            console.log(i);
        });
    }

});






//__________FUNZIONI___________

//funzione per la creazione di un elemento div con classe square

function createSquareElement(squareText) {
    
    let newElement = document.createElement("div");
    newElement.classList.add("card-square");
    newElement.style.width = "calc(100% / 10 - (10px / 10 * 9))";
    newElement.style.height = "calc(100% / 10 - (10px / 10 * 9))";
    cardGridEl.append(newElement);
    newElement.textContent = squareText; 

    return newElement;
}


//__________FINE FUNZIONI___________