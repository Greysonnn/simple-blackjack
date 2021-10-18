let firstCard = 11
let secondCard = 10
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let busted = true
let message = ''
let messageEl = document.getElementById('message-el')
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.querySelector('#cards-el')

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " + cards[0] + ', ' + cards[1]
    sumEl.textContent = 'Sum: ' + sum
    if (sum <= 20) {
        message = 'Do you want to hit?'
         
     } else if (sum === 21) {
         message = "You've got Blackjack!"
         hasBlackJack = true
     } else {
         message = "You're out of the game!"
         busted = false
     }
     messageEl.textContent = message
}

function newCard() {
    console.log('Drawing new card from deck')
    let card = 3
    sum = sum + card
    renderGame()
}

// Cash out

