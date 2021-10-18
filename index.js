let firstCard = 11
let secondCard = 10
let sum = firstCard + secondCard
let hasBlackJack = false
let busted = true
let message = ''
let messageEl = document.getElementById('message-el')
//let sumEl = document.getElementById('sum-el')
let sumEl = document.querySelector('#sum-el')

function startGame() {
    sumEl.textContent += sum
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

// Cash out


