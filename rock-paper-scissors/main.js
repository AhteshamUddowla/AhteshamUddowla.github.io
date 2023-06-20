let score = JSON.parse(localStorage.getItem('score'));

if(score === null){
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    }
}

function reset(){
    score.wins = 0,
    score.losses = 0,
    score.ties = 0;
    localStorage.removeItem('score');
    updateScore();
    location.reload();
}

function updateScore(){
    document.querySelector('.score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

let intervalId;

function autoplay(){
    
    if(document.querySelector('.auto-play-btn').innerHTML.trim()==='Auto Play'){
        document.querySelector('.auto-play-btn').innerHTML = 'Stop Play';
        intervalId = setInterval(function(){
            let num = Math.ceil(Math.random() * 3);
            let playerMove;
            if(num===1)
                playerMove = 'rock';
            else if(num===2)
                playerMove = 'paper';
            else if(num===3)
                playerMove = 'scissors'; 
            playGame(playerMove);
        }, 1000);
    }
    else{
        clearInterval(intervalId);
        document.querySelector('.auto-play-btn').innerHTML='Auto Play';
    }
    
}

function playGame(playerMove){

    let num, computerMove, result;

    num = Math.ceil(Math.random() * 3);

    if(num===1)
        computerMove = 'rock';
    else if(num===2)
        computerMove = 'paper';
    else if(num===3)
        computerMove = 'scissors';

    if(playerMove===computerMove)
    {
            result = 'Tie.';
            score.ties++;
    }
    else if( (playerMove==='rock' && computerMove==='scissors') || 
                (playerMove==='paper' && computerMove==='rock') ||
                (playerMove==='scissors' && computerMove==='paper') )
    {
            result = 'You Win.';
            score.wins++;
    }
    else if( (playerMove==='rock' && computerMove==='paper') || 
            (playerMove==='paper' && computerMove==='scissors') ||
            (playerMove==='scissors' && computerMove==='rock') )
    {
            result = 'You Lose.';
            score.losses++;
    }

    localStorage.setItem('score', JSON.stringify(score));

    // alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}.\nWins: ${score.wins}, Losses: ${score.losses}, Tie: ${score.ties}`);
    document.querySelector('.result').innerHTML = `${result}`;
    document.querySelector('.choosen').innerHTML = 
    `You <img class="move-icon" src="images/${playerMove}-emoji.png">  
    <img class="move-icon" src="images/${computerMove}-emoji.png"> Computer`;
    updateScore();
}

updateScore();