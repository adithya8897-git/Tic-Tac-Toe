let boxes=document.querySelectorAll('.game')
let reset=document.querySelector('.reset-btn')
let playero=true;
let winnerr=document.querySelector('.msg')
let container=document.querySelector('.container')
let msgcontainer=document.querySelector('.msg-container')
let newgame=document.querySelector('.new')
let playbtn=document.querySelector('.play-game')
let start=document.querySelector('.play-btn')
let audio=new Audio("audio.mp3")
const winning=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

audioplay=()=>{
    audio.play()
}
start.classList.remove('hide1')
startgame=()=>{
    container.classList.remove('disable-game')
    start.classList.add('hide1')
}

playbtn.addEventListener('click',()=>{
    startgame();
    audioplay();
})

const showWinner=(winner)=>{
    winnerr.innerText=`winner is ${winner}`;
    msgcontainer.classList.remove("hide")
    disablebtns()
}

const checkWinner=()=>{
    for(let pattern of winning){
        let pos1val=boxes[pattern[0]].innerText
        let pos2val=boxes[pattern[1]].innerText
        let pos3val=boxes[pattern[2]].innerText

        if(pos1val != "" && pos2val != "" && pos3val != "")
            if(pos1val===pos2val && pos2val===pos3val){
                showWinner(pos1val);
            }
    }
}

boxes.forEach((game) => {
    game.addEventListener('click',()=>{
        console.log("btn clicked")
        if(playero){
            game.innerText='O';
            playero=false
        }else{
            game.innerText='X';
            playero=true
        }
        game.disabled=true;
        checkWinner();
        audioplay()
    })
    })


const enablefunc=()=>{
    for(let box of boxes){
        box.disabled=false
        box.innerText="";
    }
}

const resetfuc=()=>{
    playero=true;
    enablefunc();
    msgcontainer.classList.add("hide")
}


const disablebtns=()=>{
    for(let box of boxes){
        box.disabled=true
    }
}




newgame.addEventListener('click',resetfuc)
reset.addEventListener('click',resetfuc)





