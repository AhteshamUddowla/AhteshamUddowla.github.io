let board = [   [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ];

let i=0;
var win = document.getElementById("winner");

function tic1(){
    var elem = document.getElementById("btn1");
    if (i%2==0 && elem.innerHTML=="" && win.innerHTML=="") {elem.innerHTML = "X"; board[0][0]=1; i++; if(game()) win.innerHTML = "X WINNER";}
    else if (i%2==1 && elem.innerHTML=="" && win.innerHTML=="") {elem.innerHTML = "O"; board[0][0]=-1;  i++; if(game()) win.innerHTML = "O WINNER";}
    if(i==9 && (win.innerHTML == null || win.innerHTML == "")){
        document.getElementById("draw").innerHTML = "Drawn!";
    }
}
function tic2(){
    var elem = document.getElementById("btn2");
    if (i%2==0 && elem.innerHTML=="" && win.innerHTML=="") {elem.innerHTML = "X"; board[0][1]=1; i++; if(game()) win.innerHTML = "X WINNER";}
    else if (i%2==1 && elem.innerHTML=="" && win.innerHTML=="") {elem.innerHTML = "O"; board[0][1]=-1; i++; if(game()) win.innerHTML = "O WINNER";}
    if(i==9 && (win.innerHTML == null || win.innerHTML == "")){
        document.getElementById("draw").innerHTML = "Drawn!";
    }
}
function tic3(){
    var elem = document.getElementById("btn3");
    if (i%2==0 && elem.innerHTML=="" && win.innerHTML=="") {elem.innerHTML = "X"; board[0][2]=1; i++; if(game()) win.innerHTML = "X WINNER";}
    else if (i%2==1 && elem.innerHTML=="" && win.innerHTML=="") {elem.innerHTML = "O"; board[0][2]=-1; i++; if(game()) win.innerHTML = "O WINNER";}
    if(i==9 && (win.innerHTML == null || win.innerHTML == "")){
        document.getElementById("draw").innerHTML = "Drawn!";
        }
}
function tic4(){
    var elem = document.getElementById("btn4");
    if (i%2==0 && elem.innerHTML=="" && win.innerHTML=="") {elem.innerHTML = "X"; board[1][0]=1; i++; if(game()) win.innerHTML = "X WINNER";}
    else if (i%2==1 && elem.innerHTML=="" && win.innerHTML=="") {elem.innerHTML = "O"; board[1][0]=-1; i++; if(game()) win.innerHTML = "O WINNER";}
    if(i==9 && (win.innerHTML == null || win.innerHTML == "")){
        document.getElementById("draw").innerHTML = "Drawn!";
    }
}
function tic5(){
    var elem = document.getElementById("btn5");
    if (i%2==0 && elem.innerHTML=="" && win.innerHTML=="") {elem.innerHTML = "X"; board[1][1]=1; i++; if(game()) win.innerHTML = "X WINNER";}
    else if (i%2==1 && elem.innerHTML=="" && win.innerHTML=="") {elem.innerHTML = "O"; board[1][1]=-1; i++; if(game()) win.innerHTML = "O WINNER";}
    if(i==9 && (win.innerHTML == null || win.innerHTML == "")){
        document.getElementById("draw").innerHTML = "Drawn!";
    }
}
function tic6(){
    var elem = document.getElementById("btn6");
    if (i%2==0 && elem.innerHTML=="" && win.innerHTML=="") {elem.innerHTML = "X"; board[1][2]=1; i++; if(game()) win.innerHTML = "X WINNER";}
    else if (i%2==1 && elem.innerHTML=="" && win.innerHTML=="") {elem.innerHTML = "O"; board[1][2]=-1; i++; if(game()) win.innerHTML = "O WINNER";}
    if(i==9 && (win.innerHTML == null || win.innerHTML == "")){
        document.getElementById("draw").innerHTML = "Drawn!";
    }
}
function tic7(){
    var elem = document.getElementById("btn7");
    if (i%2==0 && elem.innerHTML=="" && win.innerHTML=="") {elem.innerHTML = "X"; board[2][0]=1; i++; if(game()) win.innerHTML = "X WINNER";}
    else if (i%2==1 && elem.innerHTML=="" && win.innerHTML=="") {elem.innerHTML = "O"; board[2][0]=-1; i++; if(game()) win.innerHTML = "O WINNER";}
    if(i==9 && (win.innerHTML == null || win.innerHTML == "")){
        document.getElementById("draw").innerHTML = "Drawn!";
    }
}
function tic8(){
    var elem = document.getElementById("btn8");
    if (i%2==0 && elem.innerHTML=="" && win.innerHTML=="") {elem.innerHTML = "X"; board[2][1]=1; i++; if(game()) win.innerHTML = "X WINNER";}
    else if (i%2==1 && elem.innerHTML=="" && win.innerHTML=="") {elem.innerHTML = "O"; board[2][1]=-1; i++; if(game()) win.innerHTML = "O WINNER";}
    if(i==9 && (win.innerHTML == null || win.innerHTML == "")){
        document.getElementById("draw").innerHTML = "Drawn!";
    }
}
function tic9(){
    var elem = document.getElementById("btn9");
    if (i%2==0 && elem.innerHTML=="" && win.innerHTML=="") {elem.innerHTML = "X"; board[2][2]=1; i++; if(game()) win.innerHTML = "X WINNER";}
    else if (i%2==1 && elem.innerHTML=="" && win.innerHTML=="") {elem.innerHTML = "O"; board[2][2]=-1; i++; if(game()) win.innerHTML = "O WINNER";}
    if(i==9 && (win.innerHTML == null || win.innerHTML == "")){
        document.getElementById("draw").innerHTML = "Drawn!";
    }
}

function game(){
    if((board[0][0]==board[0][1] && board[0][0]==board[0][2] && board[0][0]) || (board[0][0]==board[1][0] && board[0][0]==board[2][0] && board[0][0]) || (board[0][0]==board[1][1] && board[0][0]==board[2][2] && board[0][0]) ||
        (board[0][1]==board[1][1] && board[0][1]==board[2][1] && board[0][1]) || (board[0][2]==board[1][2] && board[0][2]==board[2][2] && board[0][2]) || (board[0][2]==board[1][1] && board[0][2]==board[2][0] && board[0][2]) || 
        (board[1][0]==board[1][1] && board[1][0]==board[1][2] && board[1][0]) || (board[2][0]==board[2][1] && board[2][0]==board[2][2] && board[2][0]))
        return true;
    else return false;
}

function reset(){
    location.reload();
}