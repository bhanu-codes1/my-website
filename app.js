let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#Rs")
let msg=document.querySelector("#msg")
let msgContainer=document.querySelector(".msg-container")
let newGame=document.querySelector("#new")

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide")
}


let turnO=true;
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO===true){
            box.innerText="O"
            turnO=false;
        }else{
            box.innerText="X"
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    })
})


const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""
    }
}

const showwinner=(winner)=>{
    msg.innerText=`Congratulation ,Winner is ${winner}`
    msgContainer.classList.remove("hide")
    disableBoxes();
}   

const checkWinner=()=>{
    for(let i of winPatterns){
        let post1=boxes[i[0]].innerText;
        let post2=boxes[i[1]].innerText;
        let post3=boxes[i[2]].innerText;
        if(post1!=""&&post2!=""&&post3!=""){
            if(post1===post2&post2===post3){
                console.log("Winner",post1)
                showwinner(post1);
            }
       }
    }
}

reset.addEventListener("click",resetGame);
newGame.addEventListener("click",resetGame);