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

/*
 Bonus
Aggiungere una select accanto al bottone di generazione, 
che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, 
  divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, 
  divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49,
  divise in 7 caselle per 7 righe;
*/

const playButtonEl =  document.getElementById("play-button");
const cardGridEl = document.getElementById("card-grid");
const standardTextEl = document.getElementById("standard-text");
const levelEl = document.getElementById("level");


playButtonEl.addEventListener("click", function(){
    standardTextEl.innerHTML = "";
    cardGridEl.style.display = "flex"; 

    let difficult = levelEl.value;
    //se la difficoltà è uguale a easy rimane uguale
    if(difficult == "easy") {
        //rimuovo il contenuto della griglia prima di rimpiazzarlo con la nuova difficoltà
        cardGridEl.innerHTML = "";
        createSquareElementLoop(101, 10, 10, 9);

    //Se la difficoltà è uguale a medium allora cambia 
    } else if (difficult == "medium") {
        //rimuovo il contenuto della griglia prima di rimpiazzarlo con la nuova difficoltà
        cardGridEl.innerHTML = "";
        createSquareElementLoop(82, 9, 9, 8);

    //Se la difficoltà è uguale a hard allora cambia 
    } else if (difficult == "hard"){
        //rimuovo il contenuto della griglia prima di rimpiazzarlo con la nuova difficoltà
        cardGridEl.innerHTML = "";
        createSquareElementLoop(50, 7, 7, 6);
    }
});



//__________FUNZIONI___________

//Funzione per la creazione di un elemento div con classe square
function createSquareElement(squareText, columnRowNumber, columnRowNumber, cardSpace ) {
    
    let newElement = document.createElement("div");
    newElement.classList.add("card-square");
    newElement.style.width = `calc(100% / ${columnRowNumber} - (10px / ${columnRowNumber} * ${cardSpace}))`;
    newElement.style.height = `calc(100% / ${columnRowNumber} - (10px / ${columnRowNumber} * ${cardSpace}))`;
    cardGridEl.append(newElement);
    newElement.textContent = squareText; 

    return newElement;
}

//Funzione per la stabilire il numero di iterazioni che andranno a gestire la creazione dei quadrati
function createSquareElementLoop(NumberOfSquare, columnRowNumber, columnRowNumber, cardSpace) {
    for (let i = 1; i < NumberOfSquare; i++){
        const newElement = createSquareElement(i, columnRowNumber, columnRowNumber, cardSpace);

        newElement.addEventListener("click", function(){
        newElement.classList.toggle("square-selected");
        console.log(i);
        });
    }
}

//__________FINE FUNZIONI___________