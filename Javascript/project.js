/////////// AGENDA ///////////////////////////////
// Deposit money
// Determine no of lines to bet on
// Collect a bet amount
// Spin the slot machine
// Check if the user won any prize
// Give or take money.
// Play again

const prompt = require('prompt-sync')();

//Constants for the machine..
const ROWS=3;
const COLUMNS=3;

//Diff symbol options for a column/reel...
const SYMBOLS_COUNT = {
   A: 2,
   B: 4,
   C: 6,
   D: 8
};

// Multiplier of each row
const SYMBOLS_VALUES = {
   A: 5,
   B: 4,
   C: 3,
   D: 2
};


const spin = () => {
 const symbols=[];
 for (const [symbol,count] of Object.entries(SYMBOLS_COUNT)){
      for (let i=0;i<count;i++)
      {
         symbols.push(symbol);
         //use push to append an entry into the array..
      }

   }

   const reels=[[],[],[]];
   for (let i=0;i<COLUMNS;i++){
      const reelSymbols= [...symbols];
      for (let j=0;j<ROWS;j++){
         const randomIndex=Math.floor(Math.random()*reelSymbols.length);
         const selectedSymbol=reelSymbols[randomIndex];
         reels[i].push(selectedSymbol);
         reelSymbols.splice(randomIndex,1);
      }
   }
   return reels;

}


//Deposit amount of user...
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

//No of lines to bet on...
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


//Get bet per lines....
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

console.log(spin())
let balance=deposit()
const numberOfLines= getNumber()
const bet =getBet(balance,numberOfLines)