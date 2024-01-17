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

const transpose=(reels)=>{
   const rows=[]
   for(let i =0;i<ROWS;i++)
   {
      rows.push([])
      for(let j=0;j<COLUMNS;j++){
         rows[i].push(reels[j][i])
      }
   }
   return rows
}

const printRows = (rows) => {
  for (const row of rows) {
    let rowString = "";
    for (const [i, symbol] of row.entries()) {
      rowString += symbol;
      if (i != row.length - 1) {
        rowString += " | ";
      }
    }
    console.log(rowString);
  }
};

const getWinnings = (rows, bet, lines) => {
  let winnings = 0;

  for (let row = 0; row < lines; row++) {
    const symbols = rows[row];
    let allSame = true;

    for (const symbol of symbols) {
      if (symbol != symbols[0]) {
        allSame = false;
        break;
      }
    }

    if (allSame) {
      winnings += bet * SYMBOLS_VALUES[symbols[0]];
    }
  }

  return winnings;
};


const game = () => {
  let balance = deposit();

  while (true) {
    console.log("You have a balance of $" + balance);
    const numberOfLines = getNumber();
    const bet = getBet(balance, numberOfLines);
    balance -= bet * numberOfLines;
    const reels = spin();
    const rows = transpose(reels);
    printRows(rows);
    const winnings = getWinnings(rows, bet, numberOfLines);
    balance += winnings;
    console.log("You won, $" + winnings.toString());

    if (balance <= 0) {
      console.log("You ran out of money!");
      break;
    }

    const playAgain = prompt("Do you want to play again (y/n)? ");

    if (playAgain != "y") break;
  }
};

game();