let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")
// let sumEl = document.querySelector("#sum-el")

let cardsEl = document.getElementById("cards-el")

//Objects:
// let player = {
//     name: "Shreya",
//     chips: 145
// }

// let playerEl = document.getElementById("player-el")
// playerEl.textContent = player.name + ": $ " + player.chips

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*11)+1
    if(randomNumber >10)
    return 10
    else if(randomNumber === 1)
    return 11
    else
    return randomNumber
}

function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
     cards = [firstCard, secondCard]
     sum = firstCard + secondCard
    isAlive = true
    rendergame()
}

function rendergame(){

    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent +=  cards[i] + " "
    }


    if(sum <= 20){
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21){
        message = "You've got Blackjack!"
        hasBlackJack = true
    }
    else{
        message = "You're out of the game!"
        isAlive = false
    }
    
    messageEl.textContent = message
    sumEl.textContent = "Sum : " + sum
}

function newCard(){
    if(isAlive && !hasBlackJack){

        let card = getRandomCard()
        cards.push(card)
        sum += card
        rendergame()
    }
}

// Math.random() -- From - 0 TO 0.999
// Math.random() -- From - 0 TO 5.999
// Math.floor(randomNumber) -- only integers

//shift() unshift() in arrays
