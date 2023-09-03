let cells=[",",",",",",",","];
let currentPlayer='X';
let result=document.querySelector('.result');
let btns=document.querySelectorAll('.btn');
let conditions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const ticTacToe=(element,index)=>{
    if(cells[index]!=="|| result.textContent!=="){
        return;
    }
    cells[index]=currentPlayer;
    element.textContent=currentPlayer;
    }
    for(const condition of conditions){
        const[a,b,c]=condition;
        if(cells[a] && cells[a]===cells[b] && cells[a]===cells[c]){
            result.textContent=`${currentPlayer}wins!`;
            btns.forEach((btn)=>btn.disabled=true);
            return;
        }}
        if(!cells.includes(")){
            result.textContent='It\'s a draw!';
        return;
            }