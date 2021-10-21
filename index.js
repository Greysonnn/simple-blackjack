//
// 
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let busted = true
let message = ''
let messageEl = document.getElementById('message-el')
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.querySelector('#cards-el')

console.log(cards)

function getRandomCard() {

    let randomCard = Math.floor(Math.random() * 13) + 1
    if (randomCard > 10)  {
        return 10
    } else if (randomCard === 1) {
        return 11
    } else {
        return randomCard
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + ", "
    }
    sumEl.textContent = 'Sum: ' + sum
    if (sum <= 20) {
        message = 'Do you want another card?'
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
    console.log('Drawing new card from deck') //for testing purposes
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
}
