//create variables for DOM elements
let instructions = document.getElementById('instructions');

let cells = document.getElementsByClassName('cell');


let turn = 0;
for (let i = 0; i < cells.length; i++){
    cells[i].addEventListener('click', (event) => {
            if(event.target.innerHTML == "X"|| event.target.innerHTML == "O"){
                console.log('has value inside')
                return;
            }
                else if (turn % 2 == 0) {
                    event.target.innerHTML = 'X';   //if the turn is even, it's X's turn
                    currentPlayer = playerO;
                    instructions.innerHTML = `It is now Player ${currentPlayer}'s turn`;
                    turn++
                    checkForWin()
                } else if(turn % 2 == 1){
                    event.target.innerHTML = 'O';  //if the turn is odd, it's 0's turn
                    currentPlayer = playerX;
                    instructions.innerHTML = `It is now Player ${currentPlayer}'s turn`;
                    turn++;
                    checkForWin();                
            }
        }); 
    } 


            
const playerX = 'X';
const playerO = 'O';
let currentPlayer = playerX;
let gameEnd = false;
let winnerMessage = document.getElementById('winnerMessage');

function checkForWin(){
    const cell0 = document.getElementById(0).innerHTML;
    const cell1 = document.getElementById(1).innerHTML;
    const cell2 = document.getElementById(2).innerHTML;
    const cell3 = document.getElementById(3).innerHTML;
    const cell4 = document.getElementById(4).innerHTML;
    const cell5 = document.getElementById(5).innerHTML;
    const cell6 = document.getElementById(6).innerHTML;
    const cell7 = document.getElementById(7).innerHTML;
    const cell8 = document.getElementById(8).innerHTML;

    if((cell0 == 'X') && (cell1 == 'X') && (cell2 == 'X')){
        alert("Player X Won!", 'danger');
        instructions.innerHTML = "Please reset game to play again";
    } else if((cell3 == "X") && (cell4 == "X") && (cell5 == "X")){
        alert("Player X Won!", 'danger');
        instructions.innerHTML = "Please reset game to play again";
    } else if((cell6 == "X") && (cell7 == "X") && (cell8 == "X")){
        alert("Player X Won!", 'danger');
        instructions.innerHTML = "Please reset game to play again";
    } else if ((cell0 == "X") && (cell3 == "X") && (cell6 == "X")){
        alert("Player X Won!", 'danger');
        instructions.innerHTML = "Please reset game to play again";
    } else if((cell1 == "X") && (cell4 == "X") && (cell7 == "X")){
        alert("Player X Won!", 'danger');
        instructions.innerHTML = "Please reset game to play again";
    } else if ((cell2 == "X") && (cell5 == "X") && (cell8 == "X")){
        alert("Player X Won!", 'danger');
        instructions.innerHTML = "Please reset game to play again";
    } else if ((cell0 == "X") && (cell4 == "X") && (cell8 == "X")){
        alert("Player X Won!", 'danger');
        instructions.innerHTML = "Please reset game to play again";
    }else if ((cell2 == "X") && (cell4 == "X") && (cell6 == "X")){
        winnerMessage.innerHTML = `Player X Won!`
        alert("Player X Won!", 'danger');
        instructions.innerHTML = "Please reset game to play again";
    }

    if((cell0 == 'O') && (cell1 == 'O') && (cell2 == 'O')){
        alert("Player O Won!", 'danger');
        instructions.innerHTML = "Please reset game to play again";
    } else if((cell3 == "O") && (cell4 == "O") && (cell5 == "O")){
        alert("Player O Won!", 'danger');
        instructions.innerHTML = "Please reset game to play again";
    } else if((cell6 == "O") && (cell7 == "O") && (cell8 == "O")){
        alert("Player O Won!", 'danger');
        instructions.innerHTML = "Please reset game to play again";
    } else if ((cell0 == "O") && (cell3 == "O") && (cell6 == "O")){
        alert("Player O Won!", 'danger');
        instructions.innerHTML = "Please reset game to play again";
    } else if((cell1 == "O") && (cell4 == "O") && (cell7 == "O")){
        alert("Player O Won!", 'danger');
        instructions.innerHTML = "Please reset game to play again";
    } else if ((cell2 == "O") && (cell5 == "O") && (cell8 == "O")){
        alert("Player O Won!", 'danger');
        instructions.innerHTML = "Please reset game to play again";
    } else if ((cell0 == "O") && (cell4 == "O") && (cell8 == "O")){
        alert("Player O Won!", 'danger');
        instructions.innerHTML = "Please reset game to play again";
    }else if ((cell2 == "O") && (cell4 == "O") && (cell6 == "O")){
        winnerMessage.innerHTML = `Player O Won!`
        alert("Player O Won!", 'danger');
        instructions.innerHTML = "Please reset game to play again";
    } else if((cell0 == "X" || cell0 == "O") && (cell1 == "X" || cell1 == "O") && (cell2 == "X" || cell2 == "O") && (cell3 == "X" || cell3 == "O") 
    && (cell4 == "X" || cell4 == "O") && (cell5 == "X" || cell5 == "O") && (cell6 == "X" || cell6 == "O") && (cell7 == "X" || cell7 == "O") && (cell8 == "X" || cell8 == "O")){
        alert("It's a TIE! Please restart the game to play again", 'primary');
        console.log(alert)
        instructions.innerHTML = "GAME OVER";
    }
}


function resetGame(){
    window.location.reload();
    // document.getElementById(0).innerHTML = '';
    // document.getElementById(1).innerHTML = '';
    // document.getElementById(2).innerHTML = '';
    // document.getElementById(3).innerHTML = '';
    // document.getElementById(4).innerHTML = '';
    // document.getElementById(5).innerHTML = '';
    // document.getElementById(6).innerHTML = '';
    // document.getElementById(7).innerHTML = '';
    // document.getElementById(8).innerHTML = '';
    // instructions.innerHTML = "Player X's Turn";
    // winnerMessage.innerHTML = '';
}


const alertPlaceholder = document.getElementById('AlertPlaceholder')

const alert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="container alert alert-${type} alert-dismissible p-3 fs-1 fw-bold text-break" id="winnerMessage" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alertPlaceholder.append(wrapper)
  }
  

      