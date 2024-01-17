// Deposit money
// Determine no of lines to bet on
// Collect a bet amount
// Spin the slot machine
// Check if the user won any prize
// Give or take money.
// Play again

const prompt = require('prompt-sync')();

//Deposit amount
const deposit = () => {
while(true){
     const depositAmount = prompt("Enter the deposit amount: ")
     const numberDepositAmount=parseFloat(depositAmount)
     if (isNaN(numberDepositAmount)||numberDepositAmount<=0){
      console.log('Invalid Amount. Try again !!!!!')
     }
     else
     {
        return numberDepositAmount;
     }
  }
}

//No of lines
const getNumber = () => {
  while(true){
     const lines = prompt("Enter the no of lines(1-3): ")
     const numberLines=parseFloat(lines)
     if (isNaN(numberLines)|| numberLines<=0 || numberLines>3){
      console.log('Invalid Number. Try again !!!!!')
     }
     else
     {
        return numberLines;
     }
  }
}


//Get bet ....
const getBet= (balance,lines) => {
  while(true){
     const bet = prompt("Enter the bets per line: ")
     const numberbet=parseFloat(bet)
     if (isNaN(numberbet)|| numberbet<=0 || numberbet > balance/lines){
      console.log('Invalid Bet. Try again !!!!!')
     }
     else
     {
        return numberbet;
     }
  }
}

let balance=deposit()
const numberOfLines= getNumber()
const bet =getBet(balance,numberOfLines)